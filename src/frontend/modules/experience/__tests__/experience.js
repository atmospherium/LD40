// @flow
import React from "react";
import renderer from "react-test-renderer";

import Experience from "../experience";

describe("Experience module", () => {
	it("should create an svg", () => {
		let exp = renderer.create(<Experience />).toJSON();
		expect(exp.type).toBe("svg");
	});
});
