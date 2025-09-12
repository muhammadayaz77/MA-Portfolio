// lib/getGithubData.ts
export async function getGithubData(username: string) {
  const res = await fetch(`https://github-contributions-api.jogruber.de/v4/${username}`);
  if (!res.ok) throw new Error("Failed to fetch GitHub data");
  return res.json();
}
