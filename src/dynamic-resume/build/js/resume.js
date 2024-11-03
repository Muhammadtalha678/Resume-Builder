"use strict";
const toggleButtons = document.querySelectorAll('.hide-button');
for (const toggleButton of toggleButtons) {
    toggleButton.addEventListener('click', function () {
        const parentElement = this.parentElement;
        const nextSiblingElement = parentElement.nextElementSibling;
        if (window.getComputedStyle(nextSiblingElement).display === 'block') {
            nextSiblingElement.style.display = 'none';
            this.innerText = 'Show';
        }
        else {
            nextSiblingElement.style.display = 'block';
            this.innerText = 'Hide';
        }
    });
}
let cvData = JSON.parse(localStorage.getItem('Cv'));
//set image
const profileImage = document.querySelector('.profile-info img');
profileImage.src = cvData.imageUrl;
//set Name
const profileName = document.querySelector('.profile-info div');
profileName.innerText = cvData.name;
//set Email github linkedin and phone
const rightSideHeaderData = document.querySelector('.contact-info ul');
rightSideHeaderData.innerHTML += `
    <li><b>Email: <i>${cvData.email}</i></b></li>
`;
if (cvData.github) {
    rightSideHeaderData.innerHTML += `
        <li><b>GitHub: <i><a target="_blank" style="text-decoration: none; color: #007bff;" href="${cvData.github}">${cvData.github}</a></i></b></li>
    `;
}
if (cvData.linkedin) {
    rightSideHeaderData.innerHTML += `
        <li><b>Linkedin: <i><a target="_blank" style="text-decoration: none; color: #007bff;" href="${cvData.linkedin}">${cvData.linkedin}</a></i></b></li>
    `;
}
rightSideHeaderData.innerHTML += `
    <li><b>Contact: <i>${cvData.phone}</i></b></li>
`;
//profile summary
const profileSummary = document.querySelector('.profile-summary div p');
profileSummary.innerText = cvData.profileSummary;
//Education 
cvData.educationDetails.forEach((object) => {
    const profileEducation = document.querySelector('.education div');
    profileEducation.innerHTML += `
    <p><strong>${object.title}</strong><br>
    ${object.institution}, ${object.duration}</p>
 `;
});
//Certification 
const profileCertification = document.querySelector('.certificate div');
if (typeof cvData.certficationDetails == 'string') {
    console.log(typeof cvData.certficationDetails);
    profileCertification.innerHTML += `
        <p><strong>${cvData.certficationDetails}</strong></p>    
    `;
}
else {
    cvData.certficationDetails.forEach((object) => {
        profileCertification.innerHTML += `
        <p><strong>${object.title}</strong><br>
        ${object.issuer} <br>
        <span style="font-weight: 500;">${object.date}</span>
        </p>
     `;
    });
}
//Experience 
const profileExperience = document.querySelector('.experience div');
if (typeof cvData.experienceDetails == 'string') {
    // console.log(typeof cvData.certficationDetails);
    profileExperience.innerHTML += `
        <p><strong>${cvData.experienceDetails}</strong></p>    
    `;
}
else {
    cvData.experienceDetails.forEach((object) => {
        profileExperience.innerHTML += `
        <p><strong>${object.job}</strong><br>
        ${object.company} <br>
        <span style="font-weight: 500;">${object.durtion}</span>
        </p>
     `;
    });
}
//skills
const profileSkills = document.querySelector('.skills div ul');
const skillArray = cvData.skill.split(',');
skillArray.forEach((skill) => {
    profileSkills.innerHTML += `
    <li>${skill}</li>
    `;
});
function createNewCv() {
    localStorage.removeItem('Cv');
    const resumeHtml = document.querySelectorAll('.resume');
    resumeHtml.forEach((e, key) => {
        // console.log(e);
        if (key == 0) {
            e.remove();
        }
        if (key == 2) {
            e.remove();
        }
        e.style.display = 'none';
        // e.remove()
    });
    // make resume Builder block after submit
    const makeResumeBuilderBlock = document.querySelector('.builder-form');
    makeResumeBuilderBlock.style.display = 'block';
    // create link for css for a resume to add link in head and script in body
    const headLinkResumeBuilder = document.createElement('link');
    headLinkResumeBuilder.rel = "stylesheet";
    headLinkResumeBuilder.href = "./build/css/style.css";
    headLinkResumeBuilder.classList.add('builder-form');
    const getHeadForResumeBuilder = document.querySelector('head');
    getHeadForResumeBuilder.append(headLinkResumeBuilder);
    console.log("rrrrrrr");
    // script resume builder
    const scriptLinkResumeBuilder = document.createElement('script');
    scriptLinkResumeBuilder.src = "./build/js/app.js";
    scriptLinkResumeBuilder.classList.add('builder-form');
    const getBodyForResumeBuilder = document.querySelector('body');
    getBodyForResumeBuilder.append(scriptLinkResumeBuilder);
}
