const config = {
  name: "correlative-date-validation-capture-plugin",
  title: "Correlative date validation Capture Plugin",
  description:
    "A Capture Plugin that emits a warning when an event date is before another event date for same enrollment",
  type: "app",
  author: "EyeSeeTea team",

  entryPoints: {
    plugin: "./src/Plugin.tsx",
  },
};

module.exports = config;
