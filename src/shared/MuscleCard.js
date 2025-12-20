import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Link } from "react-router-dom";
export default function MuscleCard({ muscle }) {
    return (_jsx("div", { className: "bg-white  rounded-2xl shadow-md overflow-hidden text-center hover:shadow-lg transition", children: _jsxs(Link, { to: `/classesDetails/${muscle._id}`, children: [muscle.image && (_jsx("img", { src: muscle.image, alt: muscle.name, className: "w-full h-48 rounded-2xl object-cover" })), _jsx("div", { className: "p-4", children: _jsx("h3", { className: "font-bold text-lg", children: muscle.name }) })] }) }));
}
