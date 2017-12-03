// @flow
import React from "react";
import * as d3 from "d3";
import App_style from "../../App.scss";
import Experience from "./experience";
import Platform from "./platform";
import Lootchest from "./Lootchest";
import { connect } from "react-redux";
import config from "kit/config";
import reducers from "../../reducers";
import * as StateActions from "../../reducers/state/stateActions";
const arcPath = d3
	.arc()
	.outerRadius(100)
	.innerRadius(90);
const buttonPath = d3.arc().outerRadius(75);

interface experienceProps {
	experience: number,
	level: number,
	mouseDown: Function,
	mouseUp: Function,
	dispatch: Function,
	speed: number,
	upperBound: number,
	lowerBound: number,
}
var mouseDown = false;
var timeStep;

@connect(state => {
	return {
		experience: state.game.state.experience,
		level: state.game.state.experienceLevel,
		upperBound: state.game.state.upperBound,
		lowerBound: state.game.state.lowerBound,
		speed: state.game.state.speed,
		orbActive: state.game.orb.active
	};
})
export default class ExperienceComponent extends React.Component<
	experienceProps
> {
	mouseDown = () => {
		mouseDown = true;
	};
	render(): React$Element<*> {
		return (
			<div>
				<Experience
					level={this.props.level}
					completion={
						(this.props.experience - this.props.lowerBound) /
						(this.props.upperBound - this.props.lowerBound)
					}
					click_count={this.props.experience}/>
			</div>
		);
	}
}
