import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";

ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById("root")
);

serviceWorkerRegistration.register();

if ("serviceWorker" in navigator) {
	window.addEventListener("load", function () {
		serviceWorkerRegistration.register();
	});
}
