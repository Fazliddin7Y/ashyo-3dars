import React from "react";
import { useCart } from "../context/CartContext";

const Cart: React.FC = () => {
  const { cart } = useCart();

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6">Savatcha</h1>

      {cart.length === 0 ? (
        <p className="text-center">Savatchada hech narsa yo‘q</p>
      ) : (
        <div className="space-y-4">
          {cart.map((item) => (
            <div key={item.id} className="flex justify-between items-center border-b py-4">
              <div className="flex items-center">
                <img src={item.image} alt={item.title} className="w-16 h-16 object-contain" />
                <div className="ml-4">
                  <p className="font-semibold">{item.title}</p>
                  <p className="text-gray-500">${item.price} x {item.quantity}</p>
                </div>
              </div>
              <p className="font-semibold text-lg">${item.price * item.quantity}</p>
            </div>
          ))}
        </div>
      )}

      {cart.length > 0 && (
        <div className="mt-6">
          <button className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition">
            Xarid qilish
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;
