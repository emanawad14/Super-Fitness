import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Link } from "react-router-dom";
export default function MealCard({ meal }) {
    return (_jsx("div", { className: "bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition", children: _jsxs(Link, { to: `/mealsDetails/${meal.idMeal}`, children: [_jsx("img", { src: meal.strMealThumb, alt: meal.strMeal, className: "w-full h-48 object-cover" }), _jsx("div", { className: "p-4 text-center", children: _jsx("h3", { className: "font-bold", children: meal.strMeal }) })] }) }));
}
