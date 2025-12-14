
export default function Button({ type = "login", text = "Button" }) {
  const baseClasses =
    "px-6 py-2 rounded-full font-semibold relative flex items-center";

  const variantClasses =
    type === "login"
      ? "bg-[#e63e00] text-white"
      : "bg-white/80 border border-[#e63e00] text-[#e63e00]";

  return (
    <div className="relative">
      <button className={`${baseClasses} ${variantClasses}`}>
        {text}
      </button>

      <div className="absolute -right-7 top-1/2 -translate-y-1/2">
        <div className="bg-[#e63e00] text-white p-2 rounded-full border border-white shadow-lg flex items-center justify-center w-10 h-10">
          <i className="fa-solid fa-up-right-from-square"></i>
        </div>
      </div>
    </div>
  );
}
