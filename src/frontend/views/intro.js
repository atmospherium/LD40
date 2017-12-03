// @flow
import React from "react";
import IntroOrbComponent from "../modules/orb/orbIntroComponent";
import introText from "./introText";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import "../modules/story/story.scss";

var timer;
interface IntroProps {}
interface IntroState {
	showCount: number,
}
const Fade = ({ children, ...props }) => (
	<CSSTransition {...props} timeout={400} classNames="fade">
		{children}
	</CSSTransition>
);
export default class Intro extends React.Component<IntroProps, IntroState> {
	constructor(props: IntroProps) {
		super(props);
		this.state = { showCount: 0 };
	}
	tick() {
		this.setState(prevState => ({ showCount: prevState.showCount + 1 }));
	}
	componentWillMount() {
		timer = setInterval(() => {
			this.tick();
		}, 3000);
	}
	componentWillUnmount() {
		clearInterval(timer);
	}
	render(): React$Element<*> {
		return (
			<div style={{ textAlign: "center" }}>
				<div style={{ textAlign: "center", margin: "5px" }}>
					<h1 style={{ fontSize: "70px" }}>LOOT!</h1>
				</div>
				<div
					width="400px"
					style={{
						width: "400px",
						margin: "auto",
						textAlign: "left",
						textIndent: "15px"
					}}>
					<TransitionGroup id="storyList">
						{introText.filter((d, i) => this.state.showCount > i).map(text => (
							<Fade key={text}>
								<p>{text}</p>
							</Fade>
						))}
					</TransitionGroup>
				</div>
				<div
					style={{
						width: "100%",
						textAlign: "center",
						position: "fixed",
						bottom: "0"
					}}>
					<svg width="100%" height="300px">
						{this.state.showCount > introText.length ? (
							<Fade key="AGREE">
								<IntroOrbComponent text="AGREE" />
							</Fade>
						) : (
							""
						)}
						{/*<ExperienceComponent />*/}
					</svg>
				</div>
			</div>
		);
	}
}
