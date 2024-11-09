"use strict";
// /editable resume code
const editDataCv = JSON.parse(localStorage.getItem('Cv'));
var imageEditUrl;
if (editDataCv) {
    //pofile Details
    const profileSection = document.getElementById('profileDetails');
    profileSection.innerHTML += ` <h2>Profile Details</h2>
            <input type="text" id="nameEdit" placeholder="Name" value = "${editDataCv.name}"/>
            <input type="email" id="emailEdit" placeholder="Email" value = "${editDataCv.email}"/>
            <input type="url" id="githubEdit" placeholder="GitHub Link (Optional)" value = "${editDataCv.github}"/>
            <input type="url" id="linkedinEdit" placeholder="LinkedIn Profile (Optional)" value = "${editDataCv.linkedin}"/>
            <input type="tel" id="phoneEdit" placeholder="Phone" value = "${editDataCv.phone}"/>
            <textarea id="profileSummaryEdit"  placeholder="Profile Summary">${editDataCv.profileSummary}</textarea>`;
    //education Section
    const educationSec = document.getElementById('educationSectionEdit');
    editDataCv.educationDetails.forEach((e, key) => {
        if (key === 0) {
            educationSec.innerHTML = `<div class="education-inputs" id="educationInputsEdit">
                     <h2>Education</h2>
                     <input type="text" id="educationTitleEdit" placeholder="Education Titles" value = "${e.title}" />
                     <input type="text" id="institutionEdit" placeholder="Institution" value = "${e.institution}" />
                     <input type="text" id="educationDurationEdit" placeholder="Duration" value = "${e.duration}" />
                 </div>
                 <button class="small-button" onclick="addEducationEdit()">Add More Education</button>`;
        }
        else {
            const createEle = document.createElement('div');
            createEle.classList.add('education-inputs');
            createEle.id = 'educationInputsEdit';
            createEle.innerHTML += `
                 <h2>Add More Education
                     <button class='cross-button' onclick="removeSect(this)">X</button>    
                 </h2>
                  <input type="text" id="educationTitleEdit" placeholder="Education Titles" value = "${e.title}" />
                     <input type="text" id="institutionEdit" placeholder="Institution" value = "${e.institution}" />
                     <input type="text" id="educationDurationEdit" placeholder="Duration" value = "${e.duration}" />
                 `;
            const lastchild = educationSec.lastElementChild;
            educationSec.insertBefore(createEle, lastchild);
        }
    });
    //certification Section
    const certificationSec = document.getElementById('certificationSectionEdit');
    //  
    if (typeof editDataCv.certficationDetails === 'string') {
        certificationSec.innerHTML = `
        <div class="certificate-buttons" style="display: none;">
                <h2>Certifications</h2>
                <div>
                    <button class="small-button" onclick="certificateInputs('yes')">I have certifications</button>
                    <button class="small-button" onclick="certificateInputs('no')">I have no certifications</button>
                </div>
        </div>
        <div class="certification-inputs" id="certificationInputs">
                <h2>Certifications</h2>
                <input type="text" class="certificationTitleEdit" placeholder="Certification Title" />
                <input type="text" class="certificationIssuerEdit" placeholder="Issuer" />
                <input type="text" class="certificationDateEdit" placeholder="Date Obtained" />
        </div>
        <div id="noCertificationEdit" style="display: block;">
                <h2>Certifications</h2>
                <p >I have No Certificates to display.</p>
                
        </div>
            <button class="small-button certificate" style="display: none;" onclick="addCerticateEdit()">Add More Certifcates</button>
        `;
    }
    else {
        editDataCv.certficationDetails.forEach((e, key) => {
            if (key === 0) {
                certificationSec.innerHTML = `
            <div class="certificate-buttons" style="display: none;">
                    <h2>Certifications</h2>
                    <div>
                        <button class="small-button" onclick="certificateInputs('yes')">I have certifications</button>
                        <button class="small-button" onclick="certificateInputs('no')">I have no certifications</button>
                    </div>
            </div>
            <div class="certification-inputs" id="certificationInputsEdit" style="display:block">
                    <h2>Certifications</h2>
                    <input type="text" class="certificationTitleEdit" placeholder="Certification Title" value="${e.title}"/>
                    <input type="text" class="certificationIssuerEdit" placeholder="Issuer" value="${e.issuer}"/>
                    <input type="text" class="certificationDateEdit" placeholder="Date Obtained" value="${e.date}"/>
            </div>
            <div id="noCertificationEdit" style="display: none;">
                    <h2>Certifications</h2>
                    <p >I have No Certificates to display.</p>
                    
            </div>
                <button class="small-button certificate" style="display: block;" onclick="addCerticateEdit()">Add More Certifcates</button>
            `;
            }
            else {
                const createEle = document.createElement('div');
                createEle.classList.add('certification-inputs');
                createEle.id = 'certificationInputsEdit';
                createEle.style.display = 'block';
                createEle.innerHTML += `
            <h2>Add More Certifications
            <button class='cross-button' onclick="removeSectEdit(this)">X</button>
            </h2>
            <input type="text" class="certificationTitleEdit" placeholder="Certification Title" required value="${e.title}"/>
            <input type="text" class="certificationIssuerEdit" placeholder="Issuer" required value="${e.issuer}"/>
            <input type="text" class="certificationDateEdit" placeholder="Date Obtained" required value="${e.date}"/>
            `;
                const lastchild = certificationSec.lastElementChild;
                certificationSec.insertBefore(createEle, lastchild);
            }
        });
    }
    //experience Inputs
    const experienceSec = document.getElementById('experienceSectionEdit');
    if (typeof editDataCv.experienceDetails === 'string') {
        experienceSec.innerHTML = `
         <div class="experience-buttons" style="display: none;">
                <h2>Experience</h2>
                <div>
                    <button class="small-button" onclick="experienceInputs('yes')">I have experience</button>
                    <button class="small-button" onclick="experienceInputs('no')">I have no experience</button>
                </div>
            </div>
            <div class="experience-inputs" id="experienceInputsEdit" style="display: none;">
                <h2>Experience</h2>
                <input type="text" class="experienceTitleEdit" placeholder="Job" />
                <input type="text" class="experienceCompanyEdit" placeholder="Company" />
                <input type="text" class="experienceYearEdit" placeholder="Duration" />
            </div>
            <div id="noExperienceEdit" style="display: block;">
                <h2>Experience</h2>
                <textarea id="noExperienceProile" placeholder="Write any thing about Expereience">${editDataCv.experienceDetails}</textarea>
            </div>
            <button class="small-button experience" style="display: none;" onclick="addExperienceEdit()">Add More Experience</button>
        `;
    }
    else {
        editDataCv.experienceDetails.forEach((e, key) => {
            if (key === 0) {
                experienceSec.innerHTML = `
                 <div class="experience-buttons" style="display: none;">
                <h2>Experience</h2>
                <div>
                    <button class="small-button" onclick="experienceInputs('yes')">I have experience</button>
                    <button class="small-button" onclick="experienceInputs('no')">I have no experience</button>
                </div>
            </div>
            <div class="experience-inputs" id="experienceInputsEdit" style="display: block;">
                <h2>Experience</h2>
                <input type="text" class="experienceTitleEdit" placeholder="Job" value="${e.job}" />
                <input type="text" class="experienceCompanyEdit" placeholder="Company" value="${e.company}" />
                <input type="text" class="experienceYearEdit" placeholder="Duration" value="${e.durtion}" />
            </div>
            <div id="noExperienceEdit" style="display: none;">
                <h2>Experience</h2>
                <textarea id="noExperienceProile" placeholder="Write any thing about Expereience"></textarea>
            </div>
            <button class="small-button experience" style="display: block;" onclick="addExperienceEdit()">Add More Experience</button>
                `;
            }
            else {
                const createEle = document.createElement('div');
                createEle.classList.add('experience-inputs');
                createEle.id = 'experienceInputsEdit';
                createEle.style.display = 'block';
                createEle.innerHTML += `
                <h2>Add More Experience
                    <button class='cross-button' onclick="removeSectEdit(this)">X</button></h2>
                <input type="text" class="experienceTitleEdit" placeholder="Experience Title" required value="${e.job}" />
                <input type="text" class="experienceCompanyEdit" placeholder="Experience Company" required value="${e.company}" />
                <input type="text" class="experienceYearEdit" placeholder="Experience year" required value="${e.durtion}" />
                `;
                const lastchild = experienceSec.lastElementChild;
                experienceSec.insertBefore(createEle, lastchild);
            }
        });
    }
    //skills
    const skillsSec = document.querySelector('#skillSectionEdit textarea');
    skillsSec.value = editDataCv.skill;
    if (editDataCv.imageUrl) {
        const imageInput = document.querySelector('#profileImage');
        const ImageCon = document.querySelector('#EditImageContainer');
        const imagePreview = document.querySelector('#imagePreviewEdit');
        imagePreview.src = editDataCv.imageUrl.toString();
        ImageCon.style.display = 'block';
    }
}
//end if
//remove section
const removeSectEdit = (button) => {
    const parenetElement = button.parentNode;
    const ancestorEle = parenetElement.parentNode;
    ancestorEle.remove();
};
// add Education when click o Add Education
const addEducationEdit = () => {
    const educationSection = document.querySelectorAll('#educationInputsEdit');
    const getLastEduInputs = educationSection[educationSection.length - 1];
    const educationTitle = getLastEduInputs.querySelector('#educationTitleEdit');
    const educationInstitution = getLastEduInputs.querySelector('#institutionEdit');
    const educationDuration = getLastEduInputs.querySelector('#educationDurationEdit');
    if (!educationTitle.value.trim() || !educationInstitution.value.trim() || !educationDuration.value.trim()) {
        alert('Please fill all field in the current education section before adding more.');
        return;
    }
    const eductionDiv = document.querySelector('#educationSectionEdit');
    const createEle = document.createElement('div');
    createEle.classList.add('educationSection');
    createEle.id = 'educationInputsEdit';
    createEle.innerHTML += `
        <h2>Add More Education
            <button class='cross-button' onclick="removeSectEdit(this)">X</button>    
        </h2>
        <input type="text" id="educationTitleEdit" placeholder="Education Title" required />
        <input type="text" id="institutionEdit" placeholder="Institution" required />
        <input type="text" id="educationDurationEdit" placeholder="Duration" required />
        `;
    const lastchild = eductionDiv.lastElementChild;
    eductionDiv.insertBefore(createEle, lastchild);
};
//add Certification when clickon Add Certificate
const addCerticateEdit = () => {
    const certificationInputs = document.querySelectorAll('#certificationInputsEdit');
    const getLastCertInputs = certificationInputs[certificationInputs.length - 1];
    const certificationTitle = getLastCertInputs.querySelector('.certificationTitleEdit');
    const certificationIssuer = getLastCertInputs.querySelector('.certificationIssuerEdit');
    const certificationDate = getLastCertInputs.querySelector('.certificationDateEdit');
    if (!certificationTitle.value.trim() || !certificationIssuer.value.trim() || !certificationDate.value.trim()) {
        alert('Please fill all field in the current certificate section before adding more.');
        return;
    }
    const certificationSection = document.querySelector('#certificationSectionEdit');
    const createEle = document.createElement('div');
    createEle.classList.add('certification-inputs');
    createEle.id = 'certificationInputsEdit';
    createEle.style.display = 'block';
    createEle.innerHTML += `
    <h2>Add More Certifications
     <button class='cross-button' onclick="removeSect(this)">X</button>
     </h2>
    <input type="text" class="certificationTitleEdit" placeholder="Certification Title" required />
    <input type="text" class="certificationIssuerEdit" placeholder="Issuer" required />
    <input type="text" class="certificationDateEdit" placeholder="Date Obtained" required />
    `;
    const lastchild = certificationSection.lastElementChild;
    certificationSection.insertBefore(createEle, lastchild);
};
//add Experience when clickon Add Experience
const addExperienceEdit = () => {
    const experienceInputs = document.querySelectorAll('#experienceInputsEdit');
    const getLastExpInputs = experienceInputs[experienceInputs.length - 1];
    const experienceTitle = getLastExpInputs.querySelector('.experienceTitleEdit');
    const experienceCompany = getLastExpInputs.querySelector('.experienceCompanyEdit');
    const experienceYear = getLastExpInputs.querySelector('.experienceYearEdit');
    if (!experienceTitle.value.trim() || !experienceCompany.value.trim() || !experienceYear.value.trim()) {
        alert('Please fill all field in the current experience section before adding more.');
        return;
    }
    const experienceSection = document.querySelector('#experienceSectionEdit');
    const createEle = document.createElement('div');
    createEle.classList.add('experience-inputs');
    createEle.id = 'experienceInputsEdit';
    createEle.style.display = 'block';
    createEle.innerHTML += `
    <h2>Add More Experience
        <button class='cross-button' onclick="removeSectEdit(this)">X</button></h2>
    <input type="text" class="experienceTitleEdit" placeholder="Experience Title" required />
    <input type="text" class="experienceCompanyEdit" placeholder="Experience Company" required />
    <input type="text" class="experienceYearEdit" placeholder="Experience year" required />
    `;
    const lastchild = experienceSection.lastElementChild;
    experienceSection.insertBefore(createEle, lastchild);
};
function imageShowEdit(image) {
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
                    const ImageCon = document.querySelector('#EditImageContainer');
                    const imagePreview = document.querySelector('#imagePreviewEdit');
                    imagePreview.src = imageDataUrl.toString();
                    ImageCon.style.display = 'block';
                    imageEditUrl = imageDataUrl.toString();
                }
            };
            reader.readAsDataURL(getFile);
        }
    }
}
// handle all inputs of education and send to sendData function
const handleEducationInputsEdit = () => {
    const educTitles = document.querySelectorAll('#educationTitleEdit');
    const educinstitutions = document.querySelectorAll('#institutionEdit');
    const educDurations = document.querySelectorAll('#educationDurationEdit');
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
const handleCertificationsInputsEdit = () => {
    const noCerticateEdit = document.getElementById('noCertificationEdit');
    if (noCerticateEdit.style.display === 'block') {
        return editDataCv.certficationDetails;
    }
    else {
        const CertificationDetails = [];
        const certificationTitles = document.querySelectorAll('.certificationTitleEdit');
        const certificationIssuers = document.querySelectorAll('.certificationIssuerEdit');
        const certificationDates = document.querySelectorAll('.certificationDateEdit');
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
        return CertificationDetails;
    }
};
//handle all input fields of experieence and send data to sendData function
const handleExperienceInputsEdit = () => {
    let ExperienceInputs = [];
    const noExperienceEdit = document.getElementById('noExperienceEdit');
    if (noExperienceEdit.style.display === 'block') {
        return editDataCv.experienceDetails;
    }
    else {
        const experienceTitle = document.querySelectorAll('.experienceTitleEdit');
        const experienceCompany = document.querySelectorAll('.experienceCompanyEdit');
        const experienceYear = document.querySelectorAll('.experienceYearEdit');
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
        return ExperienceInputs;
    }
};
//submit edit data 
const editData = document.querySelector('.editData');
editData.addEventListener('click', function () {
    const name = document.querySelector('#nameEdit');
    const email = document.querySelector('#emailEdit');
    const github = document.querySelector('#githubEdit');
    const linkedin = document.querySelector('#linkedinEdit');
    const phone = document.querySelector('#phoneEdit');
    const profileSummary = document.querySelector('#profileSummaryEdit');
    const skills = document.querySelector('#skillsEdit');
    // // check imageUrl
    if (!name.value || !email.value || !phone.value || !profileSummary.value) {
        alert("Profile Details Fields are required");
        return;
    }
    const allEduDetails = handleEducationInputsEdit();
    if (allEduDetails.length == 0) {
        return;
    }
    //get Certification
    const allCertificationDetails = handleCertificationsInputsEdit();
    if (allCertificationDetails.length == 0) {
        return;
    }
    const allExperienceDetails = handleExperienceInputsEdit();
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
        imageUrl: imageEditUrl ? imageEditUrl : editDataCv.imageUrl,
        educationDetails: allEduDetails,
        certficationDetails: allCertificationDetails,
        experienceDetails: allExperienceDetails,
        skill: skills.value.toString()
    };
    if (JSON.parse(localStorage.getItem('Cv'))) {
        localStorage.removeItem('Cv');
    }
    if (!JSON.parse(localStorage.getItem('Cv'))) {
        localStorage.setItem('Cv', JSON.stringify(objCv));
        location.reload();
        const resumeBuilderHtml = document.querySelectorAll('.editable-form');
        resumeBuilderHtml.forEach((e, key) => {
            if (key == 0) {
                e.remove();
            }
            if (key == 2) {
                e.remove();
            }
            e.style.display = 'none';
            // e.remove()
        });
        // create link for css for a resume to add link in head and script in body
        const headLink = document.createElement('link');
        headLink.rel = "stylesheet";
        headLink.href = "./build/css/resume.css";
        headLink.classList.add('resume');
        const resume = document.querySelector('.resume');
        resume.style.display = 'block';
        const getHeadForResume = document.querySelector('head');
        getHeadForResume.append(headLink);
        const scriptLink = document.createElement('script');
        scriptLink.src = "./build/js/resume.js";
        scriptLink.classList.add('resume');
        const getBodyForResume = document.querySelector('body');
        getBodyForResume.append(scriptLink);
        location.reload();
    }
});
