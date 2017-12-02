// @flow
export const CLICKED = "CLICKED";
export const clicked = (amount: number = 1) => ({
	type: CLICKED,
	value: amount
});
