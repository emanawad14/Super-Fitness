import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import Button from "@/shared/Button";
import home from "../../src/assets/images/Theo Vance.png";
import MarqueeCarousel from "@/shared/Slider";
import AboutSection from "./About";
import WorkOut from "./WorkOut";
import WhyUsSection from "./WhyUs";
import Meals from "./Meals";
export default function Hero() {
    return (_jsxs(_Fragment, { children: [_jsx("section", { className: "text-white min-h-screen py-10 flex items-center", style: {
                    background: `
          radial-gradient(circle at 20% 60%, rgba(200,210,216,0.85), transparent 20%),
          linear-gradient(90deg, rgba(200,210,216,0.85) 0%, rgba(220,224,226,0.7) 40%, rgba(200,210,216,0.85) 100%)
        `,
                }, children: _jsxs("div", { className: "container mx-auto grid grid-cols-1 md:grid-cols-2 items-center px-6 md:px-12 py-12 md:py-20 gap-8", children: [_jsxs("div", { className: "flex flex-col items-start justify-center text-center md:text-left space-y-6", children: [_jsxs("h1", { className: "text-4xl md:text-5xl mt-4 font-extrabold text-[#242424] uppercase", children: ["Your Body Can", _jsx("span", { className: "text-[#ff4500] block mt-2", children: " Stand Almost " }), "Anything"] }), _jsx("p", { className: "text-[#242424] max-w-md mt-6", children: "It's your mind that needs convincing. Push past your limits, stay committed, and watch as your body transform into a powerhouse of strength and resilience. Start your journey today & truly become capable of more!" }), _jsxs("div", { className: "flex flex-wrap gap-14 mt-6 pt-4 justify-center md:justify-start", children: [_jsxs("div", { className: "flex flex-col items-center md:items-start", children: [_jsx("h2", { className: "text-2xl font-bold text-[#242424]", children: "1200+" }), _jsx("p", { className: "text-[#242424] text-sm", children: "Active Members" })] }), _jsxs("div", { className: "flex flex-col items-center md:items-start", children: [_jsx("h2", { className: "text-2xl font-bold text-[#242424]", children: "12+" }), _jsx("p", { className: "text-[#242424] text-sm", children: "Certified Trainers" })] }), _jsxs("div", { className: "flex flex-col items-center md:items-start", children: [_jsx("h2", { className: "text-2xl font-bold text-[#242424]", children: "20+" }), _jsx("p", { className: "text-[#242424] text-sm", children: "Years of Experience" })] })] }), _jsxs("div", { className: "flex justify-center md:justify-start gap-12 items-center mt-6", children: [_jsx(Button, { type: "login", text: "Get Started" }), _jsx(Button, { type: "signup", text: "Explore More" })] })] }), _jsx("div", { className: "relative flex flex-col items-center md:items-end", children: _jsx("img", { src: home, alt: "Hero", className: "object-contain w-[280px] md:w-[400px] rounded-2xl" }) })] }) }), _jsx(MarqueeCarousel, {}), _jsx(AboutSection, {}), _jsx(WorkOut, {}), _jsx(WhyUsSection, {}), _jsx(Meals, {})] }));
}
