// // MarqueeCarousel.jsx
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay } from "swiper/modules";
// import "swiper/css";

// export default function MarqueeCarousel() {
//   return (
//     <div className="bg-[#ff4500] flex justify-center items-center w-full py-6 overflow-hidden">
//       <Swiper
//         modules={[Autoplay]}
//         slidesPerView="auto"
//         spaceBetween={40}
//         loop={true}
//         speed={6000}                 // 👈 حركة ناعمة مستمرة
//         autoplay={{
//           delay: 0,                  // 👈 بدون توقف
//           disableOnInteraction: false,
//         }}
//         allowTouchMove={false}       // 👈 يمنع التقطيع
//         className="w-full"
//       >
//         <SwiperSlide className="w-auto">
//           <h1 className="text-white uppercase font-bold text-[25px] px-4 whitespace-nowrap">
//             <i className="fa-solid fa-star mx-2"></i>
//             outdoor & online trainers
//             <i className="fa-solid fa-star mx-2"></i>
//           </h1>
//         </SwiperSlide>

//         <SwiperSlide className="w-auto">
//           <h1 className="text-white uppercase font-bold text-[25px] px-4 whitespace-nowrap">
//             <i className="fa-solid fa-star mx-2"></i>
//             personal training
//             <i className="fa-solid fa-star mx-2"></i>
//           </h1>
//         </SwiperSlide>

//         <SwiperSlide className="w-auto">
//           <h1 className="text-white uppercase font-bold text-[25px] px-4 whitespace-nowrap">
//             <i className="fa-solid fa-star mx-2"></i>
//             live classes
//             <i className="fa-solid fa-star mx-2"></i>
//           </h1>
//         </SwiperSlide>

//         <SwiperSlide className="w-auto">
//           <h1 className="text-white uppercase font-bold text-[25px] px-4 whitespace-nowrap">
//             <i className="fa-solid fa-star mx-2"></i>
//             personal training
//             <i className="fa-solid fa-star mx-2"></i>
//           </h1>
//         </SwiperSlide>
//       </Swiper>
//     </div>
//   );
// }
