import "./task.css";
import { NEW_TASK } from "../../utils/events";
import { getProjectByID } from "../../utils/utils";

export const renderProjectTasks = (id) => {
  const project = getProjectByID(id);
  const taskContainer = document.querySelector(".project-tasks-wrapper");

  const markup = `
    ${
      project.tasks.length < 1
        ? `<h3 class="no-project-message">There are currently no tasks for this project. Add one!</h3>`
        : project.tasks
            .map(
              (task) =>
                `
        <div class="task">
            <div class="task-top-half">
                <span class="priority-circle ${task.priority}"></span>
                <div class="task-info">
                    <div>
                        <span class="task-title">${task.title}</span>
                        <p class="task-description">${task.description}</p>
                    </div>                    
                    <span class="task-date">${task.dueDate}</span>
                </div>
            </div>
        </div>
        `
            )
            .join("")
    }
    `;

  taskContainer.innerHTML = markup;
};

PubSub.subscribe(NEW_TASK, function (msg, data) {
  renderProjectTasks(data);
});
