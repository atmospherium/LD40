// @flow
import { merge } from "../../../lib/redux";
interface OrbState {
	active: boolean,
	speed: number,
	progress: number,
	progress_normalized: number,
	max: number,
	completions: number,
}
const initialState = {
	active: false,
	speed: 0.1,
	progress: 0.001,
	progress_normalized: 0,
	max: 10,
	completions: 0
};

export default (
	state: OrbState = initialState,
	action: Object = { action: "default" }
) => {
	switch (action.type) {
	case "ORB_MOUSE_DOWN":
		return merge(state, { active: true });
	case "ORB_MOUSE_UP":
		return merge(state, { active: false });
	case "ORB_TICK":
		let completions = state.completions;
		let progress = state.progress + state.speed;
		if (progress > state.max) {
			progress -= state.max;
			completions += 1;
		}
		let progress_normalized = progress / state.max;
		return merge(state, { progress, progress_normalized, completions });
	default:
		return state;
	}
};
