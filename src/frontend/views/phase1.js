// @flow
import React from "react";
import ExperienceComponent from "../modules/experience/experienceComponent";
import { definitions as achievements } from "../reducers/achievements";

import OrbComponent from "../modules/orb/orbComponent";

import Achievements from "../modules/achievements";
import StoryComponent from "../modules/story";

import Platform_style from "../modules/experience/platform.scss";

export default () => (
	<div>
		<div style={{ backgroundColor: "white" }}>HEADER</div>

		<div style={{ textAlign: "center", margin: "5px" }}>
			<Achievements />
		</div>
		<div style={{ clear: "both" }} />

		<div
			style={{
				width: "100%",
				textAlign: "center",
				position: "fixed",
				bottom: "0"
			}}>
			<svg width="100%" height="300px" className={Platform_style.default}>
				<ExperienceComponent />

				<OrbComponent />
			</svg>
		</div>
	</div>
);
