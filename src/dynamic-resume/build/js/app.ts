
if (JSON.parse(localStorage.getItem('Cv')!)) {
    // console.log('hasData');
    
    const resumeBuilderHtml = document.querySelectorAll('.builder-form') as NodeListOf<HTMLElement>
    resumeBuilderHtml.forEach((e,key)=>{
        // console.log(e);
        
        if (key == 0) {
            e.remove()
        }
        if (key == 2) {
            e.remove()
        }
        e.style.display= 'none'
        // e.remove()
    })
    
    // make resume block after submit
    const resume = document.querySelector('.resume') as HTMLDivElement
        resume.style.display = 'block'

    // create link for css for a resume to add link in head and script in body
    const headLink  = document.createElement('link') as HTMLLinkElement

    headLink.rel = "stylesheet"
    headLink.href = "./build/css/resume.css"
    headLink.classList.add('resume')
    
    const getHeadForResume = document.querySelector('head') as HTMLHeadElement
    getHeadForResume.append(headLink)
    
    const scriptLink  = document.createElement('script') as HTMLScriptElement

    scriptLink.src = "./build/js/resume.js"
    scriptLink.classList.add('resume')

    const getBodyForResume = document.querySelector('body') as HTMLBodyElement
    getBodyForResume.append(scriptLink)
   
    
}



//add more education functionality
const addEducation = () => {
    const educationSection = document.querySelectorAll('#educationInputs') as NodeListOf<HTMLDivElement>
    const getLastEduInputs = educationSection[educationSection.length-1] as HTMLDivElement
    const educationTitle = getLastEduInputs.querySelector('#educationTitle')  as HTMLInputElement
    const educationInstitution = getLastEduInputs.querySelector('#institution') as HTMLInputElement
    const educationDuration = getLastEduInputs.querySelector('#educationDuration') as HTMLInputElement
    
    
    if (!educationTitle.value.trim() || !educationInstitution.value.trim() || !educationDuration.value.trim()) {
        alert('Please fill all field in the current education section before adding more.')
        return
    }
    
    const eductionDiv = document.querySelector('#educationSection')  as HTMLElement
    const createEle = document.createElement('div')
    createEle.classList.add('educationSection')
    createEle.id ='educationInputs'
    createEle.innerHTML += `
        <h2>Add More Education
            <button class='cross-button' onclick="removeSect(this)">X</button>    
        </h2>
        <input type="text" id="educationTitle" placeholder="Education Title" required />
        <input type="text" id="institution" placeholder="Institution" required />
        <input type="text" id="educationDuration" placeholder="Duration" required />
        `;
    const lastchild = eductionDiv.lastElementChild as HTMLButtonElement 
    eductionDiv.insertBefore(createEle,lastchild) 
}

//show fields on the basis of yes or no certfications
const certificateInputs = (haveCertificate:string)=>{
    const getbuttons = document.querySelector('.certificate-buttons') as HTMLDivElement
    if (haveCertificate == 'yes') {
        getbuttons.style.display = 'none'
        const certicateInputs = document.querySelector('#certificationInputs') as HTMLDivElement
        certicateInputs.style.display = 'block'
        
        const certicateButton = document.querySelector('.certificate')  as HTMLButtonElement
        certicateButton.style.display = 'block'
        
    }
    else{
        const getPara = document.querySelector('#noCertification')  as HTMLDivElement
        getPara.style.display = 'block'
        getbuttons.style.display = 'none'

    }
}

// add inputs of certification sections 
const addCerticate = () => {
    const certificationInputs = document.querySelectorAll('#certificationInputs')  as NodeListOf<HTMLDivElement>
    const getLastCertInputs = certificationInputs[certificationInputs.length-1]  as HTMLDivElement
    const certificationTitle = getLastCertInputs.querySelector('.certificationTitle') as HTMLInputElement
    const certificationIssuer = getLastCertInputs.querySelector('.certificationIssuer') as HTMLInputElement
    const certificationDate = getLastCertInputs.querySelector('.certificationDate') as HTMLInputElement
    
    if (!certificationTitle.value.trim() || !certificationIssuer.value.trim() || !certificationDate.value.trim()) {
        alert('Please fill all field in the current certificate section before adding more.')
        return
    }
    
    const certificationSection = document.querySelector('#certificationSection') as HTMLElement
    
    const createEle = document.createElement('div') as HTMLDivElement
    createEle.classList.add('certification-inputs')
    createEle.id ='certificationInputs'
    createEle.style.display = 'block'
    
    createEle.innerHTML += `
    <h2>Add More Certifications
     <button class='cross-button' onclick="removeSect(this)">X</button>
     </h2>
    <input type="text" class="certificationTitle" placeholder="Certification Title" required />
    <input type="text" class="certificationIssuer" placeholder="Issuer" required />
    <input type="text" class="certificationDate" placeholder="Date Obtained" required />
    `;
    const lastchild = certificationSection.lastElementChild 
    certificationSection.insertBefore(createEle,lastchild) 
}



// experience section functionality

const experienceInputs = (haveExperience:string)=>{
    const getbuttons = document.querySelector('.experience-buttons') as HTMLDivElement
    if (haveExperience == 'yes') {
        getbuttons.style.display = 'none'
        const experienceInputs = document.querySelector('#experienceInputs') as HTMLDivElement
        experienceInputs.style.display = 'block'
        
        const experienceButton = document.querySelector('.experience') as HTMLButtonElement
        experienceButton.style.display = 'block'
        
    }
    else{
        const getPara = document.querySelector('#noExperience')as HTMLDivElement
        getPara.style.display = 'block'
        getbuttons.style.display = 'none'

    }
}

const addExperience = () => {
    const experienceInputs = document.querySelectorAll('#experienceInputs') as NodeListOf<HTMLDivElement>
    const getLastExpInputs = experienceInputs[experienceInputs.length-1] as HTMLDivElement
    
    const experienceTitle = getLastExpInputs.querySelector('.experienceTitle') as HTMLInputElement 
    const experienceCompany = getLastExpInputs.querySelector('.experienceCompany') as HTMLInputElement 
    const experienceYear = getLastExpInputs.querySelector('.experienceYear') as HTMLInputElement
    
    
    if (!experienceTitle.value.trim() || !experienceCompany.value.trim() || !experienceYear.value.trim()) {
        alert('Please fill all field in the current experience section before adding more.')
        return
    }
    
    const experienceSection = document.querySelector('#experienceSection') as HTMLElement
    
    const createEle = document.createElement('div') as HTMLDivElement
    createEle.classList.add('experience-inputs')
    createEle.id ='experienceInputs'
    createEle.style.display = 'block'
    
    createEle.innerHTML += `
    <h2>Add More Experience
        <button class='cross-button' onclick="removeSect(this)">X</button></h2>
    <input type="text" class="experienceTitle" placeholder="Experience Title" required />
    <input type="text" class="experienceCompany" placeholder="Experience Company" required />
    <input type="text" class="experienceYear" placeholder="Experience year" required />
    `;
    const lastchild = experienceSection.lastElementChild 
    experienceSection.insertBefore(createEle,lastchild) 
}
  //remove more section functionality
  const removeSect = (button:HTMLButtonElement) => {
    const parenetElement = button.parentNode as HTMLHeadingElement
    
    const ancestorEle = parenetElement.parentNode as HTMLDivElement
    ancestorEle.remove()
    
    
}



interface CV{
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


// handle all inputs of education and send to sendData function
const handleEducationInputs = ():Education[] => {
    const educTitles = document.querySelectorAll('#educationTitle') as NodeListOf<HTMLInputElement>
    const educinstitutions = document.querySelectorAll('#institution') as NodeListOf<HTMLInputElement>
    const educDurations = document.querySelectorAll('#educationDuration') as NodeListOf<HTMLInputElement>
    const educationDetails:Education[] = [
    ]
   educTitles.forEach((value,key) => {
        if (!educTitles[key].value.trim() || !educinstitutions[key].value.trim() 
            || !educDurations[key].value.trim()) {
            alert('All Eucation fields are required')
            return educationDetails.length = 0
        }
        else{
            educationDetails.push(
                {
                    title:educTitles[key].value,
                    institution:educinstitutions[key].value,
                    duration:educDurations[key].value,
                } 
            )
        }
   });
    
    return educationDetails
     
}

// handle all inputs of certifications and send to sendData function
const handleCertificationsInputs = ():string | Certification[] =>{
    let noExperiencePara:string = ''
    const CertificationDetails:Certification[] = []
    const certificateButton = document.querySelector('.certificate-buttons') as HTMLDivElement
    if (certificateButton.style.display === 'block') {
        alert('Select Any One option from Certifications')
    }
    else{
        const noExp = document.querySelector('#noCertification') as HTMLDivElement
        if (noExp.style.display === 'block') {
             noExperiencePara = noExp.querySelector('p')!.innerText.toString()
        }
        else{
            const certificationTitles = document.querySelectorAll('.certificationTitle') as NodeListOf<HTMLInputElement> 
            const certificationIssuers = document.querySelectorAll('.certificationIssuer') as NodeListOf<HTMLInputElement> 
            const certificationDates = document.querySelectorAll('.certificationDate') as NodeListOf<HTMLInputElement> 
            
            certificationTitles.forEach((value,key) => {
                if (!certificationTitles[key].value.trim() || 
                !certificationIssuers[key].value.trim() || !certificationDates[key].value.trim()) {
                    alert('All Certifiations fields are required')
                    return CertificationDetails.length = 0
                }
                else{
                    CertificationDetails.push(
                        {
                            title:certificationTitles[key].value,
                            issuer:certificationIssuers[key].value,
                            date:certificationDates[key].value,
                        }
                    )
                }
            })
            
        }
    }
    return noExperiencePara  || CertificationDetails
    


}

//handle all input fields of experieence and send data to sendData function

const handleExperienceInputs = ():string | Experience[]=> {
    let noExperienceText:string = ''
    let ExperienceInputs:Experience[] = []
    const displayButtons = document.querySelector('.experience-buttons') as HTMLDivElement
    if (displayButtons.style.display === 'block') {
        alert('Select Any One option from Experience')
    }
    else{
        const noExperienceDiv = document.querySelector('#noExperience') as HTMLDivElement
        if (noExperienceDiv.style.display === 'block') {
            const textArea = noExperienceDiv.querySelector('#noExperienceProile') as HTMLTextAreaElement
            
            if (!textArea.value.toString()) {
                
                alert('Please Write Something About experience')
            }
            else{
                
                noExperienceText = textArea.value.toString()
            }
        }
        else{
            
            const experienceTitle = document.querySelectorAll('.experienceTitle') as NodeListOf<HTMLInputElement> 
            const experienceCompany = document.querySelectorAll('.experienceCompany') as NodeListOf<HTMLInputElement> 
            const experienceYear = document.querySelectorAll('.experienceYear') as NodeListOf<HTMLInputElement> 
            
            experienceTitle.forEach((value,key) => {
                if (!experienceTitle[key].value.trim() || !experienceCompany[key].value.trim() 
                    || !experienceYear[key].value.trim()) {
                        alert('All Experience fields are required')
                        return ExperienceInputs.length = 0
                }
                else{
                    ExperienceInputs.push(
                        {
                            job:experienceTitle[key].value,
                            company:experienceCompany[key].value,
                            durtion:experienceYear[key].value,
                        }
                    )
                }
            });
        }
    }

    return noExperienceText || ExperienceInputs

}

var imageUrl:string = ''

function imageShow(image:HTMLInputElement) {
    const getFile:File|null = image.files![0]
   
    if (getFile) {
        const fileInMbs:number = Math.round(getFile.size/1024)
        if (fileInMbs > 2048 ) {
            alert('Image Size is too large. Select image less than or equal to 2mbs.')
            image.value = ''
            return
        }
        else{
            const reader:FileReader = new FileReader();
            
            reader.onload = function(e: ProgressEvent<FileReader>) {
                const imageDataUrl = e.target!.result; 
                if (imageDataUrl) {
                    const ImageCon = document.querySelector('.image-container') as HTMLDivElement
                    const imagePreview = document.querySelector('#imagePreview') as HTMLImageElement
                    imagePreview.src = imageDataUrl!.toString() 
                    ImageCon.style.display = 'block'
                    imageUrl = imageDataUrl!.toString()
                    
                }
                
            }
            reader.readAsDataURL(getFile)
        } 

    }
}

// finally sendData to local storage
const sendData = () => {
    
    const name = document.querySelector('#name') as HTMLInputElement;
    const email = document.querySelector('#email') as HTMLInputElement;
    const github = document.querySelector('#github') as HTMLInputElement;
    const linkedin = document.querySelector('#linkedin') as HTMLInputElement;
    const phone = document.querySelector('#phone') as HTMLInputElement;
    const profileSummary = document.querySelector('#profileSummary') as HTMLInputElement;
    const skills = document.querySelector('#skills') as HTMLTextAreaElement

    // check imageUrl
    if (!name.value || !email.value || !phone.value || !profileSummary.value) {
        alert("Profile Details Fields are required")
        return
    }

    if (!imageUrl) {
        alert("Image is Required")
        return
    }

    //get Education
    const allEduDetails:Education[] = handleEducationInputs()
    
    if (allEduDetails.length == 0) {
        
        return 
    }
    //get Certification
    const allCertificationDetails:string | Certification[] =  handleCertificationsInputs()
    if (allCertificationDetails.length == 0) {
        return
    }

    //get Experience

    const allExperienceDetails:string | Experience[] = handleExperienceInputs()
    if (allExperienceDetails.length == 0) {
        return
    }
    

    if (!skills.value) {
        alert('Skill field is required')
        return
    }
        

    const objCv:CV ={
        name:name.value,
        email:email.value,
        github:github.value,
        linkedin:linkedin.value,
        phone:phone.value,
        profileSummary:profileSummary.value,
        imageUrl:imageUrl,
        educationDetails:allEduDetails,
        certficationDetails:allCertificationDetails,
        experienceDetails:allExperienceDetails,
        skill:skills.value.toString()
    } 
     localStorage.setItem('Cv',JSON.stringify(objCv))
        if (JSON.parse(localStorage.getItem('Cv')!)) {
            
    const resumeBuilderHtml = document.querySelectorAll('.builder-form') as NodeListOf<HTMLElement>
    resumeBuilderHtml.forEach((e,key)=>{
        // console.log(e);
        
        if (key == 0) {
            e.remove()
        }
        if (key == 2) {
            e.remove()
        }
        e.style.display= 'none'
        // e.remove()
    })
    
    // make resume block after submit
    const resume = document.querySelector('.resume') as HTMLDivElement
        resume.style.display = 'block'

    // create link for css for a resume to add link in head and script in body
    const headLink  = document.createElement('link') as HTMLLinkElement

    headLink.rel = "stylesheet"
    headLink.href = "./build/css/resume.css"
    headLink.classList.add('resume')
    
    const getHeadForResume = document.querySelector('head') as HTMLHeadElement
    getHeadForResume.append(headLink)
    
    const scriptLink  = document.createElement('script') as HTMLScriptElement

    scriptLink.src = "./build/js/resume.js"
    scriptLink.classList.add('resume')

    const getBodyForResume = document.querySelector('body') as HTMLBodyElement
    getBodyForResume.append(scriptLink)
     
        }
     
}

