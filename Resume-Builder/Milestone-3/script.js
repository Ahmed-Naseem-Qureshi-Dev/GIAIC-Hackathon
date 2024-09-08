"use strict";
// script.ts
Object.defineProperty(exports, "__esModule", { value: true });
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
// Function to update the resume preview in real-time
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
    const skills = skillsInput.value ? skillsInput.value.split(',').map(skill => skill.trim()).join(', ') : "Skills: JavaScript, TypeScript, Python";
    previewSkills.textContent = skills;
}
// Event listeners for form input changes to trigger real-time updates
form.addEventListener('input', updateResume);
// Prevent form submission and generate alert
form.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Resume Generated! Check the live preview.');
});
// Dark Mode Toggle
const themeToggleButton = document.getElementById('themeToggle');
themeToggleButton?.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});
