import "normalize.css";
import "./index.css";
import PubSub from "pubsub-js";

import { renderHeader } from "./components/header/header";
import { renderSidebar } from "./components/sidebar/sidebar";

const body = document.querySelector("body");
renderHeader(body);
renderSidebar(body);
