// @flow
import React from "react";
import ExperienceComponent from "../modules/experience/experienceComponent";

export default () => (
	<div>
		<div style={{ backgroundColor: "white" }}>HEADER</div>
		<div
			style={{
				float: "left",
				margin: "auto",
				border: "1px solid green"
			}}>
			LEFT PANEL
		</div>
		<div style={{ float: "right", width: "300px" }}>LOOT!</div>
		<div>CENTER DIV</div>
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
