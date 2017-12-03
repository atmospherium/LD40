// @flow
import { merge } from "src/lib/redux";
interface stateInterface {
	experience: number,
	experienceLevel: number,
	lowerBound: number,
	upperBound: number,
	lootboxes: number,
	speed: number,
}
const initialState = {
	experience: 0,
	experienceLevel: 1,
	lootboxes: 0,
	lowerBound: 0,
	upperBound: 100,
	speed: 1
};

const calculateLevel = (experience: number) => {
	return Math.floor(experience / 100) + 1;
};

const calculateBound = (level: number) => {
	return Math.floor((level - 1) * 100);
};

export default (
	state: stateInterface = initialState,
	action: Object = { type: "default", value: undefined }
) => {
	switch (action.type) {
	case "ORB_COMPLETION":
		let newExp = state.experience + Math.random() * 26 + 15;
		let level = calculateLevel(newExp);
		return merge(state, {
			experience: newExp,
			experienceLevel: level,
			lowerBound: calculateBound(level),
			upperBound: calculateBound(level + 1)
		});
	default:
		return state;
	}
};
