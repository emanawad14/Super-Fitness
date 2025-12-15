import { useEffect, useState } from "react";
import MuscleCard from "@/shared/MuscleCard";
import MuscleTabs from "@/shared/MuscleTabs";
import "./work.css"
import workout from "../../src/assets/images/WOrkouts.png"

import { getMuscles } from "@/services/muscles";
import { getMusclesByGroupId } from "@/services/getMusclesByGroupId";

import { IMuscle } from "@/interfaces/muscles";
import { IMuscleID } from "@/interfaces/musclesById";


export default function WorkOut() {
  const [muscleGroups, setMuscleGroups] = useState<IMuscle[]>([]);
  const [muscles, setMuscles] = useState<IMuscleID[]>([]);
  const [activeGroupId, setActiveGroupId] = useState<string | null>(null);
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

  const handleSelectGroup = (groupId: string) => {
    setActiveGroupId(groupId);
    setLoading(true);

    getMusclesByGroupId(groupId)
      .then((data) => {
        setMuscles(data.muscles);
      })
      .finally(() => setLoading(false));
  };

  return (
    <>


    <section className="image relative py-30 text-center ">
      <div className="flex flex-col items-center ">
        <img src={workout} alt="workout" className="w-auto" />
      </div>
       <div className="bg-[#FFFFFF99] w-full py-10 relative px-4">

  
    <div className="flex items-center justify-center gap-2">
      <i className="fa-solid fa-dumbbell text-[#ff4500] text-[20px]"></i>
      <span className="font-semibold tracking-wide text-[#ff4500]">
        fitness class
      </span>
    </div>

    <h1
      className="text-[28px] sm:text-[30px] md:text-[40px] uppercase font-bold leading-tight mb-10 px-4"
    >
      Transform Your Body with Our <br />
      Dynamic <span className="text-[#ff4500]">Upcoming Workouts</span>
    </h1>




 <MuscleTabs
        groups={muscleGroups}
        activeId={activeGroupId}
        onSelect={handleSelectGroup}
      />




 <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {loading && (
          <p className="text-center col-span-full text-gray-500">
            Loading...
          </p>
        )}

        {!loading &&
          muscles.map((muscle) => (
            <MuscleCard key={muscle._id} muscle={muscle} />
          ))}
      </div>


      </div>

      <div className="hidden md:block h-60"></div>

    </section>
     
     
     

     
     
     
    </>
  );
}
