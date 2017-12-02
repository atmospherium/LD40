// @flow
import React from "react";
import ExperienceComponent from "../modules/experience/experienceComponent";
import { definitions as achievements } from "../reducers/achievements";

import Achievements from "../modules/achievements";

export default () => (
	<div>
		<div style={{ backgroundColor: "white" }}>HEADER</div>
		<div
			style={{
				float: "left",
				margin: "auto",
				border: "1px solid green",
				width: "300px",
				margin: "5px",
				textAlign: "center"
			}}>
			<h2>Equipment</h2>
		</div>
		<div
			style={{
				float: "right",
				textAlign: "center",
				width: "300px",
				margin: "5px",
				border: "1px solid green"
			}}>
			<Achievements />
		</div>
		<div style={{ textAlign: "center", margin: "5px" }}>
			<h1>LOOT!</h1>
			<p />
		</div>
		<div style={{ clear: "both" }} />

		<div
			style={{
				width: "100%",
				textAlign: "center",
				position: "fixed",
				bottom: "0"
			}}>
			<ExperienceComponent />
		</div>
	</div>
);
