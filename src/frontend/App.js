// @flow
import * as React from "react";
import App_style from "./App.scss";
import { connect } from "react-redux";
import baseReducer from "./reducers/base";
import * as d3 from "d3";

import Experience from "./modules/experience/experience";

interface AppProps {
	click_count: number,
	dispatch: Function,
}

var brightness = 1;
var timeStep;
var mouseDown = false;
@connect(state => {
	return {
		click_count: state.click.click_count,
		brightness: state.click.brightness
	};
})
export default class App extends React.Component<AppProps> {
	constructor(props: AppProps) {
		super(props);
	}

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
	render(): React$Element<*> {
		return (
			<div>
				<div
					style={{
						width: "100%",
						textAlign: "center",
						position: "fixed",
						bottom: "0"
					}}>
					<Experience
						click_count={this.props.click_count}
						mouseDown={() => {
							mouseDown = true;
						}}
						mouseUp={() => {
							mouseDown = false;
						}}/>
				</div>
			</div>
		);
	}
}
