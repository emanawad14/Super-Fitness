
import { ICateMeals } from "@/interfaces/category";
import { Link } from "react-router-dom";

interface Props {
  meal: ICateMeals;
}

export default function MealCard({ meal }: Props) {
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition">
      <Link to={`/mealsDetails/${meal.idMeal}`}> 
       <img
      
        src={meal.strMealThumb}
        alt={meal.strMeal}
        className="w-full h-48 object-cover"
      />

      <div className="p-4 text-center">
        <h3 className="font-bold">{meal.strMeal}</h3>
      </div>
      
      
      </Link>
     
     
    </div>
  );
}
