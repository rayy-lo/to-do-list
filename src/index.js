import "normalize.css";
import "./index.css";
import "./components/addProject/addProject";
import "./components/projectDisplay/projectDisplay";
import PubSub from "pubsub-js";
import { loadTasks, loadProjects } from "./utils/utils";

loadTasks();
loadProjects();
