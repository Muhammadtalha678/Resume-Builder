
if (JSON.parse(localStorage.getItem('Cv')!)) {
    
const toggleButtons = document.querySelectorAll('.hide-button') as NodeListOf<HTMLButtonElement>
 
for (const toggleButton of toggleButtons) {
    toggleButton.addEventListener('click', function () {
        const parentElement = this.parentElement as HTMLHeadingElement
        const nextSiblingElement = parentElement.nextElementSibling as HTMLHeadingElement
            
            if (window.getComputedStyle(nextSiblingElement).display === 'block') {
                nextSiblingElement.style.display = 'none'
                this.innerText = 'Show'
            }
            else {
                nextSiblingElement.style.display = 'block'
                this.innerText = 'Hide'
        }
            
        
        
    })
    
}

// get data from localstorage
interface Education{
    title:string,
    institution:string,
    duration:string,
}
interface Certification{
    title:string,
    issuer:string,
    date:string,
}
interface Experience{
    job:string,
    company:string,
    durtion:string,
}

interface CvData{
    name:string,
    email:string,
    github:string,
    linkedin:string,
    phone:string,
    profileSummary:string,
    imageUrl:string,
    educationDetails:Education[],
    certficationDetails:string|Certification[],
    experienceDetails:string|Experience[],
    skill:string
}

let cvData:CvData = JSON.parse(localStorage.getItem('Cv')!)

//set image
const profileImage = document.querySelector('.profile-info img') as HTMLImageElement
profileImage.src = cvData.imageUrl

//set Name
const profileName = document.querySelector('.profile-info div') as HTMLDivElement
profileName.innerText = cvData.name

//set Email github linkedin and phone
const rightSideHeaderData = document.querySelector('.contact-info ul') as HTMLUListElement
rightSideHeaderData.innerHTML += `
    <li><b>Email: <i>${cvData.email}</i></b></li>
`
if (cvData.github) {
    rightSideHeaderData.innerHTML += `
        <li><b>GitHub: <i><a target="_blank" style="text-decoration: none; color: #007bff;" href="${cvData.github}">${cvData.github}</a></i></b></li>
    `
}
if (cvData.linkedin) {
    rightSideHeaderData.innerHTML += `
        <li><b>Linkedin: <i><a target="_blank" style="text-decoration: none; color: #007bff;" href="${cvData.linkedin}">${cvData.linkedin}</a></i></b></li>
    `
}
rightSideHeaderData.innerHTML += `
    <li><b>Contact: <i>${cvData.phone}</i></b></li>
`




//profile summary
const profileSummary = document.querySelector('.profile-summary div p') as HTMLDivElement
profileSummary.innerText = cvData.profileSummary

//Education 

cvData.educationDetails.forEach((object)=>{
    const profileEducation = document.querySelector('.education div') as HTMLDivElement
    profileEducation.innerHTML += `
    <p><strong>${object.title}</strong><br>
    ${object.institution}, ${object.duration}</p>
 `
})

//Certification 
const profileCertification = document.querySelector('.certificate div') as HTMLDivElement
if (typeof cvData.certficationDetails == 'string') {
    profileCertification.innerHTML +=`
        <p><strong>${cvData.certficationDetails}</strong></p>    
    `    
}
else{
    cvData.certficationDetails.forEach((object)=>{
        profileCertification.innerHTML += `
        <p><strong>${object.title}</strong><br>
        ${object.issuer} <br>
        <span style="font-weight: 500;">${object.date}</span>
        </p>
     `
    })

}

//Experience 
const profileExperience = document.querySelector('.experience div') as HTMLDivElement
if (typeof cvData.experienceDetails == 'string') {
    profileExperience.innerHTML +=`
        <p><strong>${cvData.experienceDetails}</strong></p>    
    `    
}
else{
    cvData.experienceDetails.forEach((object)=>{
        profileExperience.innerHTML += `
        <p><strong>${object.job}</strong><br>
        ${object.company} <br>
        <span style="font-weight: 500;">${object.durtion}</span>
        </p>
     `
     
    })

}

//skills
const profileSkills = document.querySelector('.skills div ul') as HTMLUListElement
const skillArray = cvData.skill.split(',')
skillArray.forEach((skill) => {
    profileSkills.innerHTML +=`
    <li>${skill}</li>
    `
    
})

}
function createNewCv ()  {
    localStorage.removeItem('Cv')
    const resumeHtml = document.querySelectorAll('.resume') as NodeListOf<HTMLElement>
    resumeHtml.forEach((e,key)=>{
        
        if (key == 0) {
            e.remove()
        }
        if (key == 2) {
            e.remove()
        }
        e.style.display= 'none'
        // e.remove()
    })
    // make resume Builder block after submit
    const makeResumeBuilderBlock = document.querySelector('.builder-form') as HTMLDivElement
        makeResumeBuilderBlock.style.display = 'block'

        // create link for css for a resume to add link in head and script in body
    const headLinkResumeBuilder  = document.createElement('link') as HTMLLinkElement

    headLinkResumeBuilder.rel = "stylesheet"
    headLinkResumeBuilder.href = "./build/css/style.css"
    headLinkResumeBuilder.classList.add('builder-form')
    
    const getHeadForResumeBuilder = document.querySelector('head') as HTMLHeadElement
    getHeadForResumeBuilder.append(headLinkResumeBuilder)

    // script resume builder
    const scriptLinkResumeBuilder  = document.createElement('script') as HTMLScriptElement

    scriptLinkResumeBuilder.src = "./build/js/app.js"
    scriptLinkResumeBuilder.classList.add('builder-form')

    const getBodyForResumeBuilder = document.querySelector('body') as HTMLBodyElement
    getBodyForResumeBuilder.append(scriptLinkResumeBuilder)
    
    
}


// for editabel Cv
const editForm = document.querySelector('.editable-form') as HTMLDivElement
editForm.style.display = 'none' 
const editCv = document.querySelector('.editCv') as HTMLButtonElement
editCv.addEventListener('click',function(this){
    const resumeHtml = document.querySelectorAll('.resume') as NodeListOf<HTMLElement>
    resumeHtml.forEach((e,key)=>{
        
        if (key == 0) {
            e.remove()
        }
        if (key == 2) {
            e.remove()
        }
        e.style.display= 'none'
        // e.remove()
    })
    // make resume Builder block after submit
    const makeResumeBuilderBlock = document.querySelector('.editable-form') as HTMLDivElement
        makeResumeBuilderBlock.style.display = 'block'

        // create link for css for a resume to add link in head and script in body
    const headLinkResumeBuilder  = document.createElement('link') as HTMLLinkElement

    headLinkResumeBuilder.rel = "stylesheet"
    headLinkResumeBuilder.href = "./build/css/style.css"
    headLinkResumeBuilder.classList.add('builder-form','editable-form')
    
    const getHeadForResumeBuilder = document.querySelector('head') as HTMLHeadElement
    getHeadForResumeBuilder.append(headLinkResumeBuilder)

    // script resume builder
    const scriptLinkResumeBuilder  = document.createElement('script') as HTMLScriptElement

    scriptLinkResumeBuilder.src = "./build/js/edit.js"
    scriptLinkResumeBuilder.classList.add('editable-form')

    const getBodyForResumeBuilder = document.querySelector('body') as HTMLBodyElement
    getBodyForResumeBuilder.append(scriptLinkResumeBuilder)
    
    
})

//open cv
function openModal() {
    const modal = document.getElementById('modal') as HTMLDivElement
    modal.style.display = 'flex';
}

// Close the modal
function closeModal() {
    const closeModal = document.getElementById('modal') as HTMLDivElement
    closeModal.style.display = 'none';
}
// download PDF
function downloadPDF() {
    closeModal();
    window.print(); // Print dialog for saving as PDF
}

// share URL
function shareURL() {
    // const username = prompt("Enter your username:");
    let cvData:CvData = JSON.parse(localStorage.getItem('Cv')!)
    if (cvData.name) {
        let userName = cvData.name.split(' ').join('')
        console.log(`${window.location.href}user=${encodeURIComponent(userName)}`);
        
         
        // const shareURL = `${window.location.origin}/resume?user=${encodeURIComponent(userName)}`;
        const shareURL = `${window.location.href}?user=${encodeURIComponent(userName)}`;
        alert(`Share this URL: ${shareURL}`);
    } else {
        alert("Username is required to create a shareable link.");
    }
    closeModal();
}

