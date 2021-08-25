import "normalize.css";
import "./index.css";
import "./components/addProject/addProject";
import "./components/projectDisplay/projectDisplay";
import "./components/projects/projects";

import { getProjects } from "./utils/utils";
import { createStore } from "./store/store";
import { renderProjectSection } from "./components/projects/projects";
import { renderProjectDisplay } from "./components/projectDisplay/projectDisplay";

const projects = getProjects();
window.Store = createStore(projects);
renderProjectSection();

if (projects.length > 0) {
  renderProjectDisplay(projects[0].id);
}
