// @flow
import React from "react";
import * as d3 from "d3";
import App_style from "../../App.scss";
import Platform from "./platform";
import Lootchest from "./Lootchest";
import baseReducer from "../../reducers";
import { connect } from "react-redux";
import Platform_style from "./platform.scss";

import OrbComponent from "../orb/orbComponent";

const arcPath = d3
	.arc()
	.outerRadius(100)
	.innerRadius(90);
const buttonPath = d3.arc().outerRadius(75);

interface experienceProps {
	completion: number,
	level: number,
	visible: boolean,
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
			<filter
				id="greenglow"
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
			<filter
				id="orangeglow"
				x="-5000%"
				y="-5000%"
				width="10000%"
				height="10000%">
				<feFlood result="flood" floodColor="orange" floodOpacity="1" />
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
		{props.visible ? (
			<Platform completion={props.completion} width="100%" />
		) : (
			""
		)}
	</svg>
);
