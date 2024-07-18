module.exports = {
  transform: {
    "^.+\\.(t|j)sx?$": "babel-jest"
  },
  moduleNameMapper: {
    "\\.(css|less|scss)$": "identity-obj-proxy"
  },
  modulePathIgnorePatterns: ["node_modules", "jest-test-results.json"],
  testEnvironment: "jest-environment-jsdom",
  reporters: [
    "default",
    [
      "jest-html-reporter",
      {
        "pageTitle": "Test Report",
        "outputPath": "./.jest-test-results.json",
        "includeFailureMsg": true
      }
    ]
  ],
};
