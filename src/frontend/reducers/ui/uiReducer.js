// @flow
import { merge } from "../../../lib/redux";
interface uiState {
	view: string,
	experienceVisible: boolean,
}
const initialState: uiState = {
	view: "phase1",
	experienceVisible: false
};

export default (
	state: uiState = initialState,
	action: Object = { type: "default" }
) => {
	switch (action.type) {
	case "UI_GOTO_PHASE1":
		return merge(state, { view: "phase1" });
	case "ORB_COMPLETION":
		if (action.value == 1) {
			return merge(state, { experienceVisible: true });
		}
		return state;
	default:
		return state;
	}
};
