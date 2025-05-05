import React, { useRef } from "react";
import { Link } from "react-router-dom";

interface Product {
  id: number;
  title: string;
  image: string;
  description: string;
  price: number;
}

interface Props {
  title: string;
  products: Product[];
}

const CarouselRow: React.FC<Props> = ({ title, products }) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === "left" ? -400 : 400,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="max-w-7xl mx-auto px-4 mb-10">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-semibold">{title}</h2>
        <div className="space-x-2">
          <button onClick={() => scroll("left")} className="px-4 py-1 bg-gray-200 hover:bg-gray-300 rounded">
            ◀️
          </button>
          <button onClick={() => scroll("right")} className="px-4 py-1 bg-gray-200 hover:bg-gray-300 rounded">
            ▶️
          </button>
        </div>
      </div>

      <div ref={scrollRef} className="flex gap-4 overflow-x-auto scrollbar-hide scroll-smooth">
        {products.map((product) => (
          <Link
            to={`/product/${product.id}`}
            key={product.id}
            className="min-w-[250px] border rounded-xl overflow-hidden shadow hover:shadow-lg transition bg-white hover:no-underline text-inherit"
          >
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-40 object-contain p-2"
            />
            <div className="p-4">
              <h3 className="font-medium text-lg line-clamp-1">{product.title}</h3>
              <p className="text-gray-500 text-sm line-clamp-2">{product.description}</p>
              <span className="text-green-600 font-semibold">${product.price}</span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default CarouselRow;
