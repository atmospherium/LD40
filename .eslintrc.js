const path = require("path");
const baseRules = require("eslint-config-airbnb-base/rules/style");
const [_, ...restricted] = baseRules.rules["no-restricted-syntax"];

const PATHS = require("./config/paths");

module.exports = {
	extends: [
		"eslint:recommended",
		"plugin:import/errors",
		"plugin:import/warnings"
	],
	parser: "babel-eslint",
	parserOptions: {
		ecmaVersion: 2017,
		sourceType: "module",
		jsx: true
	},
	env: {
		node: true,
		browser: true,
		jest: true,
		es6: true
	},
	plugins: [
		"babel",
		"react",
		"jsx-a11y",
		"compat",
		"import",
		"flowtype",
		"flow-header"
	],
	rules: {
		"no-console": 1,
		"no-case-declarations": 0,
		indent: ["error", "tab"],
		"import/no-extraneous-dependencies": [0],
		"arrow-parens": ["error", "as-needed"],
		"react/forbid-prop-types": 0,
		"react/jsx-uses-vars": 1,
		"react/jsx-uses-react": 1,
		"react/react-in-jsx-scope": 1,
		"no-plusplus": ["error", { allowForLoopAfterthoughts: true }],
		"react/prefer-stateless-function": [0, { ignorePureComponents: true }],
		"react/no-multi-comp": 0,
		"react/jsx-closing-bracket-location": [1, "after-props"],
		"react/prop-types": 0,
		"linebreak-style": 0,
		"react/jsx-filename-extension": [1, { extensions: [".js", ".jsx"] }],
		"no-restricted-syntax": [
			2,
			...restricted.filter(r => !["ForOfStatement"].includes(r.selector))
		],
		"global-require": 0,
		"no-unused-vars": 0,
		"import/no-unresolved": [2, { commonjs: true }],
		"compat/compat": 2,

		/**
		 * flowtype
		 * @see: https://www.npmjs.com/package/eslint-plugin-flowtype
		 */
		"flowtype/boolean-style": [2, "boolean"],
		"flowtype/define-flow-type": 1,
		"flowtype/delimiter-dangle": [2, "only-multiline"],
		"flowtype/generic-spacing": [2, "never"],
		"flowtype/no-primitive-constructor-types": 2,
		"flowtype/no-types-missing-file-annotation": 2,
		"flowtype/no-weak-types": 0,
		"flowtype/object-type-delimiter": [2, "comma"],
		"flowtype/require-parameter-type": [
			2,
			{
				excludeArrowFunctions: true
			}
		],
		"flowtype/require-return-type": [
			2,
			"always",
			{
				annotateUndefined: "never",
				excludeArrowFunctions: true
			}
		],
		"flowtype/require-valid-file-annotation": 2,
		"flowtype/semi": [2, "always"],
		"flowtype/space-after-type-colon": [2, "always"],
		"flowtype/space-before-generic-bracket": [2, "never"],
		"flowtype/space-before-type-colon": [2, "never"],
		"flowtype/type-id-match": [2, "^([A-Z][a-z0-9]+)+Type$"],
		"flowtype/union-intersection-spacing": [2, "always"],
		"flowtype/use-flow-type": 1,
		"flowtype/valid-syntax": 1,
		"flow-header/flow-header": 2
	},
	settings: {
		"import/resolver": {
			node: {
				paths: [PATHS.root, PATHS.src, "node_modules", "flow-typed"]
			}
		}
	},
	globals: {
		SERVER: false
	}
};
