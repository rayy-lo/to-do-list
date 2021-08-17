import "./projectDisplay.css";

const attachEventListeners = () => {
  const addTaskBtn = document.querySelector(".add-task-btn");
  addTaskBtn.addEventListener("click", toggleFormDisplay);
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
    <button type="button" class="add-task-btn">
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
