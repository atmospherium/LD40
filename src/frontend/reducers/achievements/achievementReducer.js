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
	visible: achievements.filter(a => a.displayTrigger == null).map(a => a.name),
	achievements
};

function unlock(state: Object, name: string): Object {
	return { unlocked: [...state.unlocked, name] };
}
function makeVisible(state: Object, name: string): Object {
	return { visible: [...state.visible, name] };
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
		.reduce(
			(prev, current) => {
				return merge(prev, unlock(prev, current.name));
			},
			achievements
				.filter(achievement => {
					return (
						achievement.displayTrigger != null &&
						achievement.displayTrigger.type === action.type &&
						achievement.displayTrigger.value === action.value
					);
				})
				.reduce((prev, current) => {
					return merge(prev, makeVisible(prev, current.name));
				}, state)
		);
};
