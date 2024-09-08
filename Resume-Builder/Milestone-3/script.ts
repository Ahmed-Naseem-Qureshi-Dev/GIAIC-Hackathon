// script.ts

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

// Function to update the resume preview in real-time
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


