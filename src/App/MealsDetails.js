import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import axios from "axios";
export default function MealsPage() {
    const [categories, setCategories] = useState([]);
    const [activeCategory, setActiveCategory] = useState(null);
    const [meals, setMeals] = useState([]);
    const [selectedMeal, setSelectedMeal] = useState(null);
    useEffect(() => {
        axios
            .get("https://www.themealdb.com/api/json/v1/1/categories.php")
            .then((res) => {
            const cats = res.data.categories;
            setCategories(cats);
            if (cats.length > 0) {
                setActiveCategory(cats[0].strCategory);
            }
        });
    }, []);
    useEffect(() => {
        if (!activeCategory)
            return;
        axios
            .get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${activeCategory}`)
            .then((res) => {
            const mealsData = res.data.meals;
            setMeals(mealsData);
            if (mealsData.length > 0) {
                selectMeal(mealsData[0]);
            }
        });
    }, [activeCategory]);
    function selectMeal(meal) {
        axios
            .get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${meal.idMeal}`)
            .then((res) => setSelectedMeal(res.data.meals[0]));
    }
    return (_jsxs("section", { className: "py-20 bg-[#0f0f0f] text-white", children: [_jsx("div", { className: "flex justify-center mb-10", children: _jsx("img", { src: "/images/Healthy.png", alt: "Healthy" }) }), _jsxs("div", { className: "container mx-auto grid grid-cols-12 gap-8", children: [_jsxs("div", { className: "col-span-12 lg:col-span-4", children: [_jsx("div", { className: "flex flex-wrap gap-3 mb-6", children: categories.map((cat) => (_jsx("button", { onClick: () => setActiveCategory(cat.strCategory), className: `px-4 py-2 rounded-full text-sm transition
                  ${activeCategory === cat.strCategory
                                        ? "bg-[#ff4500] text-white"
                                        : "bg-[#1a1a1a] hover:bg-[#222]"}`, children: cat.strCategory }, cat.idCategory))) }), _jsx("div", { className: "space-y-4", children: meals.map((meal) => (_jsxs("div", { onClick: () => selectMeal(meal), className: `flex items-center gap-4 p-3 rounded-xl cursor-pointer transition
                  ${selectedMeal?.idMeal === meal.idMeal
                                        ? "bg-[#ff4500]/20 border border-[#ff4500]"
                                        : "bg-[#1a1a1a] hover:bg-[#222]"}`, children: [_jsx("img", { src: meal.strMealThumb, className: "w-16 h-16 rounded-full object-cover" }), _jsxs("div", { children: [_jsx("h4", { className: "font-semibold", children: meal.strMeal }), _jsx("p", { className: "text-sm text-gray-400 line-clamp-2", children: "Delicious healthy meal." })] })] }, meal.idMeal))) })] }), selectedMeal && (_jsxs("div", { className: "col-span-12 lg:col-span-8", children: [_jsxs("div", { className: "relative rounded-2xl overflow-hidden", children: [_jsx("img", { src: selectedMeal.strMealThumb, className: "w-full h-[420px] object-cover opacity-80" }), _jsxs("div", { className: "absolute inset-0 bg-black/60 p-8 flex flex-col justify-end", children: [_jsx("h2", { className: "text-4xl text-center font-bold mb-3", children: selectedMeal.strMeal }), _jsxs("p", { className: "text-gray-300 mb-4 max-w-xl", children: [selectedMeal.strInstructions.slice(0, 300), "..."] }), _jsx("div", { className: "flex justify-between mt-5 gap-3", children: ["Energy", "Protein", "Carbs", "Fat"].map((item) => (_jsxs("span", { className: "rounded-full border px-4 py-2 text-center", children: ["100k", _jsx("br", {}), _jsx("span", { className: "text-[#ff4500]", children: item })] }, item))) })] })] }), _jsxs("div", { className: "mt-10", children: [_jsx("h3", { className: "text-2xl font-bold mb-4", children: "Ingredients" }), _jsx("ul", { className: "grid grid-cols-2 gap-3 text-gray-300", children: [
                                            selectedMeal.strIngredient1,
                                            selectedMeal.strIngredient2,
                                            selectedMeal.strIngredient3,
                                            selectedMeal.strIngredient4,
                                        ]
                                            .filter(Boolean)
                                            .map((ing, i) => (_jsx("li", { children: ing }, i))) })] })] }))] })] }));
}
