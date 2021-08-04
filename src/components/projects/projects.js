import "./projects.css";

const createNewProject = () => {
  console.log("Create new project");
};

const createProjectHeader = () => {
  const addProjectBtn = document.createElement("button");
  addProjectBtn.textContent = "+";
  addProjectBtn.addEventListener("click", createNewProject);
  addProjectBtn.classList.add("add-project-btn");

  const header = document.createElement("h2");
  header.classList.add("project-header");
  header.textContent = "Projects";
  header.appendChild(addProjectBtn);

  return header;
};

export const renderProjectSection = () => {
  const projectWrapper = document.createElement("div");
  projectWrapper.classList.add("todo-projects");

  const header = createProjectHeader();
  projectWrapper.appendChild(header);

  return projectWrapper;
};
