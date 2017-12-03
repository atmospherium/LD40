// @flow
import React from "react";
import { connect } from "react-redux";
import * as StateActions from "../../reducers/state/stateActions";

import Orb from "./orb";

interface OrbProps {
	dispatch: Function,
	active: boolean,
	progress_normalized: number,
	completions: number,
	text: string,
}
var ticker;
@connect(state => ({
	active: state.game.orb.active,
	level: state.game.ui.experienceVisible
		? state.game.state.experienceLevel
		: "",
	progress_normalized: state.game.orb.progress_normalized,
	completions: state.game.orb.completions
}))
export default class OrbComponent extends React.Component<OrbProps> {
	tick = () => {
		if (!this.props.active) return;
		this.props.dispatch({ type: "ORB_TICK" });
	};
	componentWillMount() {
		ticker = setInterval(() => {
			this.tick();
		}, 1000 / 30);
	}
	componentWillUnmount() {
		clearInterval(ticker);
	}
	componentWillReceiveProps(props: OrbProps) {
		if (props.completions != this.props.completions) {
			this.props.dispatch({
				type: "ORB_COMPLETION",
				value: props.completions
			});
		}
	}
	render(): React$Element<*> {
		return (
			<Orb
				onMouseDown={() => {
					this.props.dispatch({ type: "ORB_MOUSE_DOWN" });
				}}
				onMouseUp={() => {
					this.props.dispatch({ type: "ORB_MOUSE_UP" });
				}}
				progress={this.props.progress_normalized}
				text={this.props.level}/>
		);
	}
}
