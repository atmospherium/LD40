// @flow
import * as actions from "./achievmentActions";
import { merge } from "src/lib/redux";
import achievements, { AchievementInterface } from "./achievements";
interface achievementReducerInterface {
	unlocked: string[],
	visible: string[],
	achievements: AchievementInterface[],
}
const initialState = {
	unlocked: [],
	achievements
};

function unlock(state: Object, id: number): Object {
	return { unlocked: [...state.unlocked, id] };
}
export default (
	state: achievementReducerInterface = initialState,
	action: Object = { type: "default" }
) => {
	if (typeof state == undefined) {
		return initialState;
	}
	return achievements
		.filter(achievement => {
			return (
				achievement.trigger.type === action.type &&
				achievement.trigger.value === action.value
			);
		})
		.reduce((prev, current) => {
			console.log(prev, current);
			return merge(prev, unlock(prev, current.name));
		}, state);
};
