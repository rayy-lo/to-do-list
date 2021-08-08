import "normalize.css";
import "./index.css";
import PubSub from "pubsub-js";
import { loadTasks, loadProjects } from "./utils/utils";

loadTasks();
loadProjects();
