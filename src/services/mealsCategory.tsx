
import { IResponseCateMeals } from "@/interfaces/category";
import { IMealsCategoryResponse } from "@/interfaces/MealCategory";

export async function getMealsCategory(): Promise<IMealsCategoryResponse> {
  const res = await fetch(
    "https://www.themealdb.com/api/json/v1/1/categories.php"
  );

  if (!res.ok) throw new Error("Failed to fetch categories");

  return res.json();
}

export async function getCategoryMeals(
  category: string
): Promise<IResponseCateMeals> {
  const res = await fetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`
  );

  if (!res.ok) throw new Error("Failed to fetch meals");

  return res.json();
}
