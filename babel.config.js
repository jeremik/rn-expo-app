module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      "@babel/plugin-proposal-export-namespace-from",
      "react-native-reanimated/plugin",
      require.resolve("expo-router/babel"),
      ["import", { libraryName: "@ant-design/react-native" }] // The difference with the Web platform is that you do not need to set the style
    ],
  };
};
