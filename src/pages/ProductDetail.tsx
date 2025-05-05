import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { useCart } from "../context/CartContext"; // Import useCart hook

const ProductDetail: React.FC = () => {
  const { id } = useParams();
  const [isLiked, setIsLiked] = useState(false);
  const [recentProducts, setRecentProducts] = useState<any[]>([]); // For storing the product data
  const { addToCart } = useCart(); // Accessing addToCart from CartContext

  const { data: product, isLoading, isError } = useQuery({
    queryKey: ["product", id],
    queryFn: async () => {
      const res = await axios.get(`https://fakestoreapi.com/products/${id}`);
      return res.data;
    },
    enabled: !!id,
  });

  useEffect(() => {
    const storedViewed = JSON.parse(localStorage.getItem("recentlyViewed") || "[]");

    if (!storedViewed.includes(Number(id))) {
      storedViewed.push(Number(id));
    }

    localStorage.setItem("recentlyViewed", JSON.stringify(storedViewed));

    const fetchRecentProducts = async () => {
      const productData = await Promise.all(
        storedViewed.map(async (prodId: number) => {
          const res = await axios.get(`https://fakestoreapi.com/products/${prodId}`);
          return res.data;
        })
      );
      setRecentProducts(productData); // Set the fetched product data
    };

    fetchRecentProducts();
  }, [id]);

  const toggleLike = () => {
    setIsLiked(!isLiked);
  };

  const handleAddToCart = () => {
    if (product) {
      addToCart(product); // Add product to the cart when "Add to Cart" button is clicked
    }
  };

  if (isLoading) return <p className="text-center mt-10">Yuklanmoqda...</p>;
  if (isError || !product) return <p className="text-center mt-10 text-red-500">Xatolik yuz berdi</p>;

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <div className="flex flex-col lg:flex-row gap-10 bg-white p-6 rounded-xl shadow-lg">
        <div className="flex-1 flex items-center justify-center">
          <img
            src={product.image}
            alt={product.title}
            className="w-72 h-72 object-contain transition-transform duration-300 hover:scale-105"
          />
        </div>

        <div className="flex-1">
          <span className="text-sm text-gray-400 uppercase">{product.category}</span>
          <h1 className="text-3xl font-bold mb-2">{product.title}</h1>

          <div className="flex items-center mb-4">
            <div className="flex text-yellow-400 text-lg">
              {Array.from({ length: Math.round(product.rating?.rate || 0) }).map((_, i) => (
                <span key={i}>★</span>
              ))}
              {Array.from({ length: 5 - Math.round(product.rating?.rate || 0) }).map((_, i) => (
                <span key={i} className="text-gray-300">★</span>
              ))}
            </div>
            <span className="ml-2 text-sm text-gray-500">({product.rating?.count} sharh)</span>
          </div>

          <div className="text-2xl text-green-600 font-semibold mb-6">${product.price}</div>

          <div className="mb-4">
            <button
              onClick={toggleLike}
              className={`text-xl ${isLiked ? "text-red-600" : "text-gray-400"} transition`}
            >
              {isLiked ? <FaHeart /> : <FaRegHeart />}
              {isLiked ? " Yoqtirganingiz" : " Yoqtirish"}
            </button>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition">
              Xarid qilish
            </button>
            <button
              onClick={handleAddToCart}
              className="border border-gray-300 px-6 py-3 rounded-lg hover:border-gray-400 hover:bg-gray-50 transition"
            >
              Savatchaga qo‘shish
            </button>
          </div>
        </div>
      </div>

      {/* Recently Viewed Products */}
      <div className="mt-10">
        <h2 className="text-xl font-semibold mb-4">Oxirgi ko‘rgan mahsulotlar</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {recentProducts.length === 0 ? (
            <p className="text-center col-span-5">Hech qanday mahsulot ko‘rilmagan</p>
          ) : (
            recentProducts.map((product) => (
              <div key={product.id} className="border p-2 rounded text-center">
                <img src={product.image} alt={product.title} className="mx-auto mb-2 w-32 h-32 object-contain" />
                <p className="text-sm">{product.title}</p>
                <p className="text-blue-600 font-bold text-sm">${product.price}</p>
              </div>
            ))
          )}
        </div>
      </div>

      <div className="mt-10">
        <h2 className="text-xl font-semibold mb-4">Mahsulot Tavsifi</h2>
        <p className="text-gray-600 mb-4">{product.description}</p>
      </div>
    </div>
  );
};

export default ProductDetail;
