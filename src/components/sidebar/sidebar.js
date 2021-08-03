import "./sidebar.css";

const sidebarButtons = [
  {
    title: "Today",
  },
  {
    title: "Next 7 Days",
  },
];

const createSidebarButtons = (buttonsData) => {
  const buttonsWrapper = document.createElement("div");
  buttonsWrapper.classList.add("sidebar-buttons-wrapper");

  buttonsData.forEach((btnData) => {
    const button = document.createElement("button");
    button.type = "button";
    button.textContent = btnData.title;
    button.classList.add("sidebar-button");
    buttonsWrapper.appendChild(button);
  });

  return buttonsWrapper;
};

export const renderSidebar = (container) => {
  const sidebar = document.createElement("aside");
  sidebar.classList.add("todo-sidebar");

  const buttons = createSidebarButtons(sidebarButtons);

  sidebar.appendChild(buttons);
  container.appendChild(sidebar);
};
