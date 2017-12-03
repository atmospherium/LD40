// @flow
export const EXPERIENCE_INCREMENT = "EXPERIENCE_INCREMENT";
export const addExperience = (amount: number = 1) => ({
	type: EXPERIENCE_INCREMENT,
	value: amount
});

export const LOOTBOX_OPEN = "LOOTBOX_OPEN";
export const openLootbox = () => ({
	type: LOOTBOX_OPEN,
	value: 1
});
