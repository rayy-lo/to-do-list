export const getProjects = () => {
  const projects = JSON.parse(localStorage.getItem("projects"));
  return projects || [];
};

export const storeProject = (project) => {
  const currentProjectList = getProjects();
  const newProjectList = [project, ...currentProjectList];
  localStorage.setItem("projects", JSON.stringify(newProjectList));
};

export const deleteProject = (projectID) => {
  const projectList = getProjects();
  const newList = projectList.filter((project) => project.id !== projectID);
  localStorage.setItem("projects", JSON.stringify(newList));
};

export const storeTask = (projectID, task) => {
  const currentProjectList = getProjects();
  const projectToStore = currentProjectList.find(
    (project) => project.id === projectID
  );
  projectToStore.tasks.push(task);
  localStorage.setItem("projects", JSON.stringify(currentProjectList));
};

export const getProjectByID = (id) => {
  const projects = Store.getState();
  const project = projects.find((project) => project.id === id);

  return project;
};

export const deleteTaskFromStorage = (projectID, taskID) => {
  const projectList = getProjects();

  for (let project of projectList) {
    if (project.id == projectID) {
      project.tasks = project.tasks.filter((task) => task.id !== taskID);
    }
  }

  localStorage.setItem("projects", JSON.stringify(projectList));
};
