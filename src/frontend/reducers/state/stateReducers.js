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
	experienceLevel: 0,
	lootboxes: 0,
	lowerBound: 0,
	upperBound: 10,
	speed: 1
};

const calculateLevel = (experience: number) => {
	return Math.floor(experience / 10);
};

const calculateBound = (level: number) => {
	return Math.floor(level * 10);
};

export default (
	state: stateInterface = initialState,
	action: Object = { type: "default", value: undefined }
) => {
	switch (action.type) {
	case "EXPERIENCE_INCREMENT":
		let newExp = state.experience + action.value;
		let level = calculateLevel(newExp);
		return merge(state, {
			experience: newExp,
			experienceLevel: level,
			lowerBound: calculateBound(level),
			upperBound: calculateBound(level + 1)
		});
	case "STATE_UPDATE_MODIFIERS":
		return merge(state, {
			speed: 1 + action.value.length
		});
	case "LOOTBOX_OPEN":
		return merge(state);
	default:
		return state;
	}
};
