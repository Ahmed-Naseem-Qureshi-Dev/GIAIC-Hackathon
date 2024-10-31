let info = document.getElementById('info') as HTMLButtonElement;
let preview = document.getElementById('preview') as HTMLButtonElement;
let generate = document.getElementById('generate') as HTMLDivElement;
let look = document.getElementById('look') as HTMLDivElement;
let firstCard = document.getElementById('first-card') as HTMLDivElement;
let secondCard = document.getElementById('second-card') as HTMLDivElement;
let form = document.getElementById('resumeForm') as HTMLFormElement;
let nameInput = document.getElementById('name') as HTMLInputElement;
let emailInput = document.getElementById('email') as HTMLInputElement;
let num = document.getElementById('number') as HTMLInputElement;
let profilePicInput = document.getElementById('profile-image') as HTMLInputElement;
let degreeInput = document.getElementById('degree') as HTMLInputElement;
let institutionInput = document.getElementById('institution') as HTMLInputElement;
let gradYearInput = document.getElementById('gradYear') as HTMLInputElement;
let jobTitleInput = document.getElementById('jobTitle') as HTMLInputElement;
let companyInput = document.getElementById('company') as HTMLInputElement;
let descriptionInput = document.getElementById('description') as HTMLTextAreaElement;
let skillsInput = document.getElementById('skills') as HTMLInputElement;
let opene = document.getElementById('opener') as HTMLDivElement
let main = document.getElementById('main') as HTMLDivElement


let previewName = document.getElementById('previewName') as HTMLElement;
let previewEmail = document.getElementById('previewEmail') as HTMLElement;
let previewProfilePic = document.getElementById('previewProfilePic') as HTMLImageElement;
let previewEducation = document.getElementById('previewEducation') as HTMLElement;
let previewWork = document.getElementById('previewWork') as HTMLElement;
let previewSkills = document.getElementById('previewSkills') as HTMLElement;

setTimeout(() => {
    opene.style.display = 'none' ;
    main.style.display = 'block';
}, 7000);

preview.addEventListener('click', () => {
    generate.classList.add('hidden');
    generate.classList.remove('generate');
    look.classList.add('generate');
    look.classList.remove('hidden');
    secondCard.classList.remove('hidden');
    firstCard.classList.add('hidden');   
});
info.addEventListener('click', () => {
    look.classList.add('hidden');
    look.classList.remove('generate');
    generate.classList.add('generate');
    generate.classList.remove('hidden');
    firstCard.classList.remove('hidden');
    secondCard.classList.add('hidden'); 
});

let resumeLink = document.getElementById('url') as HTMLAnchorElement;
let downloadPdfButton = document.getElementById('downloadPdf') as HTMLButtonElement;

function updateResume() {
    previewName.textContent = nameInput.value || "Ahmed Naseem Qureshi";
    previewEmail.textContent = emailInput.value ? `Email: ${emailInput.value}` : "Email: ahmednq.dev@gmail.com";

    if (profilePicInput.value) {
        previewProfilePic.src = profilePicInput.value;
    }else{
        previewProfilePic.src = "profile-pic.jpg";
    }

    previewEducation.textContent = `${degreeInput.value || "Bachelor's Degree"} in ${institutionInput.value || "University"} (${gradYearInput.value || "2020"})`;
    previewWork.textContent = `${jobTitleInput.value || "Software Engineer"} at ${companyInput.value || "Company"} (${descriptionInput.value || "Job Description"})`;

    let skills = skillsInput.value ? skillsInput.value.split(',').map(skill => skill.trim()).join(', ') : "JavaScript, TypeScript, Python";
    previewSkills.textContent = skills;
}

let generateUniqueURL= () => {
    
    let username = previewName.innerText.toLowerCase()
    
    const shareableURL = `${window.location.origin}?username=${encodeURIComponent(
        username 
    )}`;
    
    resumeLink.href = shareableURL;
    resumeLink.textContent = "Click Here";
    ;
    console.log("I am running");
    
}

downloadPdfButton.addEventListener("click", () => {
    window.print(); // This opens the print dialog to allow saving as PDF
    console.log("Its me");
    
  });




form.addEventListener('input', updateResume);
form.addEventListener('submit', (e) => {
    e.preventDefault();
    // generateUniqueURL(); // Generate unique URL when the form is submitted
    alert('Resume Generated! Check the live preview and unique link.');
    generateUniqueURL()
    
});



