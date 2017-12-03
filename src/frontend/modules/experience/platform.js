// @flow
import React from "react";
import * as d3 from "d3";
import App_style from "../../App.scss";
import Lootchest from "./Lootchest";
import Platform_style from "./platform.scss";
const arcPath = d3
	.arc()
	.outerRadius(100)
	.innerRadius(90);
const buttonPath = d3.arc().outerRadius(75);

interface experienceProps {
	completion: number,
	width?: string,
	height?: string,
	className: any,
}
export default (props: experienceProps) => (
	<g transform="translate(0,200)">
		<animateTransform
			attributeName="transform"
			begin="indefinite"
			type="translate"
			from="0 300"
			to="0 200"
			end="0 0"
			dur="1s"/>
		<svg
			width={props.width || 220}
			height={props.height || 100}
			viewBox="0 0 220 100"
			preserveAspectRatio="none">
			<g transform="translate(110,110) rotate(180) scale(1, 1)">
				<path
					d={arcPath({
						startAngle: 0.45 * Math.PI, //(this.props.click_count % 100) / 50 * Math.PI,
						endAngle: 1.55 * Math.PI
					})}/>
				<path
					id="ring"
					style={{ fill: "green" }}
					d={arcPath({
						startAngle: 0.5 * Math.PI,
						endAngle: (props.completion + 0.5) * Math.PI
					})}/>

				<path
					opacity="0.2"
					d={buttonPath({
						startAngle: 0,
						endAngle: 2 * Math.PI
					})}/>
			</g>
		</svg>
	</g>
);
