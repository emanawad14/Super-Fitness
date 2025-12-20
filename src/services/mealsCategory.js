export async function getMealsCategory() {
    const res = await fetch("https://www.themealdb.com/api/json/v1/1/categories.php");
    if (!res.ok)
        throw new Error("Failed to fetch categories");
    return res.json();
}
export async function getCategoryMeals(category) {
    const res = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`);
    if (!res.ok)
        throw new Error("Failed to fetch meals");
    return res.json();
}
