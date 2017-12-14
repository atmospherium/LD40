// @flow
import React from "react";
import { AchievementInterface } from "../../reducers/achievements/achievements";
interface AchievementProps {
	onClick: (id: number) => void,
	achievements: AchievementInterface[],
}
export default (props: AchievementProps) => (
	<div>
		{props.achievements.map(a => {
			let unlocked = props.unlocked && props.unlocked.indexOf(a.name) >= 0;
			let color = unlocked ? "lightgreen" : "darkgray";
			return (
				<div
					key={a.name}
					style={{
						margin: "15px",
						padding: "5px",
						border: "2px solid ",
						color,
						fontSize: "10px",
						width: 150,
						display: "inline-block",
						textShadow: unlocked ? "0 0 30px #00FF00" : ""
					}}>
					<span
						style={{
							fontWeight: "bold",
							fontSize: "14px",
							display: "block"
						}}>
						{a.name.toUpperCase()}
					</span>
					<span style={{ display: "block" }}>{a.description}</span>
					<span style={{ display: "block" }}>{a.perk}</span>
				</div>
			);
		})}
	</div>
);
