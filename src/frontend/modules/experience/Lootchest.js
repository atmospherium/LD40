// @flow
import React from "react";
export default (props: any) => (
	<svg
		style={{ backgroundBlendMode: "multiply" }}
		width="300px"
		height="300px"
		x="200"
		viewBox="0 0  1610 880"
		preserveAspectRatio="xMidYMid meet">
		<defs>
			<filter
				id="f_multiply"
				filterUnits="objectBoundingBox"
				x="0%"
				y="0%"
				width="100%"
				height="100%">
				<feBlend in="SourceGraphic" mode="multiply" />
				<feBlend in="SourceGraphic" mode="multiply" />
			</filter>
		</defs>
		<rect
			id="svgEditorBackground"
			x="0"
			y="0"
			width="1610"
			height="880"
			filter="url(#f_multiply)"
			style={{ fill: "none", stroke: "none" }}/>
		<rect
			x="311"
			y="297"
			style={{ fill: "silver", stroke: "black", strokeWidth: "1px" }}
			id="e2_rectangle"
			width="553"
			filter="url(#f_multiply)"
			height="304"/>
		<polygon
			style={{ stroke: "black", fill: "white", strokeWidth: "1px" }}
			id="e3_polygon"
			filter="url(#f_multiply)"
			points="310 297 418 220 963 210 861 298"/>
		<polygon
			style={{ stroke: "black", fill: "white", strokeWidth: "1px" }}
			id="e4_polygon"
			filter="url(#f_multiply)"
			points="962 211 967 554 968 557 863 601 864 296"/>
		<polygon
			style={{ stroke: "black", fill: "gray", strokeWidth: "1px" }}
			id="e5_polygon"
			filter="url(#f_multiply)"
			points="420 231 921 222 852 284 343 284"/>
	</svg>
);
