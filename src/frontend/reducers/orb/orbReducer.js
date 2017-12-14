// @flow
import { merge } from "../../../lib/redux";
interface OrbState {
	method: "click" | "press" | "auto",
	active: boolean,
	speed: number,
	progress: number,
	progress_normalized: number,
	max: number,
	completions: number,
}
const initialState = {
	method: "click",
	active: false,
	speed: 0.34,
	progress: 0.001,
	progress_normalized: 0,
	max: 10,
	completions: 0
};

function getProgress(state: Object, amount: number): Object {
	let completions = state.completions;
	let progress = state.progress + amount;
	let active = state.method == "auto" || state.active;
	if (progress > state.max) {
		progress -= state.max;
		completions += 1;
		if (state.method == "press") {
			active = false;
			progress = 0;
		}
	}
	let progress_normalized = progress / state.max;
	return { progress, progress_normalized, completions, active };
}

export default (
	state: OrbState = initialState,
	action: Object = { action: "default" }
) => {
	switch (action.type) {
	case "ORB_MOUSE_DOWN":
		if (state.method == "click")
			return merge(state, getProgress(state, state.speed * 4));
		return merge(state, { active: true });
	case "ORB_MOUSE_UP":
		return state; // merge(state, { active: false });
	case "ORB_TICK":
		return merge(state, getProgress(state, state.speed));
	case "ORB_INCREASE_SPEED":
		return merge(state, { speed: state.speed * action.value });
	case "ORB_SET_TYPE":
		return merge(state, { method: action.value });
	case "UI_GOTO_PHASE1":
		return initialState;
	default:
		return state;
	}
};
