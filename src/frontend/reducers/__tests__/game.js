// @flow
import game from "../game";
describe("click base", () => {
	it("should create a default state", () => {
		expect(game()).toEqual({ click_count: 0, brightness: 1 });
	});
	it("should iterate on click action", () => {
		expect(game(game(), { type: "CLICK_ACTION", value: 1 })).toEqual({
			click_count: 1,
			brightness: 1
		});
		expect(game(game(), { type: "CLICK_ACTION", value: 2 })).toEqual({
			click_count: 2,
			brightness: 1
		});
	});
});
