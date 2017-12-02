// @flow
import * as React from "react";
import App_style from "./App.scss";
import { connect } from "react-redux";
import baseReducer from "./reducers/base";
import * as d3 from "d3";

interface AppProps {
	click_count: number,
	dispatch: Function,
}

const arcPath = d3
	.arc()
	.outerRadius(100)
	.innerRadius(90);
const buttonPath = d3.arc().outerRadius(80);
var timeStep;
var mouseDown = false;
@connect(state => {
	return {
		click_count: state.click.click_count
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
				<a
					onClick={() => {
						this.props.dispatch({ type: "CLICK_ACTION", value: 1 });
					}}>
					Click {this.props.click_count}
				</a>
				<div>this is the app!</div>
				<progress value={this.props.click_count % 100} max={100} />
				{Math.floor(this.props.click_count / 100)}

				{this.props.click_count > 1000 ? (
					<div> UNLOCKED </div>
				) : (
					<div>LOCKED</div>
				)}
				<svg width="700" height="700">
					<rect width="100%" height="100%" fill="gray" />
					<path
						transform="translate(100,100)"
						fill="red"
						d={arcPath({
							startAngle: 0,
							endAngle: (this.props.click_count % 100) / 50 * Math.PI
						})}/>
					<path
						transform="translate(100,100)"
						fill="orange"
						d={arcPath({
							startAngle: (this.props.click_count % 100) / 50 * Math.PI,
							endAngle: 2 * Math.PI
						})}/>
					<path
						transform="translate(100,100)"
						fill="orange"
						d={buttonPath({
							startAngle: 0,
							endAngle: 2 * Math.PI
						})}
						onMouseDown={() => {
							mouseDown = true;
						}}
						onMouseUp={() => {
							mouseDown = false;
						}}/>
				</svg>
			</div>
		);
	}
}
