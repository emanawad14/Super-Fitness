

import { IMusclesResponse } from "@/interfaces/muscles";

export async function getMuscles(): Promise<IMusclesResponse> {
  const res = await fetch("https://fitness.elevateegy.com/api/v1/muscles");
  if (!res.ok) throw new Error("Failed to fetch muscles");
  return res.json();
}
