// @flow
import React from "react";
import * as d3 from "d3";
import App_style from "../../App.scss";
import Platform from "./platform";
import Lootchest from "./Lootchest";
import baseReducer from "../../reducers";
import { connect } from "react-redux";
import Platform_style from "./platform.scss";
const arcPath = d3
	.arc()
	.outerRadius(100)
	.innerRadius(90);
const buttonPath = d3.arc().outerRadius(75);

interface experienceProps {
	click_count: number,
	mouseDown: Function,
	mouseUp: Function,
}
var mouseDown = false;
var brightness = 1;
var timeStep;

export default (props: experienceProps) => (
	<svg
		width="100%"
		height="300"
		className={props.className || Platform_style.default}>
		<defs>
			<filter id="glow" x="-5000%" y="-5000%" width="10000%" height="10000%">
				<feFlood result="flood" floodColor="#00ff00" floodOpacity="1" />
				<feComposite
					in="flood"
					result="mask"
					in2="SourceGraphic"
					operator="in"/>
				<feMorphology in="mask" result="dilated" operator="dilate" radius="2" />
				<feGaussianBlur in="dilated" result="blurred" stdDeviation="5" />
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
		<g transform="translate(0,200)">
			<Platform
				click_count={props.click_count}
				mouseUp={props.mouseUp}
				mouseDown={props.mouseDown}
				width="100%"/>
		</g>
		<svg
			width="100%"
			height="180"
			y={90}
			id="shapes"
			viewBox="0 0 180 180"
			preserveAspectRatio="xMidYMid meet">
			<g transform="translate(90, 90)">
				<path
					opacity="0.5"
					id="orb"
					d={buttonPath({
						startAngle: 0,
						endAngle: 2 * Math.PI
					})}
					onMouseDown={props.mouseDown}
					onMouseUp={props.mouseUp}>
					<animate
						xlinkHref="#orb"
						attributeName="opacity"
						from="0"
						to="0.8"
						dur="1s"
						fill="freeze"/>
				</path>
				<text
					style={{ userFocus: "none", userSelect: "none" }}
					paintOrder="stroke"
					strokeWidth="3"
					fill="black"
					y="5"
					textAnchor="middle"
					fontSize="30px"
					fontWeight="bold"
					pointerEvents="none">
					{Math.floor(props.click_count / 100)}
				</text>
			</g>
		</svg>
	</svg>
);
