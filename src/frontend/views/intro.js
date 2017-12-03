// @flow
import React from "react";
import OrbComponent from "../modules/orb/orbIntroComponent";

export default () => (
	<div style={{ textAlign: "center" }}>
		<div style={{ textAlign: "center", margin: "5px" }}>
			<h1 style={{ fontSize: "70px" }}>LOOT!</h1>
			<p />
		</div>
		<div
			width="400px"
			style={{
				width: "400px",
				margin: "auto",
				textAlign: "left",
				textIndent: "15px"
			}}>
			<p>Dearest player,</p>
			<p>
				We value your time. We want this game to be the best experience
				possible.
			</p>
			<p>We have no intention of wasting your time with repetitive tasks.</p>
			<p>
				This game represents the efforts of hundreds of people, not to mention
				the millions of dollars invested in this cause.
			</p>
			<p>
				Before you can play, you must first accept our terms of service. It's
				nothing nefarious, we just own the game and are licensing out your right
				to use it.
			</p>
		</div>
		<div
			style={{
				width: "100%",
				textAlign: "center",
				position: "fixed",
				bottom: "0"
			}}>
			<svg width="100%" height="300px">
				<OrbComponent text="AGREE" />
				{/*<ExperienceComponent />*/}
			</svg>
		</div>
	</div>
);
