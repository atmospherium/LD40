// @flow
import { merge } from "../../../lib/redux";
interface uiState {
	view: string,
}
const initialState: uiState = {
	view: "phase1"
};

export default (
	state: uiState = initialState,
	action: Object = { type: "default" }
) => {
	switch (action.type) {
	case "UI_GOTO_PHASE1":
		return merge(state, { view: "phase1" });
	default:
		return state;
	}
};
