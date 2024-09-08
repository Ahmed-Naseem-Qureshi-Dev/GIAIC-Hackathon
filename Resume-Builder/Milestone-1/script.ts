// script.ts

// Toggle Skills Section Visibility
const toggleSkillsButton = document.getElementById('toggleSkills');
const skillsList = document.getElementById('skillsList');

// Ensure the Skills list is initially visible
skillsList!.style.display = 'block';

toggleSkillsButton?.addEventListener('click', () => {
    if (skillsList?.style.display === 'none') {
        skillsList.style.display = 'block';
        skillsList.style.opacity = '1';
    } else {
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
experienceList!.style.display = 'block';

toggleExperienceButton?.addEventListener('click', () => {
    if (experienceList?.style.display === 'none') {
        experienceList.style.display = 'block';
        experienceList.style.opacity = '1';
    } else {
        experienceList.style.opacity = '0';
        setTimeout(() => {
            experienceList.style.display = 'none';
        }, 500);
    }
});

// Dark Mode Toggle
const themeToggleButton = document.getElementById('themeToggle');
themeToggleButton?.addEventListener('click', () => {
    // Toggle the 'dark-mode' class on the body
    document.body.classList.toggle('dark-mode');
});
