// @flow
export const merge = (...objects: Object[]): Object => {
	return Object.assign({}, ...objects);
};
