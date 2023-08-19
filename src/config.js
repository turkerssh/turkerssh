
export const activity = {
 open: "<!--START_SECTION:activity-->",
 close: "<!--END_SECTION:activity-->",
 gitUsername: "turkwr",
 maxLines: 10,
};

export const wakatime = {
 open: "<!--START_SECTION:wakatime-->",
 close: "<!--END_SECTION:wakatime-->",
 apiKey: Deno.env.get("WAKATIME_API_KEY"),
};
