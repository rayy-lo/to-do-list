import "./header.css";
import Logo from "./top-logo.svg";

export const renderHeader = (container) => {
  const logoIcon = new Image();
  logoIcon.src = Logo;
  logoIcon.classList.add("todo-logo");

  const header = document.createElement("header");
  header.classList.add("todo-header");
  header.appendChild(logoIcon);

  container.appendChild(header);
};
