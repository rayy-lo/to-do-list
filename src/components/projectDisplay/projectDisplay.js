import "./projectDisplay.css";
import { Task } from "../../models/task";
import { storeTask } from "../../utils/utils";
import { NEW_TASK } from "../../utils/events";

const attachEventListeners = () => {
  const closeProjectFormBtn = document.querySelector(
    ".task-form > .close-form-btn"
  );
  const addTaskBtn = document.querySelector(".add-task-btn");
  const taskForm = document.querySelector(".task-form");

  taskForm.addEventListener("submit", handleTaskFormSubmit);
  addTaskBtn.addEventListener("click", toggleFormDisplay);
  closeProjectFormBtn.addEventListener("click", toggleFormDisplay);
};

const handleTaskFormSubmit = (e) => {
  e.preventDefault();
  const projectID = document
    .querySelector(".add-task-btn")
    .getAttribute("data-project-id");

  const form = e.target;
  const formData = new FormData(form);

  const taskName = formData.get("task-name");
  const dueDate = formData.get("dueDate");
  const priority = formData.get("priority");
  const description = formData.get("task-description");

  const newTask = Task(taskName, description, dueDate, priority);
  storeTask(projectID, newTask);
  Store.updateState();

  form.reset();
  form.parentElement.classList.toggle("open");

  PubSub.publish(NEW_TASK, newTask);
};

const toggleFormDisplay = (e) => {
  const formID = e.target.getAttribute("aria-controls");
  const form = document.getElementById(formID);

  form.classList.toggle("open");
};

export const renderProjectDisplay = (e) => {
  const projectBtn = e.target.closest(".sidebar-projectName");
  const id = projectBtn.getAttribute("data-project-id");
  const project = getProjectByID(id);
  const displayContainer = document.querySelector("#task-display");

  const markup = `
    <h2 class="project-display-header">${project.projectName}</h2>
    <div class="project-tasks-wrapper">
        ${
          project.tasks.length < 1
            ? `<h3 class="no-project-message">There are currently no tasks for this project. Add one!</h3>`
            : project.tasks.map(
                (task) => `
                  <div class="project-task">
                      ${task.title}
                  </div>
              `
              )
        }
    </div>
    <button data-project-id=${
      project.id
    } aria-controls="task-form-overlay" type="button" class="add-task-btn">
        Add Task
    </button>
  `;
  displayContainer.innerHTML = markup;
  attachEventListeners();
};

const getProjectByID = (id) => {
  const projects = Store.getState();
  const project = projects.find((project) => project.id === id);

  return project;
};
