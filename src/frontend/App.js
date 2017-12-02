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
	view: state.game.ui.view
}))
export default class App extends React.Component<AppProps> {
	currentDisplay(): React$Element<*> {
		if (this.props.view == "intro") {
			return <Intro />;
		} else {
			return <Phase1 />;
		}
	}
	render(): React$Element<*> {
		return <div>{this.currentDisplay()}</div>;
	}
}
