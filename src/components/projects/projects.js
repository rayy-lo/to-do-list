import "./projects.css";
import RightArrowIcon from "./right-arrow.png";
import { getProjects } from "../../utils/utils";
import { NEW_PROJECT } from "../../utils/events";

const container = document.querySelector(".projects-section");

export const renderProjectSection = () => {
  const data = Store.getState();

  const markup = `
    ${data
      .map(
        (project) =>
          `
        <div class="sidebar-project">
          <button aria-controls="${project.projectName}-tasks" type="button" class="sidebar-projectName">
              <img class="right-carat" src=${RightArrowIcon}>
              <p>
                  ${project.projectName}
                  <span>${project.tasks.length}</span>
              </p>
          </button>
          <div id="${project.projectName}-tasks" class="sidebar-tasks">
            
          </div>
        </div>
        `
      )
      .join("")}
`;

  container.innerHTML = markup;
};

PubSub.subscribe(NEW_PROJECT, renderProjectSection);
