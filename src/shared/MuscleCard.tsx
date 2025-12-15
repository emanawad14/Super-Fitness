import { IMuscleID } from "@/interfaces/musclesById";

interface Props {
  muscle: IMuscleID;
}

export default function MuscleCard({ muscle }: Props) {
  return (
    <div className="bg-white  rounded-2xl shadow-md overflow-hidden text-center hover:shadow-lg transition">
      {muscle.image && (
        <img
          src={muscle.image}
          alt={muscle.name}
          className="w-full h-48 rounded-2xl object-cover"
        />
      )}

      <div className="p-4">
        <h3 className="font-bold text-lg">{muscle.name}</h3>
      </div>
    </div>
  );
}
