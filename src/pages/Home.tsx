import React, { useEffect, useState } from "react";
import { useProducts } from "../hooks/useProducts";
import CarouselRow from "../components/CarouselRow";
import PromoBanner from "../components/PromoBanner";
import HeroCarousel from "../components/HeroCarousel";  // Import HeroCarousel

const brands = [
  "artel", "samsung", "nokia", "mi", "apple", "vivo", "huawei"
];

const Home: React.FC = () => {
  const { data: products, isLoading, isError } = useProducts();
  const [recentProducts, setRecentProducts] = useState<any[]>([]);

  useEffect(() => {
    const recent = localStorage.getItem("recentProducts");
    if (recent) {
      setRecentProducts(JSON.parse(recent));
    }
  }, []);

  if (isLoading) return <p className="text-center mt-10">Yuklanmoqda...</p>;
  if (isError) return <p className="text-center mt-10 text-red-500">Xatolik yuz berdi</p>;

  return (
    <div className="space-y-12">
      {/* Hero Carousel */}
      <HeroCarousel /> 

      {/* Brand logos */}
      <section className="max-w-7xl mx-auto px-4 py-6">
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-7 gap-4 place-items-center">
          {brands.map((brand, i) => (
            <div
              key={i}
              className="w-full h-24 flex items-center justify-center rounded-lg shadow-sm transition-transform transform hover:scale-105 hover:shadow-md bg-white"
            >
              <img
                src={`/images/brands/${brand}.png`}
                alt={brand}
                className="max-h-20 object-contain"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Carousel sections */}
      <CarouselRow title="Eng mashhur mahsulotlar" products={products} />
      <CarouselRow title="Telefon va Gadjetlar" products={products} />
      <CarouselRow title="Yangi kelgan mahsulotlar" products={products} />

      {/* Kategoriya bloklari */}
      <section className="max-w-7xl mx-auto px-4">
        <div className="text-center">
          <img
            src="./big.png" 
            alt="Categories"
            className="mx-auto h-74 mb-4 object-contain"
          />
        </div>
      </section>

      {/* Aksiyadagi tovarlar */}
      <CarouselRow title="Aksiyadagi tovarlar" products={products} />

      {/* Qora promo banner */}
      <PromoBanner />

      {/* Oxirgi ko‘rgan mahsulotlar */}
      <div className="mt-10">
        <h2 className="text-xl font-semibold mb-4">Oxirgi ko‘rgan mahsulotlar</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {recentProducts.length === 0 ? (
            <p className="text-center col-span-5">Hech qanday mahsulot ko‘rilmagan</p>
          ) : (
            recentProducts.map((product: any) => (
              <div key={product.id} className="border p-2 rounded text-center">
                <img
                  src={product.image}
                  alt={product.title}
                  className="mx-auto mb-2 w-32 h-32 object-contain"
                />
                <p className="text-sm">{product.title}</p>
                <p className="text-blue-600 font-bold text-sm">${product.price}</p>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
