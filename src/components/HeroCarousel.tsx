import { FC } from 'react';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';

const HeroCarousel: FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    dotsClass: 'slick-dots custom-dots',
  };

  return (
    <div className="w-full bg-[#f7f7f7] py-4">
      <div className="max-w-7xl mx-auto px-2">
        <Slider {...settings}>
          {/* SLIDE 1 */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 min-h-[200px]">
            {/* Text */}
            <div className="flex-1 text-left md:pl-2">
              <h2 className="text-xl md:text-2xl font-bold text-[#0f0f0f] mb-2">
                Siz kutgan <span className="text-[#0f0f0f]">Xiaomi 12 Mi Lite</span>
              </h2>
              <p className="text-[#444] mb-4 text-sm md:text-base max-w-md">
                Orzuyingizdagi narx va dizayndagi yangi <strong>Xiaomi 12 Mi Lite</strong> siz uchun eng yaxshi tanlovlardan biri!
              </p>
              <Link
                to="/products"
                className="inline-block bg-[#0062bd] hover:bg-[#004b95] text-white px-4 py-2 rounded text-sm transition"
              >
                Batafsil
              </Link>
            </div>

            {/* Image */}
            <div className="flex-1 flex justify-center md:justify-end">
              <img
                src="./banner1.png"
                alt="Xiaomi 12 Mi"
                className="w-full max-w-64 h-auto object-contain"
              />
            </div>
          </div>

          {/* SLIDE 2 */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 min-h-[200px]">
            <div className="flex-1 text-left md:pl-2">
              <h2 className="text-xl md:text-2xl font-bold text-[#0f0f0f] mb-2">
                Yangi <span className="text-[#0f0f0f]">Samsung S22 Ultra</span>
              </h2>
              <p className="text-[#444] mb-4 text-sm md:text-base max-w-md">
                Ajoyib kamera va mukammal tezlik – bu yangi <strong>Samsung S22 Ultra</strong> bilan mumkin!
              </p>
              <Link
                to="/products"
                className="inline-block bg-[#0062bd] hover:bg-[#004b95] text-white px-4 py-2 rounded text-sm transition"
              >
                Batafsil
              </Link>
            </div>
            <div className="flex-1 flex justify-center md:justify-end">
              <img
                src="./banner1.png"
                alt="Samsung S22"
                className="w-full max-w-64 h-auto object-contain"
              />
            </div>
          </div>
        </Slider>
      </div>

      {/* Custom Dots */}
      <div className="slick-dots custom-dots">
        <style>{`
          .custom-dots {
            bottom: -15px;
            text-align: center;
          }
          .custom-dots li {
            margin: 0 4px;
          }
          .custom-dots li button:before {
            font-size: 8px;
            color: #ccc;
            opacity: 1;
          }
          .custom-dots li.slick-active button:before {
            color: #0062bd;
          }
        `}</style>
      </div>
    </div>
  );
};

export default HeroCarousel;
