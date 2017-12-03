// @flow
import React from "react";
import { connect } from "react-redux";

import Story from "./story";

interface StoryProps {
	items: string[],
}

@connect(state => ({
	items: state.game.story.items
}))
export default class StoryComponent extends React.Component<StoryProps> {
	render(): React$Element<*> {
		return <Story items={this.props.items} />;
	}
}
