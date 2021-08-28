import "./projectDisplay.css";
import { Task } from "../../models/task";
import { getProjectByID, storeTask, deleteProject } from "../../utils/utils";
import { renderProjectTasks } from "../task/task";
import { NEW_TASK, REMOVE_PROJECT } from "../../utils/events";

const attachEventListeners = () => {
  const closeProjectFormBtn = document.querySelector(
    ".task-form > .close-form-btn"
  );
  const addTaskBtn = document.querySelector(".add-task-btn");
  const taskForm = document.querySelector(".task-form");
  const deleteProjectBtn = document.querySelector(".del-project-btn");

  deleteProjectBtn.addEventListener("click", handleProjectDelete);
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

  PubSub.publish(NEW_TASK, projectID);
};

const handleProjectDelete = (e) => {
  const id = e.target.getAttribute("data-project-id");
  deleteProject(id);

  PubSub.publish(REMOVE_PROJECT, id);
  Store.updateState();

  document.querySelector("#task-display").innerHTML = "";
};

const toggleFormDisplay = (e) => {
  const formID = e.target.getAttribute("aria-controls");
  const form = document.getElementById(formID);

  form.classList.toggle("open");
};

export const renderProjectDisplay = (id) => {
  const project = getProjectByID(id);
  const displayContainer = document.querySelector("#task-display");

  const markup = `
    ${`<h2 class="project-display-header">${project.projectName}</h2>
      <div class="project-tasks-wrapper"></div>
      <button data-project-id=${project.id} aria-controls="task-form-overlay" type="button" class="add-task-btn">
          Add Task
      </button>`}
      <button data-project-id=${
        project.id
      } type="button" class="del-project-btn">
        Delete Project
      </button>
  `;

  displayContainer.innerHTML = markup;
  attachEventListeners();
  renderProjectTasks(id);
};
