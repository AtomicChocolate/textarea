import "./app.css";
import "./themes.css";
import App from "./App.svelte";

const app = new App({
	target: document.getElementById("app")!,
});

if ("serviceWorker" in navigator) {
	window.addEventListener("load", () => {
		navigator.serviceWorker.register("/sw.js").then(
			(registration) => {
				console.log(
					"ServiceWorker registration successful with scope: ",
					registration.scope
				);
			},
			(err) => {
				console.log("ServiceWorker registration failed: ", err);
			}
		);
	});
}

export default app;
