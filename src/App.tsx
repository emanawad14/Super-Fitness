import { Routes, Route } from "react-router-dom";

import Home from "./App/Home";
import AboutSection from "./App/About";
import WorkOut from "./App/WorkOut";

import MealsHealthy from "./App/Mealshealthy";
import MealsDetails from "./App/MealsDetails";
import ClassesDetails from "./App/ClassesDetails";


export default function App() {
  return (
    <>
     
     
     

      <Routes>
        <Route path="/"element={<><Home/></> } />
        <Route path="/AboutSection" element={<AboutSection />} />
        <Route path="/workout" element={<WorkOut />} />
        <Route path="/classesDetails/:id" element={<ClassesDetails />} />
        <Route path="/meals" element={<MealsHealthy />} />
        <Route path="/mealsDetails/:id" element={<MealsDetails />} />
      </Routes>
    </>
  );
}
