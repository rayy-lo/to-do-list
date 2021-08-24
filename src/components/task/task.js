import "./task.css";
import { NEW_TASK, REMOVE_TASK } from "../../utils/events";
import { getProjectByID, deleteTaskFromStorage } from "../../utils/utils";

const deleteTask = (e) => {
  const task = e.target.closest(".task");
  const projectId = task.getAttribute("data-project-id");
  const taskId = task.getAttribute("data-task-id");

  deleteTaskFromStorage(projectId, taskId);
  Store.updateState();
  PubSub.publish(REMOVE_TASK, projectId);
};

const attachEventListeners = () => {
  const closeBtn = document.querySelectorAll(".task-close");
  closeBtn.forEach((btn) => btn.addEventListener("click", deleteTask));
};

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
        <div data-project-id=${project.id} data-task-id=${task.id} class="task">
            <div class="task-top-half">
                <span class="priority-circle ${task.priority}"></span>
                <div class="task-info">
                    <div>
                        <span class="task-title">${task.title}</span>
                        <p class="task-description">${task.description}</p>
                    </div>
                    <div class="close-btn-wrapper">
                      <button class="task-close">
                        &#x2715
                      </button>
                      <span class="task-date">${task.dueDate}</span>
                    </div>
                </div>
            </div>
        </div>
        `
            )
            .join("")
    }
    `;

  taskContainer.innerHTML = markup;
  attachEventListeners();
};

PubSub.subscribe(NEW_TASK, function (msg, data) {
  renderProjectTasks(data);
});

PubSub.subscribe(REMOVE_TASK, function (msg, id) {
  renderProjectTasks(id);
});
