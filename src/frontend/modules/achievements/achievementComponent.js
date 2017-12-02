// @flow
import React from "react";
import { connect } from "react-redux";
import Achievements from "./achievements";
import * as achievementActions from "../../reducers/achievements/achievmentActions";

interface AchievementProps {
	dispatch: Function,
	unlocked: number[],
}
@connect(state => {
	return {
		unlocked: state.game.achievements.unlocked
	};
})
export default class AchievmentComponent extends React.Component<
	AchievementProps
> {
	render(): React$Element<*> {
		return (
			<Achievements
				onClick={id => {
					this.props.dispatch(achievementActions.unlockAchievement(id));
				}}
				unlocked={this.props.unlocked}/>
		);
	}
}
