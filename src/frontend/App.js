// @flow
import * as React from "react";
//import App_style from "./App.scss";
import { connect } from "react-redux";
import baseReducer from "./reducers/base";

interface AppProps {
	click_count: number,
	dispatch: Function,
}

@connect(state => ({
	click_count: state.click.count
}))
export default class App extends React.Component<AppProps> {
	constructor(props: AppProps) {
		super(props);
	}
	componentWillMount() {}
	render(): React$Element<*> {
		return (
			<div>
				<a
					onClick={() => {
						this.props.dispatch({ type: "CLICK_ACTION", value: 1 });
					}}>
					Click {this.props.click_count}
				</a>
				<div>this is the app!</div>
			</div>
		);
	}
}
