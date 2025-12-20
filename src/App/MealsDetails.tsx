import { useEffect, useState } from "react";
import axios from "axios";


interface Category {
  idCategory: string;
  strCategory: string;
}

interface Meal {
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
}

interface MealDetails extends Meal {
  strInstructions: string;
  strIngredient1?: string;
  strIngredient2?: string;
  strIngredient3?: string;
  strIngredient4?: string;
}

export default function MealsPage() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [meals, setMeals] = useState<Meal[]>([]);
  const [selectedMeal, setSelectedMeal] = useState<MealDetails | null>(null);

 
  useEffect(() => {
    axios
      .get("https://www.themealdb.com/api/json/v1/1/categories.php")
      .then((res) => {
        const cats = res.data.categories;
        setCategories(cats);

        if (cats.length > 0) {
          setActiveCategory(cats[0].strCategory); 
        }
      });
  }, []);

 
  useEffect(() => {
    if (!activeCategory) return;

    axios
      .get(
        `https://www.themealdb.com/api/json/v1/1/filter.php?c=${activeCategory}`
      )
      .then((res) => {
        const mealsData = res.data.meals;
        setMeals(mealsData);

        if (mealsData.length > 0) {
          selectMeal(mealsData[0]); 
        }
      });
  }, [activeCategory]);

 
  function selectMeal(meal: Meal) {
    axios
      .get(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${meal.idMeal}`
      )
      .then((res) => setSelectedMeal(res.data.meals[0]));
  }

  return (
    <section className="py-20 bg-[#0f0f0f] text-white">
      {/* Logo */}
      <div className="flex justify-center mb-10">
        <img src="/images/Healthy.png" alt="Healthy" />
      </div>

      <div className="container mx-auto grid grid-cols-12 gap-8">
        {/* ================= LEFT SIDE ================= */}
        <div className="col-span-12 lg:col-span-4">
          {/* Categories Tabs */}
          <div className="flex flex-wrap gap-3 mb-6">
            {categories.map((cat) => (
              <button
                key={cat.idCategory}
                onClick={() => setActiveCategory(cat.strCategory)}
                className={`px-4 py-2 rounded-full text-sm transition
                  ${
                    activeCategory === cat.strCategory
                      ? "bg-[#ff4500] text-white"
                      : "bg-[#1a1a1a] hover:bg-[#222]"
                  }`}
              >
                {cat.strCategory}
              </button>
            ))}
          </div>

          {/* Meals List */}
          <div className="space-y-4">
            {meals.map((meal) => (
              <div
                key={meal.idMeal}
                onClick={() => selectMeal(meal)}
                className={`flex items-center gap-4 p-3 rounded-xl cursor-pointer transition
                  ${
                    selectedMeal?.idMeal === meal.idMeal
                      ? "bg-[#ff4500]/20 border border-[#ff4500]"
                      : "bg-[#1a1a1a] hover:bg-[#222]"
                  }`}
              >
                <img
                  src={meal.strMealThumb}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold">{meal.strMeal}</h4>
                  <p className="text-sm text-gray-400 line-clamp-2">
                    Delicious healthy meal.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ================= RIGHT SIDE ================= */}
        {selectedMeal && (
          <div className="col-span-12 lg:col-span-8">
            {/* Hero */}
            <div className="relative rounded-2xl overflow-hidden">
              <img
                src={selectedMeal.strMealThumb}
                className="w-full h-[420px] object-cover opacity-80"
              />

              <div className="absolute inset-0 bg-black/60 p-8 flex flex-col justify-end">
                <h2 className="text-4xl text-center font-bold mb-3">
                  {selectedMeal.strMeal}
                </h2>

                <p className="text-gray-300 mb-4 max-w-xl">
                  {selectedMeal.strInstructions.slice(0, 300)}...
                </p>

                <div className="flex justify-between mt-5 gap-3">
                  {["Energy", "Protein", "Carbs", "Fat"].map((item) => (
                    <span
                      key={item}
                      className="rounded-full border px-4 py-2 text-center"
                    >
                      100k
                      <br />
                      <span className="text-[#ff4500]">{item}</span>
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Ingredients */}
            <div className="mt-10">
              <h3 className="text-2xl font-bold mb-4">Ingredients</h3>
              <ul className="grid grid-cols-2 gap-3 text-gray-300">
                {[
                  selectedMeal.strIngredient1,
                  selectedMeal.strIngredient2,
                  selectedMeal.strIngredient3,
                  selectedMeal.strIngredient4,
                ]
                  .filter(Boolean)
                  .map((ing, i) => (
                    <li key={i}>{ing}</li>
                  ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
