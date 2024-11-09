/** @type {import('jest').Config} */
const config = {
	verbose: true,
	collectCoverage: true,
	collectCoverageFrom: ["src/**/*.{js,jsx}"],
	coverageDirectory: "coverage",
	testEnvironment: "jsdom",
	setupFilesAfterEnv: ["<rootDir>/setup-tests.js"],
	transform: {
		"^.+\\.(js|jsx)$": "babel-jest",
	},
	moduleFileExtensions: ["js", "jsx"],
	moduleNameMapper: {
		"^.+\\.svg$": "jest-svg-transformer",
		"^.+\\.css$": "identity-obj-proxy",
	},
};

module.exports = config;
