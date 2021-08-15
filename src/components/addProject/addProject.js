import "./addProject.css";
import { getProjects } from "../../utils/utils";
import { NEW_PROJECT } from "../../utils/events";
import { Project } from "../../models/project";
import PubSub from "pubsub-js";

const addProjectForm = document.querySelector(".project-form");
const addProjectBtn = document.querySelector(".add-project-btn");
const closeProjectFormBtn = document.querySelector(
  ".project-form > .close-form-btn"
);

const handleProjectFormSubmit = (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  const data = Object.fromEntries(formData);

  PubSub.publish(NEW_PROJECT, data);
};

const toggleFormDisplay = (e) => {
  const formID = e.target.getAttribute("aria-controls");
  const form = document.getElementById(formID);

  form.classList.toggle("open");
};

addProjectForm.addEventListener("submit", handleProjectFormSubmit);
addProjectBtn.addEventListener("click", toggleFormDisplay);
closeProjectFormBtn.addEventListener("click", toggleFormDisplay);
