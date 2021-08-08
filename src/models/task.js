export const taskFactory = (title, description, dueDate, priority, project) => {
  return { title, description, dueDate, priority, project };
};

export const storeTask = (task) => {
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.push(task);
  localStorage.setItem("tasks", JSON.stringify(tasks));
};
