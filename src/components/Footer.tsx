// src/components/Footer.tsx
const Footer = () => {
  return (
    <footer className="bg-white text-gray-800 py-16 mt-12">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

        {/* Tarmoqlar bo'limi */}
        <div className="space-y-6">
          <h3 className="font-bold text-lg">Bizning tarmoqlar</h3>
          <div className="flex gap-6">
            <a href="#" aria-label="Facebook" className="text-blue-600 hover:text-blue-800">
              <img src="/facebook.svg" className="w-7 h-7" alt="Facebook" />
            </a>
            <a href="#" aria-label="Instagram" className="text-pink-600 hover:text-pink-800">
              <img src="/instagram.svg" className="w-7 h-7" alt="Instagram" />
            </a>
            <a href="#" aria-label="Telegram" className="text-blue-400 hover:text-blue-600">
              <img src="/telegram.svg" className="w-7 h-7" alt="Telegram" />
            </a>
          </div>
        </div>

        {/* Menu bo'limi */}
        <div className="space-y-6">
          <h3 className="font-bold text-lg">Menu</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-gray-600">Ashyo haqida</a></li>
            <li><a href="#" className="hover:text-gray-600">Mahsulot va xizmatlar</a></li>
            <li><a href="#" className="hover:text-gray-600">Yordam va aloqa</a></li>
            <li><a href="#" className="hover:text-gray-600">Mahsulotlar haqida ma'lumot</a></li>
          </ul>
        </div>

        {/* Kompaniya haqida */}
        <div className="space-y-6">
          <h3 className="font-bold text-lg">Kompaniya</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-gray-600">Biz haqimizda</a></li>
            <li><a href="#" className="hover:text-gray-600">Ish imkoniyatlari</a></li>
            <li><a href="#" className="hover:text-gray-600">Maxfiylik siyosati</a></li>
            <li><a href="#" className="hover:text-gray-600">Foydalanish shartlari</a></li>
          </ul>
        </div>

        {/* Aloqa bo'limi */}
        <div className="space-y-6">
          <h3 className="font-bold text-lg">Aloqa</h3>
          <p className="text-sm">+998 (71) 123-45-67</p>
          <p className="mt-2 text-gray-500 text-sm">Savolingiz bormi? Biz bilan bog'laning.</p>
          <p className="text-sm">Bizning manzil: Tashkent, Mirzo Ulug'bek, str. 123</p>
        </div>
      </div>

      {/* Footer pastki qismi */}
      <div className="mt-10 text-center text-sm text-gray-500 border-t border-gray-300 pt-6">
        <p>&copy; {new Date().getFullYear()} Ashyo. Barcha huquqlar himoyalangan.</p>
        <p className="mt-2">Site by <a href="https://www.example.com" className="text-blue-500 hover:text-blue-700">Example Company</a></p>
      </div>
    </footer>
  );
};

export default Footer;
