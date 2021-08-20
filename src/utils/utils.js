export const getProjects = () => {
  const projects = JSON.parse(localStorage.getItem("projects"));
  return projects || [];
};

export const storeProject = (project) => {
  const currentProjectList = getProjects();
  const newProjectList = [project, ...currentProjectList];
  localStorage.setItem("projects", JSON.stringify(newProjectList));
};

export const storeTask = (projectID, task) => {
  const currentProjectList = getProjects();
  const projectToStore = currentProjectList.find(
    (project) => project.id === projectID
  );
  projectToStore.tasks.push(task);
  localStorage.setItem("projects", JSON.stringify(currentProjectList));
};
