// @flow
import * as actions from "./achievmentActions";
import { merge } from "src/lib/redux";
interface achievementReducerInterface {
	unlocked: number[],
}
const initialState = {
	unlocked: []
};
export default (
	state: achievementReducerInterface = initialState,
	action: Object = { type: "default" }
) => {
	if (typeof state == undefined) {
		return initialState;
	}
	switch (action.type) {
	case actions.ACHIEVEMENT_UNLOCK:
		return merge(state, { unlocked: [...state.unlocked, action.value] });
	default:
		return state;
	}
};
