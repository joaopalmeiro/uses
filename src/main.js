// https://github.com/elad2412/the-new-css-reset#npm-and-how-to-use
import App from "./App.svelte";
import "the-new-css-reset/css/reset.css";
import "virtual:windi.css";

const app = new App({
  target: document.getElementById("app"),
});

export default app;
