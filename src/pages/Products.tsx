import { useProducts } from "../hooks/useProducts";
import { useSearchParams } from "react-router-dom";
import { Product } from "../types";

const Products = () => {
  const { data: products = [], isLoading, isError } = useProducts();
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q")?.toLowerCase() || "";

  const filtered = query
    ? products.filter((product: Product) =>
        product.title.toLowerCase().includes(query)
      )
    : products;

  if (isLoading) return <p className="text-center mt-10">Loading...</p>;
  if (isError) return <p className="text-center mt-10 text-red-500">Error loading products</p>;

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">Barcha mahsulotlar</h1>
      {filtered.length === 0 ? (
        <p>Hech qanday mahsulot topilmadi.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filtered.map((product: Product) => (
            <div
              key={product.id}
              className="border rounded-lg shadow hover:shadow-md transition p-4"
            >
              <img
                src={product.image}
                alt={product.title}
                className="h-40 w-full object-contain mb-4"
              />
              <h2 className="font-semibold">{product.title}</h2>
              <p className="text-gray-600">${product.price}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Products;
