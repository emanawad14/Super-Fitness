import { useRef } from "react";
import { IMuscle } from "@/interfaces/muscles";

interface Props {
  groups: IMuscle[];
  activeId: string | null;
  onSelect: (id: string) => void;
}

export default function MuscleTabs({ groups, activeId, onSelect }: Props) {
  const sliderRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    sliderRef.current?.scrollBy({ left: -400, behavior: "smooth" });
  };

  const scrollRight = () => {
    sliderRef.current?.scrollBy({ left: 400, behavior: "smooth" });
  };

  return (
    <div className="flex items-center justify-center gap-12 mb-10">
      
     
      <button
        onClick={scrollLeft}
        className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 hover:bg-gray-300 transition"
      >
        <i className="fa-solid fa-arrow-left"></i>
      </button>

      {/* Tabs */}
      <div
        ref={sliderRef}
        className="flex gap-9 max-w-[800px] overflow-hidden"
      >
        {groups.map((group) => (
          <button
            key={group._id}
            onClick={() => onSelect(group._id)}
            className={`px-5 py-2 rounded-full font-medium whitespace-nowrap transition shrink-0
              ${
                activeId === group._id
                  ? "bg-[#ff4500] text-white"
                  : "bg-gray-200 hover:bg-gray-300"
              }`}
          >
            {group.name}
          </button>
        ))}
      </div>

      {/* Right Arrow */}
      <button
        onClick={scrollRight}
        className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 hover:bg-gray-300 transition"
      >
       <i className="fa-solid fa-arrow-right"></i>
      </button>
    </div>
  );
}
