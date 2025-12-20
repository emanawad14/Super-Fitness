import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { Routes, Route } from "react-router-dom";
import Home from "./App/Home";
import AboutSection from "./App/About";
import WorkOut from "./App/WorkOut";
import MealsHealthy from "./App/Mealshealthy";
import MealsDetails from "./App/MealsDetails";
import ClassesDetails from "./App/ClassesDetails";
export default function App() {
    return (_jsx(_Fragment, { children: _jsxs(Routes, { children: [_jsx(Route, { path: "/", element: _jsx(_Fragment, { children: _jsx(Home, {}) }) }), _jsx(Route, { path: "/AboutSection", element: _jsx(AboutSection, {}) }), _jsx(Route, { path: "/workout", element: _jsx(WorkOut, {}) }), _jsx(Route, { path: "/classesDetails/:id", element: _jsx(ClassesDetails, {}) }), _jsx(Route, { path: "/meals", element: _jsx(MealsHealthy, {}) }), _jsx(Route, { path: "/mealsDetails/:id", element: _jsx(MealsDetails, {}) })] }) }));
}
