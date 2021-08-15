export const Project = (projectName) => {
  const project = {
    projectName,
    tasks: [],
  };

  const storeProject = () => {
    const currentProjects = Store.getState();
    const newProjects = [];
  };

  return {
    project,
    storeProject,
  };
};

// export const storeProject
