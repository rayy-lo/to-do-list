export const Project = (projectName, tasks = []) => {
  const project = {
    projectName,
    tasks,
  };

  return project;
};
