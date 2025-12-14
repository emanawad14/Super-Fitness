import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const items: string[] = [
  "outdoor & online trainers",
  "personal training",
  "live classes",
  "personal training",
];

export default function MarqueeCarousel() {
  return (
    <div className="bg-[#ff4500] w-full py-4 overflow-hidden">
      <Swiper
        modules={[Autoplay]}
        slidesPerView="auto"
        loop={true}
        speed={8000}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        allowTouchMove={false}
        className="w-full"
      >
     
        <SwiperSlide className="w-auto">
          <div className="flex items-center gap-16 px-8 whitespace-nowrap">
            {items.map((text, index) => (
              <div key={index} className="flex items-center gap-4">
                <i className="fa-solid fa-star text-white text-lg"></i>

                <h1 className="text-white uppercase font-bold text-[20px] tracking-wide">
                  {text}
                </h1>

                <i className="fa-solid fa-star text-white text-lg"></i>
              </div>
            ))}
          </div>
        </SwiperSlide>

        
        <SwiperSlide className="w-auto">
          <div className="flex items-center gap-16 px-8 whitespace-nowrap">
            {items.map((text, index) => (
              <div key={`dup-${index}`} className="flex items-center gap-4">
                <i className="fa-solid fa-star text-white text-lg"></i>

                <h1 className="text-white uppercase font-bold text-[20px] tracking-wide">
                  {text}
                </h1>

                <i className="fa-solid fa-star text-white text-lg"></i>
              </div>
            ))}
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
