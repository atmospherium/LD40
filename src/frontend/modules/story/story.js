// @flow
import React from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import "./story.scss";

const Fade = ({ children, ...props }) => (
	<CSSTransition {...props} timeout={400} classNames="fade">
		{children}
	</CSSTransition>
);

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
		<TransitionGroup id="storyList">
			{props.items.map(item => (
				<Fade key={item}>
					<p>{item}</p>
				</Fade>
			))}
		</TransitionGroup>
	</div>
);
