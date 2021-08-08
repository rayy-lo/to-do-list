const getTasks = () => {
  const tasks = localStorage.getItem("tasks");
  return tasks;
};

const getTasksByProject = (tasks) => {
  console.log(tasks);
  const projects = {};
  for (let task in tasks) {
    projects[task] ? projects[task].push(task) : (projects[task] = []);
  }

  console.log(projects);
};

const getTasksByDate = () => {
  console.log("return filtered tasks by date");
};

export const loadProjects = () => {
  const tasks = JSON.parse(getTasks());
  const projects = getTasksByProject(tasks);
};

export const loadTasks = () => {
  console.log("render tasks into display");
};
