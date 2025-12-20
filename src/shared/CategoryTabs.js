import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useRef } from "react";
export default function CategoryTabs({ categories, activeCategory, onSelect, }) {
    const sliderRef = useRef(null);
    const scrollLeft = () => {
        sliderRef.current?.scrollBy({ left: -300, behavior: "smooth" });
    };
    const scrollRight = () => {
        sliderRef.current?.scrollBy({ left: 300, behavior: "smooth" });
    };
    return (_jsxs("div", { className: "flex items-center justify-center gap-6 mb-10", children: [_jsx("button", { onClick: scrollLeft, children: _jsx("i", { className: "fa-solid fa-arrow-left" }) }), _jsx("div", { ref: sliderRef, className: "flex gap-4 max-w-[800px] overflow-hidden", children: categories.map((cat) => (_jsx("button", { onClick: () => onSelect(cat.strCategory), className: `px-5 py-2 rounded-full transition shrink-0
              ${activeCategory === cat.strCategory
                        ? "bg-[#ff4500] text-white"
                        : "bg-gray-200"}`, children: cat.strCategory }, cat.idCategory))) }), _jsx("button", { onClick: scrollRight, children: _jsx("i", { className: "fa-solid fa-arrow-right" }) })] }));
}
