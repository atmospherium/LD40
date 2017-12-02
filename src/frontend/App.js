// @flow
import * as React from "react";
import App_style from "./App.scss";
import { connect } from "react-redux";

import reducers from "./reducers";

import Intro from "./views/intro";
import Phase1 from "./views/phase1";

interface AppProps {
	uiState: number,
	dispatch: Function,
}

var brightness = 1;
var timeStep;
var mouseDown = false;

@connect(state => ({
	uiState: state.stats.clicks
}))
export default class App extends React.Component<AppProps> {
	currentDisplay(): React$Element<*> {
		if (this.props.uiState >= 0) {
			return <Phase1 />;
		} else {
			return <Intro />;
		}
	}
	render(): React$Element<*> {
		return <div>{this.currentDisplay()}</div>;
	}
}
