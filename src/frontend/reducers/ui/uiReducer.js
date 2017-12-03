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
	case "UI_SHOW_EXPERIENCE":
		return merge(state, { experienceVisible: true });
	default:
		return state;
	}
};
