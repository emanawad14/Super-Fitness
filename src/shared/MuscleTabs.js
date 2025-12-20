import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useRef } from "react";
export default function MuscleTabs({ groups, activeId, onSelect }) {
    const sliderRef = useRef(null);
    const scrollLeft = () => {
        sliderRef.current?.scrollBy({ left: -400, behavior: "smooth" });
    };
    const scrollRight = () => {
        sliderRef.current?.scrollBy({ left: 400, behavior: "smooth" });
    };
    return (_jsxs("div", { className: "flex items-center justify-center gap-12 mb-10", children: [_jsx("button", { onClick: scrollLeft, className: "w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 hover:bg-gray-300 transition", children: _jsx("i", { className: "fa-solid fa-arrow-left" }) }), _jsx("div", { ref: sliderRef, className: "flex gap-9 max-w-[800px] overflow-hidden", children: groups.map((group) => (_jsx("button", { onClick: () => onSelect(group._id), className: `px-5 py-2 rounded-full font-medium whitespace-nowrap transition shrink-0
              ${activeId === group._id
                        ? "bg-[#ff4500] text-white"
                        : "bg-gray-200 hover:bg-gray-300"}`, children: group.name }, group._id))) }), _jsx("button", { onClick: scrollRight, className: "w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 hover:bg-gray-300 transition", children: _jsx("i", { className: "fa-solid fa-arrow-right" }) })] }));
}
