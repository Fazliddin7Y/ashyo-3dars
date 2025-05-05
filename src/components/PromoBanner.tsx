import React from "react";

const PromoBanner: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto bg-black text-white rounded-xl overflow-hidden mt-10 flex items-center p-6 shadow-lg">
      {/* Rasm */}
      <div className="w-1/2 flex justify-center">
        <img
          src="/headphones.png"
          alt="Headphones"
          className="w-[250px] h-auto object-contain"
        />
      </div>

      {/* Matn va tugma */}
      <div className="w-1/2 px-6">
        <h2 className="text-2xl font-semibold mb-4 leading-snug">
          Musiqa zavqini his qilish uchun ko‘p mablag‘ sarflash shart emas!
        </h2>
        <button className="bg-white text-black px-6 py-2 rounded-md font-medium hover:bg-gray-200 transition">
          Batafsil
        </button>
      </div>
    </div>
  );
};

export default PromoBanner;
