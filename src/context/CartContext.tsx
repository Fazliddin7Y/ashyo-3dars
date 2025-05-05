// src/context/CartContext.tsx
import { createContext, useContext, useState, ReactNode } from "react";

// Mahsulotning tipi
export interface Product {
  id: number;
  name: string;
  price: number;
  image?: string;
  [key: string]: any; // agar boshqa fieldlar ham bo‘lsa
}

// Context tipi
interface CartContextType {
  cart: (Product & { quantity: number })[];
  addToCart: (product: Product) => void;
}

// Contextni yaratish
export const CartContext = createContext<CartContextType | undefined>(undefined);

// Provider component
export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<(Product & { quantity: number })[]>([]);

  const addToCart = (product: Product) => {
    const exists = cart.find((item) => item.id === product.id);
    if (!exists) {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  return (
    <CartContext.Provider value={{ cart, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};

// Hook orqali foydalanish
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
