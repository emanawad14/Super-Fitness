import { IMusclesByGroupResponseID } from "@/interfaces/musclesById";


export async function getMusclesByGroupId(
  id: string
): Promise<IMusclesByGroupResponseID> {
  const res = await fetch(
    `https://fitness.elevateegy.com/api/v1/musclesGroup/${id}`
  );

  if (!res.ok) {
    throw new Error("Failed to fetch muscles by group");
  }

  return res.json();
}
