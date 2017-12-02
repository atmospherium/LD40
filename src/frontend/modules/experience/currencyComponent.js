// @flow
import React from "react";
import * as d3 from "d3";
import App_style from "../../App.scss";
import Experience from "./experience";
import Platform from "./platform";
import Lootchest from "./Lootchest";
import { connect } from "react-redux";
import config from "kit/config";
import Platform_style from "./platform.scss";
import gameReducer from "../../reducers";
const arcPath = d3
	.arc()
	.outerRadius(100)
	.innerRadius(90);
const buttonPath = d3.arc().outerRadius(75);

interface experienceProps {
	click_count: number,
	mouseDown: Function,
	mouseUp: Function,
	dispatch: Function,
}
var mouseDown = false;
var brightness = 1;
var timeStep;
@connect(state => {
	return {
		click_count: state.click.click_count,
		brightness: state.click.brightness
	};
})
export default class ExperienceComponent extends React.Component<
	experienceProps
> {
	frame() {
		if (!mouseDown) return;
		this.props.dispatch({
			type: "CLICK_ACTION",
			value: Math.ceil(this.props.click_count / 100)
		});
	}
	componentWillMount() {
		timeStep = setInterval(() => {
			this.frame();
		}, 1000 / 30);
	}
	componentWillUnmount() {
		clearInterval(timeStep);
	}

	mouseDown = () => {
		mouseDown = true;
	};
	mouseUp = () => {
		mouseDown = false;
	};
	render(): React$Element<*> {
		return (
			<div>
				<Experience
					className={Platform_style.orange}
					mouseUp={this.mouseUp}
					mouseDown={this.mouseDown}
					click_count={this.props.click_count}/>
			</div>
		);
	}
}
