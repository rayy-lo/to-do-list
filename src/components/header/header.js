import "./header.css";
import Logo from "./top-logo.svg";

const body = document.querySelector("body");

const logoIcon = new Image();
logoIcon.src = Logo;
logoIcon.classList.add("todo-logo");

const header = document.createElement("header");
header.classList.add("todo-header");
header.appendChild(logoIcon);

body.appendChild(header);
