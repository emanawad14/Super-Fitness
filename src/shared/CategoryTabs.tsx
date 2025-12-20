
import { IMealCategory } from "@/interfaces/MealCategory";
import { useRef } from "react";

interface Props {
  categories: IMealCategory[];
  activeCategory: string | null;
  onSelect: (category: string) => void;
}

export default function CategoryTabs({
  categories,
  activeCategory,
  onSelect,
}: Props) {
  const sliderRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    sliderRef.current?.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    sliderRef.current?.scrollBy({ left: 300, behavior: "smooth" });
  };

  return (
    <div className="flex items-center justify-center gap-6 mb-10">
      <button onClick={scrollLeft}>
        <i className="fa-solid fa-arrow-left"></i>
      </button>

      <div
        ref={sliderRef}
        className="flex gap-4 max-w-[800px] overflow-hidden"
      >
        {categories.map((cat) => (
          <button
            key={cat.idCategory}
            onClick={() => onSelect(cat.strCategory)}
            className={`px-5 py-2 rounded-full transition shrink-0
              ${
                activeCategory === cat.strCategory
                  ? "bg-[#ff4500] text-white"
                  : "bg-gray-200"
              }`}
          >
            {cat.strCategory}
          </button>
        ))}
      </div>

      <button onClick={scrollRight}>
        <i className="fa-solid fa-arrow-right"></i>
      </button>
    </div>
  );
}
