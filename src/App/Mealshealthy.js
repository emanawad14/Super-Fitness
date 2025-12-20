import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import { getMealsCategory, getCategoryMeals } from "@/services/mealsCategory";
import CategoryTabs from "@/shared/CategoryTabs";
import MealCard from "@/shared/CategoryCard";
import healthy from "../../src/assets/images/Healthy.png";
import "./meals.css";
import MarqueeCarousel from "@/shared/Slider";
export default function MealsHealthy() {
    const [categories, setCategories] = useState([]);
    const [activeCategory, setActiveCategory] = useState(null);
    const [meals, setMeals] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        getMealsCategory()
            .then((data) => {
            setCategories(data.categories);
            setActiveCategory(data.categories[0].strCategory);
        })
            .finally(() => setLoading(false));
    }, []);
    useEffect(() => {
        if (!activeCategory)
            return;
        setLoading(true);
        getCategoryMeals(activeCategory)
            .then((data) => setMeals(data.meals.slice(0, 3)))
            .finally(() => setLoading(false));
    }, [activeCategory]);
    if (loading)
        return (_jsx("p", { className: "text-center", children: _jsx("i", { className: "fas fa-spinner fa-spin fa-4x py-80" }) }));
    return (_jsxs(_Fragment, { children: [_jsxs("section", { className: "image text-center py-30 relative", children: [_jsx("div", { className: "flex flex-col items-center", children: _jsx("img", { src: healthy, alt: "", className: "w-auto" }) }), _jsxs("div", { className: "bg-[#FFFFFF99] w-full py-10 relative px-4", children: [_jsxs("div", { className: "flex items-center justify-center gap-2", children: [_jsx("i", { className: "fa-solid fa-dumbbell text-[#ff4500] text-[25px]" }), _jsx("span", { className: "font-semibold tracking-wide text-[#ff4500]", children: "Healthy Nutritions" })] }), _jsxs("h1", { className: "text-[28px] sm:text-[30px] md:text-[40px] uppercase font-bold leading-tight \r\n                 mb-10 sm:mb-16 md:mb-10 px-4", children: ["Fuel your fitness journey with ", _jsx("br", {}), "customized ", _jsx("span", { className: "text-[#ff4500]", children: "meal plans" }), " for you"] }), _jsx(CategoryTabs, { categories: categories, activeCategory: activeCategory, onSelect: setActiveCategory }), _jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8", children: meals.map((meal) => (_jsx(MealCard, { meal: meal }, meal.idMeal))) })] }), _jsx("div", { className: "hidden md:block h-60" })] }), _jsx(MarqueeCarousel, {})] }));
}
