import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export default function Button({ type = "login", text = "Button" }) {
    const baseClasses = "px-6 py-2 rounded-full font-semibold relative flex items-center";
    const variantClasses = type === "login"
        ? "bg-[#e63e00] text-white"
        : "bg-white/80 border border-[#e63e00] text-[#e63e00]";
    return (_jsxs("div", { className: "relative", children: [_jsx("button", { className: `${baseClasses} ${variantClasses}`, children: text }), _jsx("div", { className: "absolute -right-7 top-1/2 -translate-y-1/2", children: _jsx("div", { className: "bg-[#e63e00] text-white p-2 rounded-full border border-white shadow-lg flex items-center justify-center w-10 h-10", children: _jsx("i", { className: "fa-solid fa-up-right-from-square" }) }) })] }));
}
