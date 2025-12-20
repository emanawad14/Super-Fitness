import { useEffect, useState } from "react";
import { getMealsCategory, getCategoryMeals } from "@/services/mealsCategory";
import { IMealCategory } from "@/interfaces/MealCategory";
import { ICateMeals } from "@/interfaces/category";
import CategoryTabs from "@/shared/CategoryTabs";
import MealCard from "@/shared/CategoryCard";
import healthy from "../../src/assets/images/Healthy.png";
import "./meals.css";
import MarqueeCarousel from "@/shared/Slider";

export default function MealsHealthy() {
  const [categories, setCategories] = useState<IMealCategory[]>([]);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [meals, setMeals] = useState<ICateMeals[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getMealsCategory()
      .then((data) => {
        setCategories(data.categories);
        setActiveCategory(data.categories[0].strCategory);
      })
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    if (!activeCategory) return;

    setLoading(true);
    getCategoryMeals(activeCategory)
      .then((data) => setMeals(data.meals.slice(0, 3)))
      .finally(() => setLoading(false));
  }, [activeCategory]);

  if (loading)
    return (
      <p className="text-center">
        <i className="fas fa-spinner fa-spin fa-4x py-80"></i>
      </p>
    );

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

          <CategoryTabs
            categories={categories}
            activeCategory={activeCategory}
            onSelect={setActiveCategory}
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {meals.map((meal) => (
              <MealCard key={meal.idMeal} meal={meal} />
            ))}
          </div>
        </div>
        <div className="hidden md:block h-60"></div>
      </section>
      <MarqueeCarousel></MarqueeCarousel>
    </>
  );
}
