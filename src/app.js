// @flow
import config from "kit/config";
// $FlowFixMe
//import reducers from "./reducers"; //eslint-disable-line
import App from "./frontend/App";
import "./styles.global.css";

import { Helmet } from "react-helmet";

//config.addReducer("counter", counterReducer, { count: 0 });
config.enableGraphQLServer();
if (SERVER) {
  config.setCORSOptions({
    credentials: true
  });
  const helmet = Helmet.renderStatic();
  /*
	config.set404Handler(ctx => {
		const stateDump = JSON.stringify(ctx.store.getState());
		ctx.status = 404;
		ctx.body = `This route does not exist on the server - Redux dump: ${stateDump}`;
	});
	config.setErrorHandler((e, ctx) => {
		console.log("Error: ", e.message);
		ctx.body = "Some kind of error. Check your source code.";
	});
	config.getKoaApp(app => {
		app.context.engine = "ReactQL";
		app.on("error", e => {
			console.error("Server error:", e);
		});
   });
   */
} else {
  config.setApolloNetworkOptions({
    credentials: "include"
  });
}
export default App;
