export const getProjects = () => {
  const projects = JSON.parse(localStorage.getItem("projects"));
  return projects;
};

const getTasksByProject = (tasks) => {
  console.log(tasks);
  const projects = {};
  for (let task in tasks) {
    projects[task] ? projects[task].push(task) : (projects[task] = []);
  }

  console.log(projects);
};
