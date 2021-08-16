import "./addProject.css";
import { NEW_PROJECT } from "../../utils/events";
import { Project } from "../../models/project";
import PubSub from "pubsub-js";
import { storeProject } from "../../utils/utils";

const addProjectForm = document.querySelector(".project-form");
const addProjectBtn = document.querySelector(".add-project-btn");
const closeProjectFormBtn = document.querySelector(
  ".project-form > .close-form-btn"
);

const handleProjectFormSubmit = (e) => {
  e.preventDefault();
  const form = e.target;
  const formData = new FormData(form);
  const newProject = Project(formData.get("project-name"));

  storeProject(newProject);
  Store.updateState();

  form.reset();
  form.parentElement.classList.toggle("open");

  PubSub.publish(NEW_PROJECT, newProject);
};

const toggleFormDisplay = (e) => {
  const formID = e.target.getAttribute("aria-controls");
  const form = document.getElementById(formID);

  form.classList.toggle("open");
};

addProjectForm.addEventListener("submit", handleProjectFormSubmit);
addProjectBtn.addEventListener("click", toggleFormDisplay);
closeProjectFormBtn.addEventListener("click", toggleFormDisplay);
