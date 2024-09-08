// Form Elements
const form = document.getElementById('resumeForm') as HTMLFormElement;
const nameInput = document.getElementById('name') as HTMLInputElement;
const emailInput = document.getElementById('email') as HTMLInputElement;
const profilePicInput = document.getElementById('profilePicture') as HTMLInputElement;
const degreeInput = document.getElementById('degree') as HTMLInputElement;
const institutionInput = document.getElementById('institution') as HTMLInputElement;
const gradYearInput = document.getElementById('gradYear') as HTMLInputElement;
const jobTitleInput = document.getElementById('jobTitle') as HTMLInputElement;
const companyInput = document.getElementById('company') as HTMLInputElement;
const descriptionInput = document.getElementById('description') as HTMLTextAreaElement;
const skillsInput = document.getElementById('skills') as HTMLInputElement;

// Resume Preview Elements
const previewName = document.getElementById('previewName') as HTMLElement;
const previewEmail = document.getElementById('previewEmail') as HTMLElement;
const previewProfilePic = document.getElementById('previewProfilePic') as HTMLImageElement;
const previewEducation = document.getElementById('previewEducation') as HTMLElement;
const previewWork = document.getElementById('previewWork') as HTMLElement;
const previewSkills = document.getElementById('previewSkills') as HTMLElement;

// Editable sections (new addition)
const editableSections = {
    name: previewName,
    email: previewEmail,
    education: previewEducation,
    work: previewWork,
    skills: previewSkills
};

// Additional Elements for unique URL, copy link, and download PDF
const resumeLink = document.getElementById('resumeLink') as HTMLElement;
const copyLinkButton = document.getElementById('copyLink') as HTMLButtonElement;
const downloadPdfButton = document.getElementById('downloadPdf') as HTMLButtonElement;

// Function to update the resume preview in real-time (already existing)
function updateResume() {
    previewName.textContent = nameInput.value || "John Doe";
    previewEmail.textContent = emailInput.value ? `Email: ${emailInput.value}` : "Email: john.doe@example.com";

    // Update profile picture if provided
    if (profilePicInput.value) {
        previewProfilePic.src = profilePicInput.value;
    } else {
        previewProfilePic.src = "assets/profile-pic.jpg"; // Default image
    }

    previewEducation.textContent = `${degreeInput.value || "Bachelor's Degree"} in ${institutionInput.value || "University"} (${gradYearInput.value || "2020"})`;
    previewWork.textContent = `${jobTitleInput.value || "Software Engineer"} at ${companyInput.value || "Company"} (${descriptionInput.value || "Job Description"})`;

    // Convert skills from comma-separated string to list
    const skills = skillsInput.value ? skillsInput.value.split(',').map(skill => skill.trim()).join(', ') : "JavaScript, TypeScript, Python";
    previewSkills.textContent = skills;
}

// New function: Sync changes made in the preview back to form inputs
function syncPreviewToForm() {
    nameInput.value = editableSections.name.textContent || '';
    emailInput.value = editableSections.email.textContent?.replace('Email: ', '') || '';

    const educationMatch = editableSections.education.textContent?.match(/(.*?) in (.*?) \((.*?)\)/);
    if (educationMatch) {
        degreeInput.value = educationMatch[1];
        institutionInput.value = educationMatch[2];
        gradYearInput.value = educationMatch[3];
    }

    const workMatch = editableSections.work.textContent?.match(/(.*?) at (.*?) \(/);
    if (workMatch) {
        jobTitleInput.value = workMatch[1];
        companyInput.value = workMatch[2];
    }

    skillsInput.value = editableSections.skills.textContent || '';
}

// New function: Generate unique URL based on the user's name
function generateUniqueURL() {
    const username = nameInput.value || "john-doe"; // Default to 'john-doe' if no name is provided
    const uniqueURL = `${username.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '')}.vercel.app/resume`;
    resumeLink.textContent = uniqueURL;
    resumeLink.setAttribute('href', `https://${uniqueURL}`); // Set the link href attribute
}

// New function: Copy the generated URL to clipboard
function copyLinkToClipboard() {
    const tempInput = document.createElement('input');
    tempInput.value = resumeLink.textContent || '';
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand('copy');
    document.body.removeChild(tempInput);
    alert('Resume link copied to clipboard!');
}

// New function: Download the resume as a PDF
function downloadResumeAsPDF() {
    const element = document.getElementById('resumePreview') as HTMLElement;
    html2pdf().from(element).save('resume.pdf'); // Use html2pdf.js to convert the resume to PDF
}

// Event listeners for form input changes (already existing)
form.addEventListener('input', updateResume);

// Prevent form submission and generate alert (already existing)
form.addEventListener('submit', (e) => {
    e.preventDefault();
    generateUniqueURL(); // Generate unique URL when the form is submitted
    alert('Resume Generated! Check the live preview and unique link.');
});

// New event listeners for changes in the editable resume sections
Object.values(editableSections).forEach(section => {
    section.addEventListener('input', syncPreviewToForm); // Sync edits back to the form
});

// Event listeners for sharing and PDF download functionalities
copyLinkButton.addEventListener('click', copyLinkToClipboard); // Copy link event
downloadPdfButton.addEventListener('click', downloadResumeAsPDF); // Download PDF event

// Dark Mode Toggle (already existing)
const themeToggleButton = document.getElementById('themeToggle');
themeToggleButton?.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});
