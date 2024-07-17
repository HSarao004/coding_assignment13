module.exports = {
  transform: {
    "^.+\\.(t|j)sx?$": "babel-jest"
  },
  moduleNameMapper: {
    "\\.(css|less|scss)$": "identity-obj-proxy"
  },
  modulePathIgnorePatterns: ["node_modules", "jest-test-results.json"],
  testEnvironment: "jest-environment-jsdom",
};
