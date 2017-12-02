// @flow
interface uiState {
	view: string,
}
const initialState: uiState = {
	view: "other"
};

export default (
	state: uiState = initialState,
	action: Object = { type: "default" }
) => {
	switch (action.type) {
	default:
		return state;
	}
};
