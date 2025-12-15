import { IMealsCategoryResponse } from "@/interfaces/mealCategory";


export async function getMealsCategory(): Promise<IMealsCategoryResponse> {
  const res = await fetch(
    "https://www.themealdb.com/api/json/v1/1/categories.php"
  );

  if (!res.ok) throw new Error("Failed to fetch meals");

  return res.json();
}
