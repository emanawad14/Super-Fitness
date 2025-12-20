
import { getMealsCategory } from "@/services/mealsCategory";
import { useEffect, useState } from "react";
import healthy from "../../src/assets/images/Healthy.png";
import MarqueeCarousel from "@/shared/Slider";
import { IMealCategory } from "@/interfaces/MealCategory";

export default function Meals() {
  const [meals, setMeals] = useState<IMealCategory[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    getMealsCategory()
      .then((data) => {
        setMeals(data.categories.slice(0, 3));
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <>
      <section className="image text-center py-30 relative">
        <div className="flex flex-col items-center">
          <img src={healthy} alt="" className="w-auto"></img>
        </div>

        <div className="bg-[#FFFFFF99] w-full py-10 relative px-4">
          <div className="flex items-center justify-center gap-2">
            <i className="fa-solid fa-dumbbell text-[#ff4500] text-[25px]"></i>
            <span className="font-semibold tracking-wide text-[#ff4500]">
              Healthy Nutritions
            </span>
          </div>

          <h1
            className="text-[28px] sm:text-[30px] md:text-[40px] uppercase font-bold leading-tight 
                 mb-10 sm:mb-16 md:mb-10 px-4"
          >
            Fuel your fitness journey with <br />
            customized <span className="text-[#ff4500]">meal plans</span> for
            you
          </h1>

          {loading && <p className="text-center">Loading...</p>}

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {meals.map((meal) => (
              <div
                key={meal.idCategory}
                className="bg-white rounded-lg shadow-md overflow-hidden text-center"
              >
                <img
                  src={meal.strCategoryThumb}
                  alt={meal.strCategory}
                  className="w-full h-40 object-cover"
                />

                <div className="p-4">
                  <h3 className="font-semibold text-lg">{meal.strCategory}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
         <div className="hidden md:block h-60"></div>
      </section>

      <MarqueeCarousel></MarqueeCarousel>
    </>
  );
}
