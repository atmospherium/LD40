// @flow
import React from "react";
import * as d3 from "d3";
import App_style from "../../App.scss";
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
export default (props: experienceProps) => (
	<svg width="100%" height="300">
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
		<g transform="translate(300,300) rotate(180) scale(3, 1)">
			<path
				fill="rgb(0,255,0)"
				style={{ filter: "url(#glow)" }}
				d={arcPath({
					startAngle: 0.5 * Math.PI,
					endAngle: (1 * (props.click_count % 100) / 100 + 0.5) * Math.PI
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
				onMouseDown={props.mouseDown}
				onMouseUp={props.mouseUp}/>
		</g>
		<g id="shapes" transform="translate(300,200)">
			<path
				transform="translate(0, 0)"
				fill="rgba(0,5,0,0.95)"
				d={buttonPath({
					startAngle: 0,
					endAngle: 2 * Math.PI
				})}
				onMouseDown={props.mouseDown}
				onMouseUp={props.mouseUp}/>
			<text
				style={{ userFocus: "none", userSelect: "none" }}
				stroke="green"
				paintOrder="stroke"
				strokeWidth="3"
				fill="black"
				textAnchor="middle"
				fontSize="30px"
				fontWeight="bold"
				pointerEvents="none">
				{Math.floor(props.click_count / 100)}
			</text>
		</g>
	</svg>
);
