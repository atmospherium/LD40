// @flow
import base from "../base";
describe("click base", () => {
	it("should create a default state", () => {
		expect(base()).toEqual({ click_count: 0, brightness: 1 });
	});
	it("should iterate on click action", () => {
		expect(base(base(), { type: "CLICK_ACTION", value: 1 })).toEqual({
			click_count: 1,
			brightness: 1
		});
		expect(base(base(), { type: "CLICK_ACTION", value: 2 })).toEqual({
			click_count: 2,
			brightness: 1
		});
	});
});
