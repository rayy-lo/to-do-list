export const Project = (projectName, tasks = []) => {
  const project = {
    projectName,
    tasks,
  };

  const generateID = () => {
    return Math.random().toString(16).slice(2);
  };

  project.id = generateID();

  return project;
};
