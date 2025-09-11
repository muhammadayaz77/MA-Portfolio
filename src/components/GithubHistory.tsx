"use client";

import ActivityCalendar from "react-activity-calendar";

export default function GithubHistory() {
  const theme = {
    level0: "#161B22", // empty
    level1: "#9BE9A8", // light green
    level2: "#40C463", // medium green
    level3: "#30A14E", // dark green
    level4: "#216E39", // darkest green
  };

  return (
    <section className="w-full flex flex-col items-center justify-center py-10">
      <h2 className="text-2xl font-bold mb-6">My GitHub History</h2>
      <ActivityCalendar
        username="muhammadayaz77"
        theme={theme}
        hideTotalCount={true}
        colorScheme="dark"
        blockSize={14}
        blockMargin={4}
      />
      <p className="mt-4 text-center text-gray-400 text-sm max-w-lg">
        This chart showcases my contributions throughout the year. 
        Green shades represent active days — from light green (few commits) 
        to dark green (many commits). Click above to visit my GitHub and see more of my work.
      </p>
    </section>
  );
}
