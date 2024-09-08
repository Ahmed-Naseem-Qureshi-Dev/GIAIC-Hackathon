"use strict";
// script.ts
// Toggle Skills Section Visibility
const toggleSkillsButton = document.getElementById('toggleSkills');
const skillsList = document.getElementById('skillsList');
// Ensure the Skills list is initially visible
skillsList.style.display = 'block';
toggleSkillsButton === null || toggleSkillsButton === void 0 ? void 0 : toggleSkillsButton.addEventListener('click', () => {
    if ((skillsList === null || skillsList === void 0 ? void 0 : skillsList.style.display) === 'none') {
        skillsList.style.display = 'block';
        skillsList.style.opacity = '1';
    }
    else {
        skillsList.style.opacity = '0';
        setTimeout(() => {
            skillsList.style.display = 'none';
        }, 500);
    }
});
// Toggle Experience Section Visibility
const toggleExperienceButton = document.getElementById('toggleExperience');
const experienceList = document.getElementById('experienceList');
// Ensure the Experience list is initially visible
experienceList.style.display = 'block';
toggleExperienceButton === null || toggleExperienceButton === void 0 ? void 0 : toggleExperienceButton.addEventListener('click', () => {
    if ((experienceList === null || experienceList === void 0 ? void 0 : experienceList.style.display) === 'none') {
        experienceList.style.display = 'block';
        experienceList.style.opacity = '1';
    }
    else {
        experienceList.style.opacity = '0';
        setTimeout(() => {
            experienceList.style.display = 'none';
        }, 500);
    }
});
// Dark Mode Toggle
const themeToggleButton = document.getElementById('themeToggle');
themeToggleButton === null || themeToggleButton === void 0 ? void 0 : themeToggleButton.addEventListener('click', () => {
    // Toggle the 'dark-mode' class on the body
    document.body.classList.toggle('dark-mode');
});
