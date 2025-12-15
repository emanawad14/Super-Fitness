import { Routes, Route } from "react-router-dom";

import Home from "./App/Home";
import AboutSection from "./App/About";
import WorkOut from "./App/WorkOut";
import Meals from "./App/Meals";


export default function App() {
  return (
    <>
     
     
     

      <Routes>
        <Route path="/"element={<><Home/></> } />
        <Route path="/AboutSection" element={<AboutSection />} />
        <Route path="/workout" element={<WorkOut />} />
        <Route path="/meals" element={<Meals />} />
      </Routes>
    </>
  );
}
