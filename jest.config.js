module.exports = {
  collectCoverageFrom: [
    "<rootDir>/src/**/*.{ts,tsx}", // get coverage from all TS and TSX files in /src, even if it's not tested
    "!**/index*", // ignore index files
    "!**/__snapshots__/**", // ignore snapshots
  ],
  coverageDirectory: "<rootDir>/coverage/",
  coverageThreshold: {
    global: {
      branches: 95,
      functions: 95,
      lines: 95,
      statements: 95,
    },
  },
  coverageReporters: ["html", "text-summary"],
  coveragePathIgnorePatterns: ["node_modules/", "lib/"],
  testRegex: ["(\\.(test))\\.(ts|tsx|js|jsx)$"],
  testPathIgnorePatterns: ["node_modules/", "lib/"],
  transform: {
    "^.+\\.jsx?$": "<rootDir>/jest.transform.js",
    ".(ts|tsx)$": "ts-jest",
  },
  moduleFileExtensions: ["ts", "tsx", "js", "jsx"],
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  snapshotSerializers: ["enzyme-to-json/serializer"],
  verbose: true,
  globals: {
    "ts-jest": {
      tsConfig: "<rootDir>/tsconfig.json",
    },
  },
};
