// @flow
import config from "kit/config";
import { merge } from "src/lib/redux";

interface baseAction {
	type: string,
	value: any,
}
const clickAction: baseAction = {
	type: "CLICK_ACTION",
	value: 1
};

interface baseReducer {
	click_count: number,
	brightness: 1,
}

const initialState: baseReducer = {
	click_count: 0,
	brightness: 1
};
const clickReducer = (
	state: baseReducer = initialState,
	action: baseAction = { type: "default", value: undefined }
) => {
	if (typeof state == undefined) {
		return initialState;
	}
	switch (action.type) {
	case "CLICK_ACTION":
		return merge(state, {
			click_count: state.click_count + (action.value || 1)
		});

	default:
		return initialState;
	}
};

config.addReducer("click", clickReducer, initialState);

export default clickReducer;
