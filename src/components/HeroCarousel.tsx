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
    <div className="w-full bg-[#f7f7f7] py-12">
      <div className="max-w-7xl mx-auto px-6">
        <Slider {...settings}>
          {/* SLIDE 1 */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 min-h-[400px]">
            {/* Text */}
            <div className="flex-1 text-left md:pl-4">
              <h2 className="text-3xl md:text-5xl font-bold text-[#0f0f0f] mb-4">
                Siz kutgan <span className="text-[#0f0f0f]">Xiaomi 12 Mi Laite</span>
              </h2>
              <p className="text-[#444] mb-6 text-base md:text-lg max-w-md">
                Orzuyingizdagi narx va dizayndagi yangi <strong>Xiaomi 12 Mi Laite</strong> siz uchun eng yaxshi tanlovlardan biri!
              </p>
              <Link
                to="/products"
                className="inline-block bg-[#0062bd] hover:bg-[#004b95] text-white px-6 py-2 rounded text-sm transition"
              >
                Batafsil
              </Link>
            </div>

            {/* Image */}
            <div className="flex-1 flex justify-center md:justify-end">
              <img
                src=""
                alt="Xiaomi 12 Mi"
                className="w-full max-w-[500px] h-auto object-contain"
              />
            </div>
          </div>

          {/* SLIDE 2 */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 min-h-[400px]">
            <div className="flex-1 text-left md:pl-4">
              <h2 className="text-3xl md:text-5xl font-bold text-[#0f0f0f] mb-4">
                Yangi <span className="text-[#0f0f0f]">Samsung S22 Ultra</span>
              </h2>
              <p className="text-[#444] mb-6 text-base md:text-lg max-w-md">
                Ajoyib kamera va mukammal tezlik – bu yangi <strong>Samsung S22 Ultra</strong> bilan mumkin!
              </p>
              <Link
                to="/products"
                className="inline-block bg-[#0062bd] hover:bg-[#004b95] text-white px-6 py-2 rounded text-sm transition"
              >
                Batafsil
              </Link>
            </div>
            <div className="flex-1 flex justify-center md:justify-end">
              <img
                src="/images/banner2.jpg"
                alt="Samsung S22"
                className="w-full max-w-[500px] h-auto object-contain"
              />
            </div>
          </div>
        </Slider>
      </div>

      {/* Custom Dots */}
      <style>{`
        .custom-dots {
          bottom: -20px;
          text-align: center;
        }
        .custom-dots li {
          margin: 0 4px;
        }
        .custom-dots li button:before {
          font-size: 10px;
          color: #ccc;
          opacity: 1;
        }
        .custom-dots li.slick-active button:before {
          color: #0062bd;
        }
      `}</style>
    </div>
  );
};

export default HeroCarousel;
