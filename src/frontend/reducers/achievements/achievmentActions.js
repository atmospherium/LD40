// @flow
export const ACHIEVEMENT_UNLOCK = "ACHIEVEMENT_UNLOCK";

export const unlockAchievement = (id: number): Object => ({
	type: ACHIEVEMENT_UNLOCK,
	value: id
});
