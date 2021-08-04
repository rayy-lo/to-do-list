import "normalize.css";
import "./index.css";
import PubSub from "pubsub-js";

import { renderHeader } from "./components/header/header";
import { renderSidebar } from "./components/sidebar/sidebar";

const body = document.querySelector("body");
const main = document.createElement("main");

renderHeader(body);

body.appendChild(main);
renderSidebar(main);

// setup test data on page load
