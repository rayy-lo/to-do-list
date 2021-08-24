export const Task = (title, description, dueDate, priority, project) => {
  const task = {
    title,
    description,
    dueDate,
    priority,
    project,
  };

  const generateID = () => {
    return Math.random().toString(16).slice(2);
  };

  task.id = generateID();

  return task;
};
