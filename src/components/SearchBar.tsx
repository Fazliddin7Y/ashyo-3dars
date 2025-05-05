import { useState, useEffect } from "react";
import { useProducts } from "../hooks/useProducts";
import { useNavigate } from "react-router-dom";
import { Product } from "../types";
import { Search } from "lucide-react"; // <-- ICON QO‘SHILDI

const SearchBar = () => {
  const [search, setSearch] = useState("");
  const [filtered, setFiltered] = useState<Product[]>([]);
  const { data: products = [] } = useProducts();
  const navigate = useNavigate();

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (search.trim() === "") {
        setFiltered([]);
        return;
      }

      const result = products.filter((product: Product) =>
        product.title.toLowerCase().includes(search.toLowerCase())
      );
      setFiltered(result);
    }, 300);

    return () => clearTimeout(timeout);
  }, [search, products]);

  const handleSearch = (term: string) => {
    if (term.trim()) {
      navigate(`/products?q=${encodeURIComponent(term.trim())}`);
      setSearch("");
      setFiltered([]);
    }
  };

  return (
    <div className="relative w-full max-w-md">
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleSearch(search)}
        placeholder="What are you looking for?"
        className="w-full border border-gray-300 rounded-full py-2 pl-4 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        onClick={() => handleSearch(search)}
        className="absolute right-2 top-1/2 -translate-y-1/2 text-blue-600 hover:text-blue-800"
      >
        <Search size={20} />
      </button>

      {search && filtered.length > 0 && (
        <div className="absolute top-12 left-0 right-0 bg-white shadow-lg rounded-lg z-10 max-h-60 overflow-auto">
          {filtered.map((item: Product) => (
            <div
              key={item.id}
              onClick={() => handleSearch(item.title)}
              className="p-4 hover:bg-gray-100 cursor-pointer border-b"
            >
              {item.title}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
