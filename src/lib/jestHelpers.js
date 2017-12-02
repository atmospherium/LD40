// @flow
import React from "react";
import { StaticRouter } from "react-router";
export var staticRouterWrapped = (
	component: React$Element<*>
): React$Element<*> => {
	return <StaticRouter context={{}}>{component}</StaticRouter>;
};
