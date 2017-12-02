// @flow
import * as redux from "./redux";
describe("Redux helper lib", () => {
	it("should be able to merge Objects", () => {
		expect(redux.merge({ field1: 1 }, { field2: 2 })).toEqual({
			field1: 1,
			field2: 2
		});
	});
	it("should give rightmost args precedence", () => {
		expect(redux.merge({ field: 1 }, { field: 2 })).toEqual({ field: 2 });
	});
});
