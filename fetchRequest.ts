const url: string = "https://api.jikan.moe/v4";

export async function fetchRequest(params: string) {
  try {
    const response = await fetch(`${url}${params}`, { method: "GET" });
    if (!response.ok) {
      throw new Error(`HTTP Error: status: ${response.status}`);
    }
    const data = await response.json();
    // console.log(data);
    return data;
  } catch (error) {
    console.log("Fetch Failed: ", error);
  }
}
