import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import MuscleCard from "@/shared/MuscleCard";
import MuscleTabs from "@/shared/MuscleTabs";
import "./work.css";
import workout from "../../src/assets/images/WOrkouts.png";
import { getMuscles } from "@/services/muscles";
import { getMusclesByGroupId } from "@/services/getMusclesByGroupId";
export default function WorkOut() {
    const [muscleGroups, setMuscleGroups] = useState([]);
    const [muscles, setMuscles] = useState([]);
    const [activeGroupId, setActiveGroupId] = useState(null);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        getMuscles().then((data) => {
            const groups = data.musclesGroup;
            setMuscleGroups(groups);
            if (groups.length > 0) {
                handleSelectGroup(groups[0]._id);
            }
        });
    }, []);
    const handleSelectGroup = (groupId) => {
        setActiveGroupId(groupId);
        setLoading(true);
        getMusclesByGroupId(groupId)
            .then((data) => {
            setMuscles(data.muscles);
        })
            .finally(() => setLoading(false));
    };
    if (loading)
        return _jsx("p", { className: "text-center", children: _jsx("i", { className: "fas fa-spinner fa-spin fa-4x py-80" }) });
    return (_jsx(_Fragment, { children: _jsxs("section", { className: "image relative py-30 text-center ", children: [_jsx("div", { className: "flex flex-col items-center ", children: _jsx("img", { src: workout, alt: "workout", className: "w-auto" }) }), _jsxs("div", { className: "bg-[#FFFFFF99] w-full py-10 relative px-4", children: [_jsxs("div", { className: "flex items-center justify-center gap-2", children: [_jsx("i", { className: "fa-solid fa-dumbbell text-[#ff4500] text-[20px]" }), _jsx("span", { className: "font-semibold tracking-wide text-[#ff4500]", children: "fitness class" })] }), _jsxs("h1", { className: "text-[28px] sm:text-[30px] md:text-[40px] uppercase font-bold leading-tight mb-10 px-4", children: ["Transform Your Body with Our ", _jsx("br", {}), "Dynamic ", _jsx("span", { className: "text-[#ff4500]", children: "Upcoming Workouts" })] }), _jsx(MuscleTabs, { groups: muscleGroups, activeId: activeGroupId, onSelect: handleSelectGroup }), _jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6", children: [loading && (_jsx("p", { className: "text-center", children: _jsx("i", { className: "fas fa-spinner fa-spin fa-4x py-80" }) })), !loading &&
                                    muscles.map((muscle) => (_jsx(MuscleCard, { muscle: muscle }, muscle._id)))] })] }), _jsx("div", { className: "hidden md:block h-60" })] }) }));
}
