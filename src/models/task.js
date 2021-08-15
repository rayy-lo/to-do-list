export const Task = (title, description, dueDate, priority, project) => {
  const task = {
    title,
    description,
    dueDate,
    priority,
    project,
  };

  const storeTask = () => {};

  return {
    task,
    storeTask,
  };
};

export const storeTask = (task) => {
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.push(task);
  localStorage.setItem("tasks", JSON.stringify(tasks));
};
