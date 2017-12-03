// @flow
import React from "react";
import * as d3 from "d3";

interface OrbProps {
	onMouseDown: Function,
	onMouseUp: Function,
	progress: number,
}
const arcPath = d3
	.arc()
	.outerRadius(90)
	.innerRadius(80);
const buttonPath = d3.arc().outerRadius(70);
export default (props: OrbProps) => (
	<svg
		width="100%"
		height="180"
		y={90}
		id="shapes"
		viewBox="0 0 200 200"
		preserveAspectRatio="xMidYMid meet">
		<g transform="translate(100, 100)">
			<path
				d={arcPath({
					startAngle: 0,
					endAngle: 2 * Math.PI
				})}/>
			<path
				style={{ stroke: "2px black", fill: "rgba(0,255,0,0.5)" }}
				d={arcPath({
					startAngle: 0,
					endAngle: props.progress * 2 * Math.PI
				})}/>
			<path
				opacity="0.5"
				id="orb"
				d={buttonPath({
					startAngle: 0,
					endAngle: 2 * Math.PI
				})}
				onMouseDown={props.onMouseDown}
				onMouseUp={props.onMouseUp}>
				<animate
					xlinkHref="#orb"
					attributeName="opacity"
					from="0"
					to="0.8"
					dur="1s"
					fill="freeze"/>
			</path>
		</g>
	</svg>
);
