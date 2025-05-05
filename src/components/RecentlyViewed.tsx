import React from "react";

const RecentlyViewed: React.FC = () => {
  // Bu joyda hali real data yo‘q, lekin UI ko‘rinishi tayyor bo‘lib turadi.
  return (
    <div className="mt-12">
      <h2 className="text-xl font-bold mb-4">Yaqinda ko‘rilgan mahsulotlar</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {[1, 2, 3, 4].map((item) => (
          <div
            key={item}
            className="border p-4 rounded-lg shadow hover:shadow-md transition"
          >
            <div className="h-32 bg-gray-200 rounded mb-2" />
            <h3 className="font-medium">Mahsulot nomi {item}</h3>
            <p className="text-sm text-gray-500">Narxi: 100 000 so‘m</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentlyViewed;
