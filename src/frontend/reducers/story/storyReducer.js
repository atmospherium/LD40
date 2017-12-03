// @flow
import { merge } from "../../../lib/redux";
import items from "./storyItems";

interface StoryInterface {
	items: string[],
}
const initialState: StoryInterface = {
	items: []
};
export default (
	state: StoryInterface = initialState,
	action: Object = { type: "default" }
) => {
	switch (action.type) {
	case "ORB_COMPLETION":
		return merge(state, {
			items: items.filter((d, i) => {
				return i < action.value && i >= action.value - 5;
			})
		});
	default:
		return state;
	}
};
