// @flow
export interface AchievementInterface {
	name: string,
	description: string,
	perk: string,
	displayTrigger?: Object,
	dispatch: Object,
}
export default [
	//ORB
	{
		name: "Sword of Inexperience",
		description: "Fill the orb once",
		trigger: { type: "ORB_COMPLETION", value: 1 },
		perk: "Speeds up orb completion",
		dispatch: { type: "ORB_INCREASE_SPEED", value: 1.2 }
	},
	{
		name: "Getting the hang of this",
		description: "Fill the orb 10 times",
		trigger: { type: "ORB_COMPLETION", value: 2 },
		perk: "Speeds up orb completion",
		dispatch: { type: "ORB_INCREASE_SPEED", value: 1.5 }
	},
	{
		name: "Orb master",
		description: "Fill the orb 100 times",
		trigger: { type: "ORB_COMPLETION", value: 3 },
		perk: "Speeds up orb completion",
		dispatch: { type: "ORB_INCREASE_SPEED", value: 1.5 }
	},

	{
		name: "Getting experience",
		description: "Fill the orb 5 times",
		trigger: { type: "ORB_COMPLETION", value: 2 },
		perk: "Show the experience bar",
		dispatch: { type: "UI_SHOW_EXPERIENCE", value: true }
	},

	{
		name: "LEVEL 3!",
		description: "Reach level 3",
		trigger: { type: "EXPERIENCE_SET_LEVEL", value: 3 },
		perk: "Stop clicking so much",
		dispatch: { type: "ORB_SET_TYPE", value: "press" }
	},
	{
		name: "Level 15",
		description: "React level 15",
		trigger: { type: "EXPERIENCE_SET_LEVEL", value: 6 },
		perk: "Stop clicking at all!",
		dispatch: { type: "ORB_SET_TYPE", value: "auto" }
	}
];
