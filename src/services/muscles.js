export async function getMuscles() {
    const res = await fetch("https://fitness.elevateegy.com/api/v1/muscles");
    if (!res.ok)
        throw new Error("Failed to fetch muscles");
    return res.json();
}
