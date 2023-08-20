import { activity, wakatime } from "./config.js";
import { fetchActivities } from "./updaters/fetchActivities.js";
import { fetchCodingStats } from "./updaters/fetchCodingStats.js";

const start = new Date().getTime();
const readme = await Deno.readTextFile("./README.md", "utf8");

const [activityList, statsList] = await Promise.all([fetchCodingStats(wakatime.apiKey, activity.gitUsername)]);

const readmeActivity = ``;
const wakatimeActivity = `${readmeActivity.substring(0, readmeActivity.indexOf(wakatime.open) + wakatime.open.length)}\n${statsList}\n${readmeActivity.substring(readmeActivity.indexOf(wakatime.close))}`;
await Deno.writeTextFile("./README.md", wakatimeActivity.trim());

console.log(`::debug:: README updated in ${((new Date().getTime() - start) / 1000).toFixed(2)}s`);
