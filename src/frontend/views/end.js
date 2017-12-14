// @flow
import React from "react";
import endText from "./endText";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import "../modules/story/story.scss";

var timer;
interface EndProps {}
interface EndState {
	showCount: number,
}
const Fade = ({ children, ...props }) => (
	<CSSTransition {...props} timeout={300} classNames="fade">
		{children}
	</CSSTransition>
);
export default class End extends React.Component<EndProps, EndState> {
	constructor(props: EndProps) {
		super(props);
		this.state = { showCount: 0 };
	}
	tick() {
		this.setState(prevState => ({ showCount: prevState.showCount + 1 }));
	}
	componentWillMount() {
		timer = setInterval(() => {
			this.tick();
		}, 2000);
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
						{endText.filter((d, i) => this.state.showCount > i).map(text => (
							<Fade key={text}>
								<p>{text}</p>
							</Fade>
						))}
					</TransitionGroup>
				</div>
			</div>
		);
	}
}
