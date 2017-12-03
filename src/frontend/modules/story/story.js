// @flow
import React from "react";

interface StoryProps {
	items: string[],
}
export default (props: StoryProps) => (
	<div
		width="400px"
		style={{
			width: "400px",
			margin: "auto",
			textAlign: "left",
			textIndent: "15px",
			fontSize: "20px"
		}}>
		{props.items.map(item => <p>{item}</p>)}
	</div>
);
