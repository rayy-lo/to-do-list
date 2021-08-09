import "./addProject.css";

const addProjectForm = document.querySelector(".project-form");
const addProjectBtn = document.querySelector(".add-project-btn");
const closeProjectFormBtn = document.querySelector(
  ".project-form > .close-form-btn"
);

const handleProjectFormSubmit = (e) => {
  e.preventDefault();
  console.log("form submitted");
};

const toggleFormDisplay = (e) => {
  const formID = e.target.getAttribute("aria-controls");
  const form = document.getElementById(formID);

  form.classList.toggle("open");
};

addProjectForm.addEventListener("submit", handleProjectFormSubmit);
addProjectBtn.addEventListener("click", toggleFormDisplay);
closeProjectFormBtn.addEventListener("click", toggleFormDisplay);
