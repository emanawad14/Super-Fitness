import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
const items = [
    "outdoor & online trainers",
    "personal training",
    "live classes",
    "personal training",
];
export default function MarqueeCarousel() {
    return (_jsx("div", { className: "bg-[#ff4500] w-full py-4 overflow-hidden", children: _jsxs(Swiper, { modules: [Autoplay], slidesPerView: "auto", loop: true, speed: 8000, autoplay: {
                delay: 0,
                disableOnInteraction: false,
            }, allowTouchMove: false, className: "w-full", children: [_jsx(SwiperSlide, { className: "w-auto", children: _jsx("div", { className: "flex items-center gap-16 px-8 whitespace-nowrap", children: items.map((text, index) => (_jsxs("div", { className: "flex items-center gap-4", children: [_jsx("i", { className: "fa-solid fa-star text-white text-lg" }), _jsx("h1", { className: "text-white uppercase font-bold text-[20px] tracking-wide", children: text }), _jsx("i", { className: "fa-solid fa-star text-white text-lg" })] }, index))) }) }), _jsx(SwiperSlide, { className: "w-auto", children: _jsx("div", { className: "flex items-center gap-16 px-8 whitespace-nowrap", children: items.map((text, index) => (_jsxs("div", { className: "flex items-center gap-4", children: [_jsx("i", { className: "fa-solid fa-star text-white text-lg" }), _jsx("h1", { className: "text-white uppercase font-bold text-[20px] tracking-wide", children: text }), _jsx("i", { className: "fa-solid fa-star text-white text-lg" })] }, `dup-${index}`))) }) })] }) }));
}
