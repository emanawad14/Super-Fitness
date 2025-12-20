export interface ICateMeals {
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
}

export interface IResponseCateMeals {
  meals: ICateMeals[];
}
