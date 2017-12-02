// @flow
import React from "react";
import renderer from "react-test-renderer";
import { staticRouterWrapped } from "./jestHelpers";

describe("Jest Helper Methods", () => {
	describe("staticRouterWrapped() wrapper", () => {
		it("should return object", () => {
			let objPre = <div />;
			let obj = renderer.create(staticRouterWrapped(objPre)).toJSON();
			expect(obj.type).toEqual(objPre.type);
		});
	});
});
