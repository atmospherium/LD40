// @flow
import React from "react";
import { connect } from "react-redux";
import Achievements from "./achievements";
import * as achievementActions from "../../reducers/achievements/achievmentActions";

interface AchievementProps {
	dispatch: Function,
	unlocked: number[],
	achievements: Object[],
}
@connect(state => {
	return {
		unlocked: state.game.achievements.unlocked,
		visible: state.game.achievements.visible,
		achievements: state.game.achievements.achievements
	};
})
export default class AchievmentComponent extends React.Component<
	AchievementProps
> {
	dispatchPerks = (achievementList: Object[]) => {
		achievementList.map(achievement => {
			return this.props.dispatch(achievement.dispatch);
		});
	};
	componentWillReceiveProps(props) {
		if (props.unlocked.length != this.props.unlocked.length) {
			let newA = props.unlocked.filter(
				(a, i) => i >= this.props.unlocked.length
			);
			let newAchievements = newA.map(
				i => this.props.achievements.filter(a => a.name == i)[0]
			);
			this.dispatchPerks(newAchievements);
		}
	}
	render(): React$Element<*> {
		return (
			<Achievements
				onClick={id => {
					this.props.dispatch(achievementActions.unlockAchievement(id));
				}}
				achievements={this.props.achievements.filter(
					a => this.props.visible.indexOf(a.name) >= 0
				)}
				unlocked={this.props.unlocked}/>
		);
	}
}
