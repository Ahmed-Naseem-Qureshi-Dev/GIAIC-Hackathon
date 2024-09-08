"use strict";
// Form Elements
const form = document.getElementById('resumeForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const profilePicInput = document.getElementById('profilePicture');
const degreeInput = document.getElementById('degree');
const institutionInput = document.getElementById('institution');
const gradYearInput = document.getElementById('gradYear');
const jobTitleInput = document.getElementById('jobTitle');
const companyInput = document.getElementById('company');
const descriptionInput = document.getElementById('description');
const skillsInput = document.getElementById('skills');
// Resume Preview Elements
const previewName = document.getElementById('previewName');
const previewEmail = document.getElementById('previewEmail');
const previewProfilePic = document.getElementById('previewProfilePic');
const previewEducation = document.getElementById('previewEducation');
const previewWork = document.getElementById('previewWork');
const previewSkills = document.getElementById('previewSkills');
// Editable sections (new addition)
const editableSections = {
    name: previewName,
    email: previewEmail,
    education: previewEducation,
    work: previewWork,
    skills: previewSkills
};
// Function to update the resume preview in real-time (already existing)
function updateResume() {
    previewName.textContent = nameInput.value || "John Doe";
    previewEmail.textContent = emailInput.value ? `Email: ${emailInput.value}` : "Email: john.doe@example.com";
    // Update profile picture if provided
    if (profilePicInput.value) {
        previewProfilePic.src = profilePicInput.value;
    }
    else {
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
    var _a, _b, _c;
    nameInput.value = editableSections.name.textContent || '';
    emailInput.value = ((_a = editableSections.email.textContent) === null || _a === void 0 ? void 0 : _a.replace('Email: ', '')) || '';
    const educationMatch = (_b = editableSections.education.textContent) === null || _b === void 0 ? void 0 : _b.match(/(.*?) in (.*?) \((.*?)\)/);
    if (educationMatch) {
        degreeInput.value = educationMatch[1];
        institutionInput.value = educationMatch[2];
        gradYearInput.value = educationMatch[3];
    }
    const workMatch = (_c = editableSections.work.textContent) === null || _c === void 0 ? void 0 : _c.match(/(.*?) at (.*?) \(/);
    if (workMatch) {
        jobTitleInput.value = workMatch[1];
        companyInput.value = workMatch[2];
    }
    skillsInput.value = editableSections.skills.textContent || '';
}
// Event listeners for form input changes (already existing)
form.addEventListener('input', updateResume);
// Prevent form submission and generate alert (already existing)
form.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Resume Generated! Check the live preview.');
});
// New event listeners for changes in the editable resume sections
Object.values(editableSections).forEach(section => {
    section.addEventListener('input', syncPreviewToForm); // Sync edits back to the form
});
// Dark Mode Toggle (already existing)
const themeToggleButton = document.getElementById('themeToggle');
themeToggleButton === null || themeToggleButton === void 0 ? void 0 : themeToggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});
