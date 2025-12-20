import { Exercise, RootExercises } from "@/interfaces/exercises";
import { Level, RootLevels } from "@/interfaces/Levels";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import workout from "../../src/assets/images/WOrkouts.png"






function getYoutubeId(url?: string) {
  if (!url) return null;

  const regExp =
    /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/;
  const match = url.match(regExp);
  return match ? match[1] : null;
}



export default function ClassesDetails() {
  const { id } = useParams<{ id: string }>();

  const [levels, setLevels] = useState<Level[]>([]);
  const [activeLevel, setActiveLevel] = useState<Level | null>(null);
  const [exercises, setExercises] = useState<Exercise[]>([]);
  const [selectedExercise, setSelectedExercise] =
    useState<Exercise | null>(null);
  const [loading, setLoading] = useState(true);

 
  useEffect(() => {
    axios
      .get<RootLevels>("https://fitness.elevateegy.com/api/v1/levels")
      .then((res) => {
        setLevels(res.data.levels);
        if (res.data.levels.length > 0) {
          setActiveLevel(res.data.levels[0]); 
        }
      })
      .catch(console.error);
  }, []);

 
  useEffect(() => {
    if (!id || !activeLevel) return;

    setLoading(true);
    axios
      .get<RootExercises>(
        "https://fitness.elevateegy.com/api/v1/exercises/by-muscle-difficulty",
        {
          params: {
            primeMoverMuscleId: id,
            difficultyLevelId: activeLevel._id,
          },
        }
      )
      .then((res) => {
        setExercises(res.data.exercises);

     
        if (res.data.exercises.length > 0) {
          setSelectedExercise(res.data.exercises[0]);
        } else {
          setSelectedExercise(null);
        }
      })
      .catch(console.error)
      .finally(() => setLoading(false));
  }, [id, activeLevel]);






  if (loading) {
    return<p className="text-center">
    <i className="fas fa-spinner fa-spin fa-4x py-80"></i>
  </p>;
  }

  return (
    <section className="py-20 bg-[#0f0f0f] text-white">
       
        <div className="flex flex-col items-center py-20 ">
        <img src={workout} alt="workout" className="w-auto" />
      </div>



      <div className="container mx-auto grid grid-cols-12 gap-8">
      
        <div className="col-span-12 lg:col-span-4">
         
          <div className="flex flex-wrap gap-3 mb-6">
            {levels.map((level) => (
              <button
                key={level._id}
                onClick={() => setActiveLevel(level)}
                className={`px-4 py-2 rounded-full text-sm transition
                  ${
                    activeLevel?._id === level._id
                      ? "bg-[#ff4500] text-white"
                      : "bg-[#1a1a1a] hover:bg-[#222]"
                  }`}
              >
                {level.name}
              </button>
            ))}
          </div>

          
          <div className="space-y-4">
            {exercises.map((exercise) => {
              const videoId = getYoutubeId(
                exercise.short_youtube_demonstration_link
              );

              return (
                <div
                  key={exercise._id}
                  onClick={() => setSelectedExercise(exercise)}
                  className={`flex items-center gap-4 p-3 rounded-xl cursor-pointer transition
                    ${
                      selectedExercise?._id === exercise._id
                        ? "bg-[#ff4500] border border-[#ff4500]"
                        : "bg-[#1a1a1a] hover:bg-[#222]"
                    }`}
                >
                  <img
                    src={
                      videoId
                        ? `https://img.youtube.com/vi/${videoId}/0.jpg`
                        : "https://via.placeholder.com/64"
                    }
                    className="w-16 h-16 rounded-full object-cover"
                    alt={exercise.exercise}
                  />

                  <div>
                    <h4 className="font-semibold">{exercise.exercise}</h4>
                    <p className="text-sm text-gray-400">
                      Target: {exercise.target_muscle_group}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>




        {selectedExercise && (
          <div className="col-span-12 lg:col-span-8">
            <div className="rounded-2xl overflow-hidden bg-black">
              {getYoutubeId(
                selectedExercise.short_youtube_demonstration_link
              ) ? (
                <iframe
                  className="w-full h-[420px]"
                  src={`https://www.youtube.com/embed/${getYoutubeId(
                    selectedExercise.short_youtube_demonstration_link
                  )}`}
                  title={selectedExercise.exercise}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              ) : (
                <div className="w-full h-[420px] flex items-center justify-center text-gray-400">
                  No video available
                </div>
              )}

              <div className="p-6">
                <h2 className="text-3xl font-bold mb-2">
                  {selectedExercise.exercise}
                </h2>

                <p className="text-gray-400">
                  Level: {selectedExercise.difficulty_level}
                </p>
                <p className="text-gray-400">
                  Target: {selectedExercise.target_muscle_group}
                </p>

                {selectedExercise.short_youtube_demonstration_link && (
                  <a
                    href={selectedExercise.short_youtube_demonstration_link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-4 text-[#ff4500] hover:underline"
                  >
                    Watch on YouTube
                  </a>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
