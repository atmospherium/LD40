// @flow
import stats from "../stats";
describe("stats", () => {
	it("should create a stats reducer", () => {
		expect(stats()).toEqual({
			clicks: 0,
			level: 1
		});
	});
});
