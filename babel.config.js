const presets = [
  [
    "@babel/env",
    {
      targets: {
        edge: "17",
        firefox: "60",
        chrome: "67",
        safari: "11.1",
      },
      useBuiltIns: "usage",
      corejs: 2,
    },
  ],
];

const plugins = [
  ["module-resolver", {
    "root": ["./src"]
  }],
  ["@babel/plugin-proposal-class-properties", {
    "loose": true
  }],
];

module.exports = { presets, plugins };
