import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import workout from "../../src/assets/images/WOrkouts.png";
function getYoutubeId(url) {
    if (!url)
        return null;
    const regExp = /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/;
    const match = url.match(regExp);
    return match ? match[1] : null;
}
export default function ClassesDetails() {
    const { id } = useParams();
    const [levels, setLevels] = useState([]);
    const [activeLevel, setActiveLevel] = useState(null);
    const [exercises, setExercises] = useState([]);
    const [selectedExercise, setSelectedExercise] = useState(null);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        axios
            .get("https://fitness.elevateegy.com/api/v1/levels")
            .then((res) => {
            setLevels(res.data.levels);
            if (res.data.levels.length > 0) {
                setActiveLevel(res.data.levels[0]);
            }
        })
            .catch(console.error);
    }, []);
    useEffect(() => {
        if (!id || !activeLevel)
            return;
        setLoading(true);
        axios
            .get("https://fitness.elevateegy.com/api/v1/exercises/by-muscle-difficulty", {
            params: {
                primeMoverMuscleId: id,
                difficultyLevelId: activeLevel._id,
            },
        })
            .then((res) => {
            setExercises(res.data.exercises);
            if (res.data.exercises.length > 0) {
                setSelectedExercise(res.data.exercises[0]);
            }
            else {
                setSelectedExercise(null);
            }
        })
            .catch(console.error)
            .finally(() => setLoading(false));
    }, [id, activeLevel]);
    if (loading) {
        return _jsx("p", { className: "text-center", children: _jsx("i", { className: "fas fa-spinner fa-spin fa-4x py-80" }) });
    }
    return (_jsxs("section", { className: "py-20 bg-[#0f0f0f] text-white", children: [_jsx("div", { className: "flex flex-col items-center py-20 ", children: _jsx("img", { src: workout, alt: "workout", className: "w-auto" }) }), _jsxs("div", { className: "container mx-auto grid grid-cols-12 gap-8", children: [_jsxs("div", { className: "col-span-12 lg:col-span-4", children: [_jsx("div", { className: "flex flex-wrap gap-3 mb-6", children: levels.map((level) => (_jsx("button", { onClick: () => setActiveLevel(level), className: `px-4 py-2 rounded-full text-sm transition
                  ${activeLevel?._id === level._id
                                        ? "bg-[#ff4500] text-white"
                                        : "bg-[#1a1a1a] hover:bg-[#222]"}`, children: level.name }, level._id))) }), _jsx("div", { className: "space-y-4", children: exercises.map((exercise) => {
                                    const videoId = getYoutubeId(exercise.short_youtube_demonstration_link);
                                    return (_jsxs("div", { onClick: () => setSelectedExercise(exercise), className: `flex items-center gap-4 p-3 rounded-xl cursor-pointer transition
                    ${selectedExercise?._id === exercise._id
                                            ? "bg-[#ff4500] border border-[#ff4500]"
                                            : "bg-[#1a1a1a] hover:bg-[#222]"}`, children: [_jsx("img", { src: videoId
                                                    ? `https://img.youtube.com/vi/${videoId}/0.jpg`
                                                    : "https://via.placeholder.com/64", className: "w-16 h-16 rounded-full object-cover", alt: exercise.exercise }), _jsxs("div", { children: [_jsx("h4", { className: "font-semibold", children: exercise.exercise }), _jsxs("p", { className: "text-sm text-gray-400", children: ["Target: ", exercise.target_muscle_group] })] })] }, exercise._id));
                                }) })] }), selectedExercise && (_jsx("div", { className: "col-span-12 lg:col-span-8", children: _jsxs("div", { className: "rounded-2xl overflow-hidden bg-black", children: [getYoutubeId(selectedExercise.short_youtube_demonstration_link) ? (_jsx("iframe", { className: "w-full h-[420px]", src: `https://www.youtube.com/embed/${getYoutubeId(selectedExercise.short_youtube_demonstration_link)}`, title: selectedExercise.exercise, allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture", allowFullScreen: true })) : (_jsx("div", { className: "w-full h-[420px] flex items-center justify-center text-gray-400", children: "No video available" })), _jsxs("div", { className: "p-6", children: [_jsx("h2", { className: "text-3xl font-bold mb-2", children: selectedExercise.exercise }), _jsxs("p", { className: "text-gray-400", children: ["Level: ", selectedExercise.difficulty_level] }), _jsxs("p", { className: "text-gray-400", children: ["Target: ", selectedExercise.target_muscle_group] }), selectedExercise.short_youtube_demonstration_link && (_jsx("a", { href: selectedExercise.short_youtube_demonstration_link, target: "_blank", rel: "noopener noreferrer", className: "inline-block mt-4 text-[#ff4500] hover:underline", children: "Watch on YouTube" }))] })] }) }))] })] }));
}
