// @flow
import React from "react";
import { connect } from "react-redux";
import * as StateActions from "../../reducers/state/stateActions";

import Orb from "./orb";

interface OrbProps {
	dispatch: Function,
	speed: number,
}
@connect(state => ({
	experience: state.game.state.experience,
	level: state.game.state.experienceLevel,
	upperBound: state.game.state.upperBound,
	lowerBound: state.game.state.lowerBound,
	speed: state.game.state.speed
}))
export default class OrbComponent extends React.Component<OrbProps> {
	render(): React$Element<*> {
		return (
			<Orb
				onMouseDown={() => {
					this.props.dispatch({ type: "ORB_MOUSE_DOWN" });
				}}
				onMouseUp={() => {
					this.props.dispatch({ type: "ORB_MOUSE_UP" });
				}}/>
		);
	}
}
