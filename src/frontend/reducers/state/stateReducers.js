// @flow
import { merge } from "src/lib/redux";
interface stateInterface {
	clicks: number,
}
const initialState = {
	clicks: 0
};
export default (
	state: stateInterface = initialState,
	action: Object = { type: "default", value: undefined }
) => {
	switch (action.type) {
	case "CLICKED":
		return merge(state, { clicks: state.clicks + action.value });
	default:
		return state;
	}
};
