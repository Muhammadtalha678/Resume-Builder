"use strict";
if (JSON.parse(localStorage.getItem('Cv'))) {
    // console.log('hasData');
    const resumeBuilderHtml = document.querySelectorAll('.builder-form');
    resumeBuilderHtml.forEach((e, key) => {
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
    // make resume block after submit
    const resume = document.querySelector('.resume');
    resume.style.display = 'block';
    // create link for css for a resume to add link in head and script in body
    const headLink = document.createElement('link');
    headLink.rel = "stylesheet";
    headLink.href = "./build/css/resume.css";
    headLink.classList.add('resume');
    const getHeadForResume = document.querySelector('head');
    getHeadForResume.append(headLink);
    const scriptLink = document.createElement('script');
    scriptLink.src = "./build/js/resume.js";
    scriptLink.classList.add('resume');
    const getBodyForResume = document.querySelector('body');
    getBodyForResume.append(scriptLink);
}
//add more education functionality
const addEducation = () => {
    const educationSection = document.querySelectorAll('#educationInputs');
    const getLastEduInputs = educationSection[educationSection.length - 1];
    const educationTitle = getLastEduInputs.querySelector('#educationTitle');
    const educationInstitution = getLastEduInputs.querySelector('#institution');
    const educationDuration = getLastEduInputs.querySelector('#educationDuration');
    if (!educationTitle.value.trim() || !educationInstitution.value.trim() || !educationDuration.value.trim()) {
        alert('Please fill all field in the current education section before adding more.');
        return;
    }
    const eductionDiv = document.querySelector('#educationSection');
    const createEle = document.createElement('div');
    createEle.classList.add('educationSection');
    createEle.id = 'educationInputs';
    createEle.innerHTML += `
        <h2>Add More Education
            <button class='cross-button' onclick="removeSect(this)">X</button>    
        </h2>
        <input type="text" id="educationTitle" placeholder="Education Title" required />
        <input type="text" id="institution" placeholder="Institution" required />
        <input type="text" id="educationDuration" placeholder="Duration" required />
        `;
    const lastchild = eductionDiv.lastElementChild;
    eductionDiv.insertBefore(createEle, lastchild);
};
//show fields on the basis of yes or no certfications
const certificateInputs = (haveCertificate) => {
    const getbuttons = document.querySelector('.certificate-buttons');
    if (haveCertificate == 'yes') {
        getbuttons.style.display = 'none';
        const certicateInputs = document.querySelector('#certificationInputs');
        certicateInputs.style.display = 'block';
        const certicateButton = document.querySelector('.certificate');
        certicateButton.style.display = 'block';
    }
    else {
        const getPara = document.querySelector('#noCertification');
        getPara.style.display = 'block';
        getbuttons.style.display = 'none';
    }
};
// add inputs of certification sections 
const addCerticate = () => {
    const certificationInputs = document.querySelectorAll('#certificationInputs');
    const getLastCertInputs = certificationInputs[certificationInputs.length - 1];
    const certificationTitle = getLastCertInputs.querySelector('.certificationTitle');
    const certificationIssuer = getLastCertInputs.querySelector('.certificationIssuer');
    const certificationDate = getLastCertInputs.querySelector('.certificationDate');
    if (!certificationTitle.value.trim() || !certificationIssuer.value.trim() || !certificationDate.value.trim()) {
        alert('Please fill all field in the current certificate section before adding more.');
        return;
    }
    const certificationSection = document.querySelector('#certificationSection');
    const createEle = document.createElement('div');
    createEle.classList.add('certification-inputs');
    createEle.id = 'certificationInputs';
    createEle.style.display = 'block';
    createEle.innerHTML += `
    <h2>Add More Certifications
     <button class='cross-button' onclick="removeSect(this)">X</button>
     </h2>
    <input type="text" class="certificationTitle" placeholder="Certification Title" required />
    <input type="text" class="certificationIssuer" placeholder="Issuer" required />
    <input type="text" class="certificationDate" placeholder="Date Obtained" required />
    `;
    const lastchild = certificationSection.lastElementChild;
    certificationSection.insertBefore(createEle, lastchild);
};
// experience section functionality
const experienceInputs = (haveExperience) => {
    const getbuttons = document.querySelector('.experience-buttons');
    if (haveExperience == 'yes') {
        getbuttons.style.display = 'none';
        const experienceInputs = document.querySelector('#experienceInputs');
        experienceInputs.style.display = 'block';
        const experienceButton = document.querySelector('.experience');
        experienceButton.style.display = 'block';
    }
    else {
        const getPara = document.querySelector('#noExperience');
        getPara.style.display = 'block';
        getbuttons.style.display = 'none';
    }
};
const addExperience = () => {
    const experienceInputs = document.querySelectorAll('#experienceInputs');
    const getLastExpInputs = experienceInputs[experienceInputs.length - 1];
    const experienceTitle = getLastExpInputs.querySelector('.experienceTitle');
    const experienceCompany = getLastExpInputs.querySelector('.experienceCompany');
    const experienceYear = getLastExpInputs.querySelector('.experienceYear');
    if (!experienceTitle.value.trim() || !experienceCompany.value.trim() || !experienceYear.value.trim()) {
        alert('Please fill all field in the current experience section before adding more.');
        return;
    }
    const experienceSection = document.querySelector('#experienceSection');
    const createEle = document.createElement('div');
    createEle.classList.add('experience-inputs');
    createEle.id = 'experienceInputs';
    createEle.style.display = 'block';
    createEle.innerHTML += `
    <h2>Add More Experience
        <button class='cross-button' onclick="removeSect(this)">X</button></h2>
    <input type="text" class="experienceTitle" placeholder="Experience Title" required />
    <input type="text" class="experienceCompany" placeholder="Experience Company" required />
    <input type="text" class="experienceYear" placeholder="Experience year" required />
    `;
    const lastchild = experienceSection.lastElementChild;
    experienceSection.insertBefore(createEle, lastchild);
};
//remove more section functionality
const removeSect = (button) => {
    const parenetElement = button.parentNode;
    const ancestorEle = parenetElement.parentNode;
    ancestorEle.remove();
};
// handle all inputs of education and send to sendData function
const handleEducationInputs = () => {
    const educTitles = document.querySelectorAll('#educationTitle');
    const educinstitutions = document.querySelectorAll('#institution');
    const educDurations = document.querySelectorAll('#educationDuration');
    const educationDetails = [];
    educTitles.forEach((value, key) => {
        if (!educTitles[key].value.trim() || !educinstitutions[key].value.trim()
            || !educDurations[key].value.trim()) {
            alert('All Eucation fields are required');
            return educationDetails.length = 0;
        }
        else {
            educationDetails.push({
                title: educTitles[key].value,
                institution: educinstitutions[key].value,
                duration: educDurations[key].value,
            });
        }
    });
    return educationDetails;
};
// handle all inputs of certifications and send to sendData function
const handleCertificationsInputs = () => {
    let noExperiencePara = '';
    const CertificationDetails = [];
    const certificateButton = document.querySelector('.certificate-buttons');
    if (certificateButton.style.display === 'block') {
        alert('Select Any One option from Certifications');
    }
    else {
        const noExp = document.querySelector('#noCertification');
        if (noExp.style.display === 'block') {
            noExperiencePara = noExp.querySelector('p').innerText.toString();
        }
        else {
            const certificationTitles = document.querySelectorAll('.certificationTitle');
            const certificationIssuers = document.querySelectorAll('.certificationIssuer');
            const certificationDates = document.querySelectorAll('.certificationDate');
            certificationTitles.forEach((value, key) => {
                if (!certificationTitles[key].value.trim() ||
                    !certificationIssuers[key].value.trim() || !certificationDates[key].value.trim()) {
                    alert('All Certifiations fields are required');
                    return CertificationDetails.length = 0;
                }
                else {
                    CertificationDetails.push({
                        title: certificationTitles[key].value,
                        issuer: certificationIssuers[key].value,
                        date: certificationDates[key].value,
                    });
                }
            });
        }
    }
    return noExperiencePara || CertificationDetails;
};
//handle all input fields of experieence and send data to sendData function
const handleExperienceInputs = () => {
    let noExperienceText = '';
    let ExperienceInputs = [];
    const displayButtons = document.querySelector('.experience-buttons');
    if (displayButtons.style.display === 'block') {
        alert('Select Any One option from Experience');
    }
    else {
        const noExperienceDiv = document.querySelector('#noExperience');
        if (noExperienceDiv.style.display === 'block') {
            const textArea = noExperienceDiv.querySelector('#noExperienceProile');
            if (!textArea.value.toString()) {
                alert('Please Write Something About experience');
            }
            else {
                noExperienceText = textArea.value.toString();
            }
        }
        else {
            const experienceTitle = document.querySelectorAll('.experienceTitle');
            const experienceCompany = document.querySelectorAll('.experienceCompany');
            const experienceYear = document.querySelectorAll('.experienceYear');
            experienceTitle.forEach((value, key) => {
                if (!experienceTitle[key].value.trim() || !experienceCompany[key].value.trim()
                    || !experienceYear[key].value.trim()) {
                    alert('All Experience fields are required');
                    return ExperienceInputs.length = 0;
                }
                else {
                    ExperienceInputs.push({
                        job: experienceTitle[key].value,
                        company: experienceCompany[key].value,
                        durtion: experienceYear[key].value,
                    });
                }
            });
        }
    }
    return noExperienceText || ExperienceInputs;
};
var imageUrl = '';
function imageShow(image) {
    const getFile = image.files[0];
    if (getFile) {
        const fileInMbs = Math.round(getFile.size / 1024);
        if (fileInMbs > 2048) {
            alert('Image Size is too large. Select image less than or equal to 2mbs.');
            image.value = '';
            return;
        }
        else {
            const reader = new FileReader();
            reader.onload = function (e) {
                const imageDataUrl = e.target.result;
                if (imageDataUrl) {
                    const ImageCon = document.querySelector('.image-container');
                    const imagePreview = document.querySelector('#imagePreview');
                    imagePreview.src = imageDataUrl.toString();
                    ImageCon.style.display = 'block';
                    imageUrl = imageDataUrl.toString();
                }
            };
            reader.readAsDataURL(getFile);
        }
    }
}
// finally sendData to local storage
const sendData = () => {
    const name = document.querySelector('#name');
    const email = document.querySelector('#email');
    const github = document.querySelector('#github');
    const linkedin = document.querySelector('#linkedin');
    const phone = document.querySelector('#phone');
    const profileSummary = document.querySelector('#profileSummary');
    const skills = document.querySelector('#skills');
    // check imageUrl
    if (!name.value || !email.value || !phone.value || !profileSummary.value) {
        alert("Profile Details Fields are required");
        return;
    }
    if (!imageUrl) {
        alert("Image is Required");
        return;
    }
    //get Education
    const allEduDetails = handleEducationInputs();
    if (allEduDetails.length == 0) {
        return;
    }
    //get Certification
    const allCertificationDetails = handleCertificationsInputs();
    if (allCertificationDetails.length == 0) {
        return;
    }
    //get Experience
    const allExperienceDetails = handleExperienceInputs();
    if (allExperienceDetails.length == 0) {
        return;
    }
    if (!skills.value) {
        alert('Skill field is required');
        return;
    }
    const objCv = {
        name: name.value,
        email: email.value,
        github: github.value,
        linkedin: linkedin.value,
        phone: phone.value,
        profileSummary: profileSummary.value,
        imageUrl: imageUrl,
        educationDetails: allEduDetails,
        certficationDetails: allCertificationDetails,
        experienceDetails: allExperienceDetails,
        skill: skills.value.toString()
    };
    localStorage.setItem('Cv', JSON.stringify(objCv));
    if (JSON.parse(localStorage.getItem('Cv'))) {
        // create link for css for a resume to add link in head and script in body
        const headLink = document.createElement('link');
        headLink.rel = "stylesheet";
        headLink.href = "./build/css/resume.css";
        headLink.classList.add('resume');
        const getHeadForResume = document.querySelector('head');
        getHeadForResume.append(headLink);
        const scriptLink = document.createElement('script');
        scriptLink.src = "./build/js/resume.js";
        scriptLink.classList.add('resume');
        const getBodyForResume = document.querySelector('body');
        getBodyForResume.append(scriptLink);
        setTimeout(() => {
            const resumeBuilderHtml = document.querySelectorAll('.builder-form');
            resumeBuilderHtml.forEach((e, key) => {
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
            // make resume block after submit
            const resume = document.querySelector('.resume');
            resume.style.display = 'block';
        }, 1000);
    }
};
