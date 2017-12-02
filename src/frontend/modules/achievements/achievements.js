// @flow
import React from "react";
import achievements from "../../reducers/achievements/achievements";
interface AchievementProps {
	unlocked: number[],
	onClick: (id: number) => void,
}
export default (props: AchievementProps) => (
	<div>
		<h1>ACHIEVEMENTS!</h1>
		{achievements.map(a => {
			let unlocked = props.unlocked && props.unlocked.indexOf(a.id) >= 0;
			return (
				<p
					onClick={() => {
						props.onClick(a.id);
					}}
					style={{
						color: unlocked ? "lightgreen" : "lightgray",
						textShadow: unlocked ? "0 0 5px #00FF00" : ""
					}}>
					{a.name} - {a.description}
				</p>
			);
		})}
	</div>
);
