// @flow
const PATHS = require("./config/paths");
module.exports = {
	verbose: false,
	testPathIgnorePatterns: ["/node_modules/", "/dist/", "/static/"],
	coveragePathIgnorePatterns: ["kit"],
	modulePaths: [PATHS.root, PATHS.src, "flow-typed"],
	collectCoverage: false,
	globals: {
		SERVER: true
	}
};
