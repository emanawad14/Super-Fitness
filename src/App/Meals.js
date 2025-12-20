import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { getMealsCategory } from "@/services/mealsCategory";
import { useEffect, useState } from "react";
import healthy from "../../src/assets/images/Healthy.png";
import MarqueeCarousel from "@/shared/Slider";
export default function Meals() {
    const [meals, setMeals] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        getMealsCategory()
            .then((data) => {
            setMeals(data.categories.slice(0, 3));
        })
            .finally(() => setLoading(false));
    }, []);
    return (_jsxs(_Fragment, { children: [_jsxs("section", { className: "image text-center py-30 relative", children: [_jsx("div", { className: "flex flex-col items-center", children: _jsx("img", { src: healthy, alt: "", className: "w-auto" }) }), _jsxs("div", { className: "bg-[#FFFFFF99] w-full py-10 relative px-4", children: [_jsxs("div", { className: "flex items-center justify-center gap-2", children: [_jsx("i", { className: "fa-solid fa-dumbbell text-[#ff4500] text-[25px]" }), _jsx("span", { className: "font-semibold tracking-wide text-[#ff4500]", children: "Healthy Nutritions" })] }), _jsxs("h1", { className: "text-[28px] sm:text-[30px] md:text-[40px] uppercase font-bold leading-tight \r\n                 mb-10 sm:mb-16 md:mb-10 px-4", children: ["Fuel your fitness journey with ", _jsx("br", {}), "customized ", _jsx("span", { className: "text-[#ff4500]", children: "meal plans" }), " for you"] }), loading && _jsx("p", { className: "text-center", children: "Loading..." }), _jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6", children: meals.map((meal) => (_jsxs("div", { className: "bg-white rounded-lg shadow-md overflow-hidden text-center", children: [_jsx("img", { src: meal.strCategoryThumb, alt: meal.strCategory, className: "w-full h-40 object-cover" }), _jsx("div", { className: "p-4", children: _jsx("h3", { className: "font-semibold text-lg", children: meal.strCategory }) })] }, meal.idCategory))) })] }), _jsx("div", { className: "hidden md:block h-60" })] }), _jsx(MarqueeCarousel, {})] }));
}
