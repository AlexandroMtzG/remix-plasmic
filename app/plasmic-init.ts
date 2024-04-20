import { initPlasmicLoader } from "@plasmicapp/loader-react";
export const PLASMIC = initPlasmicLoader({
  projects: [
    {
      id: "wuJHh63Q8cYMTdPpnFQ1FG", // ID of a project you are using
      token: "ya4q9bqcoAcwRdMTxYFuJU5d4kZNNSbr5mCpZcTNTrRZIXzYEHVY0fLJV0KA7YSpIh0p3cxlPIDXeYHAKQ", // API token for that project
    },
  ],
  // Fetches the latest revisions, whether or not they were unpublished!
  // Disable for production to ensure you render only published changes.
  preview: true,
});
