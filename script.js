const rep1btn = document.getElementById("Project1")
const rep2btn = document.getElementById("Project2")
const linkedinbtn = document.getElementById("linkedin")
const githubbtn = document.getElementById("github")

if (rep1btn) {
rep1btn.addEventListener("click", openrep1)
}

if (rep2btn) {
rep2btn.addEventListener("click", openrep2) 
}

if (linkedinbtn) {
linkedinbtn.addEventListener("click", openlinkedin)
}

if (githubbtn) {
githubbtn.addEventListener("click", opengithub) 
}

function openrep1(){
window.location = "https://github.com/TechniekCollegeRotterdam/project-p1-ouderavond-groepsnaam41";
}

function openrep2(){
window.location = "https://github.com/Bilal0103/Project-periode2--Maatschappelijke-dimensie";
}

function openlinkedin(){
window.location = "https://www.linkedin.com/in/djano-van-eijk-771b902a0/";
}

function opengithub(){
window.location = "https://github.com/DjanoVanEijk";
}