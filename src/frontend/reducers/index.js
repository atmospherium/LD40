// @flow
import config from "kit/config";
import { merge } from "src/lib/redux";

interface baseAction {
	type: string,
	value: any,
}
const processAction: baseAction = {
	type: "",
	value: 1
};

interface baseReducer {
	clicks: number,
	level: number,
}

const initialState: baseReducer = {
	clicks: 0,
	level: 1
};
const statsReducer = (
	state: baseReducer = initialState,
	action: baseAction = { type: "default", value: undefined }
) => {
	if (typeof state == undefined) {
		return initialState;
	}
	switch (action.type) {
	case "CLICKED":
		return merge(state, {
			clicks: state.clicks + (action.value || 1)
		});
	default:
		return initialState;
	}
};

config.addReducer("stats", statsReducer, initialState);

export default statsReducer;
