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
const buttonPath = d3.arc().outerRadius(75);
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
				<div
					style={{
						width: "100%",
						textAlign: "center",
						position: "fixed",
						bottom: "0"
					}}>
					<svg width="100%" height="300">
						<defs>
							<filter
								id="glow"
								x="-5000%"
								y="-5000%"
								width="10000%"
								height="10000%">
								<feFlood result="flood" floodColor="#00ff00" floodOpacity="1" />
								<feComposite
									in="flood"
									result="mask"
									in2="SourceGraphic"
									operator="in"/>
								<feMorphology
									in="mask"
									result="dilated"
									operator="dilate"
									radius="2"/>
								<feGaussianBlur
									in="dilated"
									result="blurred"
									stdDeviation="5"/>
								<feComposite
									in="blurred"
									in2="SourceGraphic"
									operator="arithmetic"
									k2="1.1"
									k3="-1"
									result="nocombine"/>
								<feMerge>
									<feMergeNode in="nocombine" />
									<feMergeNode in="SourceGraphic" />
								</feMerge>
							</filter>
						</defs>
						<g transform="translate(300,300) rotate(180) scale(3, 1)">
							<path
								fill="rgb(0,255,0)"
								style={{ filter: "url(#glow)" }}
								d={arcPath({
									startAngle: 0.5 * Math.PI,
									endAngle:
										(1 * (this.props.click_count % 100) / 100 + 0.5) * Math.PI
								})}/>
							<path
								fill="rgba(0,255,0,0.02)"
								d={arcPath({
									startAngle: 0.45 * Math.PI, //(this.props.click_count % 100) / 50 * Math.PI,
									endAngle: 1.55 * Math.PI
								})}/>
							<path
								class={App_style.button}
								fill="rgba(0,255,0,0.2)"
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
						</g>
						<g id="shapes" transform="translate(300,300)">
							<path
								class={App_style.button}
								transform="translate(0, -100)"
								fill="rgba(0,255,0,0.5)"
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
						</g>
					</svg>
				</div>
			</div>
		);
	}
}
