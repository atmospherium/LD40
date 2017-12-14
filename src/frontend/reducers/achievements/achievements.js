// @flow
export interface AchievementInterface {
	name: string,
	description: string,
	perk: string,
	displayTrigger?: Object,
	dispatch: Object,
}

function createWeapon(
	name: string,
	dTrig: number,
	trig: number,
	buff: number
): AchievementInterface {
	return {
		name,
		description: `Fill the Orb ${trig} time${trig > 1 ? "s" : ""}`,
		displayTrigger: { type: "ORB_COMPLETION", value: dTrig },
		trigger: { type: "ORB_COMPLETION", value: trig },
		perk: `Orb speed x ${buff}`,
		dispatch: { type: "ORB_INCREASE_SPEED", value: buff }
	};
}

function createPotion(
	name: string,
	dTrig: number | Object,
	trig: number,
	buff: number
): AchievementInterface {
	return {
		name,
		description: `Reach Level ${trig}`,
		displayTrigger: { type: "EXPERIENCE_SET_LEVEL", value: dTrig },
		trigger: { type: "EXPERIENCE_SET_LEVEL", value: trig },
		perk: `Experience boost x ${buff}`,
		dispatch: { type: "EXPERIENCE_SET_SPEED", value: buff }
	};
}

const tiers = [
	"Inexperience",
	"Repetition",
	"Redundancy",
	"Deja Vu",
	"Farming",
	"Wasting Time",
	"Justice",
	"Interior Design"
];
function createWeapons(): Object[] {
	let weapons = [
		{ id: 1, name: "Dagger" },
		{ id: 2, name: "Sword" },
		{ id: 3, name: "Lead Pipe" },
		{ id: 5, name: "Scimitar" },
		{ id: 8, name: "Firecracker" },
		{ id: 9, name: "Scary Dude" },
		{ id: 10, name: "Robed Bird" },
		{ id: 13, name: "Bowler Hat" }
	];
	let lastVal = 1;
	let weaponSet = tiers
		.map((tier, tierIndex) => {
			let pow = 11 * tierIndex + 1;
			return weapons
				.map((weapon, weaponIndex) => {
					let val = pow * weapon.id;
					let w = createWeapon(`${weapon.name} of ${tier}`, lastVal, val, 1.05);
					lastVal = val;
					return w;
				})
				.reduce((prev, current) => [...prev, current], {});
		})
		.reduce((prev, current) => [...prev, ...current]);
	return weaponSet;
}
function createPotions(): Object[] {
	let containers = [
		{ id: 1, name: "Eyedropper" },
		{ id: 2, name: "Tincture" },
		{ id: 3, name: "Vial" },
		{ id: 5, name: "Cuppa" },
		{ id: 7, name: "Pint" }
	];
	let lastVal = 1;
	let weaponSet = tiers
		.map((tier, tierIndex) => {
			let pow = Math.pow(9, tierIndex);
			return containers
				.map((container, containerIndex) => {
					let val = pow * container.id + 1;
					let w = createPotion(
						`${container.name} of ${tier}`,
						lastVal,
						val,
						1.2
					);
					lastVal = val;
					return w;
				})
				.reduce((prev, current) => [...prev, current], {});
		})
		.reduce((prev, current) => [...prev, ...current]);
	return weaponSet;
}
export default [
	//ORB
	...createWeapons(),
	...createPotions(),

	{
		name: "Visor of XP Knowledge",
		displayTrigger: { type: "ORB_COMPLETION", value: 3 },
		description: "Fill the orb 6 times",
		trigger: { type: "ORB_COMPLETION", value: 6 },
		perk: "Show the experience bar",
		dispatch: { type: "UI_SHOW_EXPERIENCE", value: true }
	},

	{
		name: "Fingers of Automation",
		displayTrigger: { type: "UI_SHOW_EXPERIENCE", value: true },
		description: "Reach level 3",
		trigger: { type: "EXPERIENCE_SET_LEVEL", value: 3 },
		perk: "Click once per orb!",
		dispatch: { type: "ORB_SET_TYPE", value: "press" }
	},
	{
		name: "Fingerless Gloves of Telekenesis",
		displayTrigger: { type: "EXPERIENCE_SET_LEVEL", value: 3 },
		description: "Reach level 10",
		trigger: { type: "EXPERIENCE_SET_LEVEL", value: 10 },
		//perk: "Make the Orb click itself!",
		dispatch: { type: "ORB_SET_TYPE", value: "auto" }
	}
];
