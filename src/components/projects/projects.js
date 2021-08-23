import "./projects.css";
import RightArrowIcon from "./right-arrow.png";
import { NEW_PROJECT, NEW_TASK, REMOVE_TASK } from "../../utils/events";
import { renderProjectDisplay } from "../projectDisplay/projectDisplay";

const container = document.querySelector(".projects-section");

const attachEventListeners = () => {
  const projectHeaders = document.querySelectorAll(".sidebar-projectName");
  projectHeaders.forEach((btn) => {
    btn.addEventListener("click", renderProjectDisplay);
    btn.addEventListener("click", toggleProjectTasks);
  });
};

const toggleProjectTasks = (e) => {
  if (e.target.tagName != "BUTTON") return;
  const menuId = e.target.getAttribute("aria-controls");
  const menu = document.querySelector(`#${menuId}`);

  menu.classList.toggle("expanded");
};

export const renderProjectSection = () => {
  const data = Store.getState();

  const markup = `
    ${data
      .map(
        (project) =>
          `
        <div class="sidebar-project">
          <button data-project-id=${project.id} aria-controls="${
            project.projectName
          }-tasks" type="button" class="sidebar-projectName">
              <img class="right-carat" src=${RightArrowIcon}>
              <p>
                  ${project.projectName}
                  <span class="task-amount">${project.tasks.length}</span>
              </p>
          </button>
          <div aria-expanded="true" id="${
            project.projectName
          }-tasks" class="sidebar-tasks expanded">
            ${project.tasks
              .map(
                (task) => `
                <div class="sidebar-task">${task.title}</div>
              `
              )
              .join("")}
          </div>
        </div>
        `
      )
      .join("")}
`;
  container.innerHTML = markup;
  attachEventListeners();
};

PubSub.subscribe(NEW_PROJECT, renderProjectSection);
PubSub.subscribe(NEW_TASK, renderProjectSection);
PubSub.subscribe(REMOVE_TASK, renderProjectSection);
