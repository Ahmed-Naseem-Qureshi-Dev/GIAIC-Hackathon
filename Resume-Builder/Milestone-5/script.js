var info = document.getElementById('info');
var preview = document.getElementById('preview');
var generate = document.getElementById('generate');
var look = document.getElementById('look');
var firstCard = document.getElementById('first-card');
var secondCard = document.getElementById('second-card');
var form = document.getElementById('resumeForm');
var nameInput = document.getElementById('name');
var emailInput = document.getElementById('email');
var num = document.getElementById('number');
var profilePicInput = document.getElementById('profile-image');
var degreeInput = document.getElementById('degree');
var institutionInput = document.getElementById('institution');
var gradYearInput = document.getElementById('gradYear');
var jobTitleInput = document.getElementById('jobTitle');
var companyInput = document.getElementById('company');
var descriptionInput = document.getElementById('description');
var skillsInput = document.getElementById('skills');
var opene = document.getElementById('opener');
var main = document.getElementById('main');
var previewName = document.getElementById('previewName');
var previewEmail = document.getElementById('previewEmail');
var previewProfilePic = document.getElementById('previewProfilePic');
var previewEducation = document.getElementById('previewEducation');
var previewWork = document.getElementById('previewWork');
var previewSkills = document.getElementById('previewSkills');
setTimeout(function () {
    opene.style.display = 'none';
    main.style.display = 'block';
}, 7000);
preview.addEventListener('click', function () {
    generate.classList.add('hidden');
    generate.classList.remove('generate');
    look.classList.add('generate');
    look.classList.remove('hidden');
    secondCard.classList.remove('hidden');
    firstCard.classList.add('hidden');
});
info.addEventListener('click', function () {
    look.classList.add('hidden');
    look.classList.remove('generate');
    generate.classList.add('generate');
    generate.classList.remove('hidden');
    firstCard.classList.remove('hidden');
    secondCard.classList.add('hidden');
});
var resumeLink = document.getElementById('url');
var downloadPdfButton = document.getElementById('downloadPdf');
function updateResume() {
    previewName.textContent = nameInput.value || "Ahmed Naseem Qureshi";
    previewEmail.textContent = emailInput.value ? "Email: ".concat(emailInput.value) : "Email: ahmednq.dev@gmail.com";
    if (profilePicInput.value) {
        previewProfilePic.src = profilePicInput.value;
    }
    else {
        previewProfilePic.src = "profile-pic.jpg";
    }
    previewEducation.textContent = "".concat(degreeInput.value || "Bachelor's Degree", " in ").concat(institutionInput.value || "University", " (").concat(gradYearInput.value || "2020", ")");
    previewWork.textContent = "".concat(jobTitleInput.value || "Software Engineer", " at ").concat(companyInput.value || "Company", " (").concat(descriptionInput.value || "Job Description", ")");
    var skills = skillsInput.value ? skillsInput.value.split(',').map(function (skill) { return skill.trim(); }).join(', ') : "JavaScript, TypeScript, Python";
    previewSkills.textContent = skills;
}
var generateUniqueURL = function () {
    var username = previewName.innerText.toLowerCase();
    var shareableURL = "".concat(window.location.origin, "?username=").concat(encodeURIComponent(username));
    resumeLink.href = shareableURL;
    resumeLink.textContent = "Click Here";
    ;
    console.log("I am running");
};
downloadPdfButton.addEventListener("click", function () {
    window.print(); // This opens the print dialog to allow saving as PDF
    console.log("Its me");
});
form.addEventListener('input', updateResume);
form.addEventListener('submit', function (e) {
    e.preventDefault();
    // generateUniqueURL(); // Generate unique URL when the form is submitted
    alert('Resume Generated! Check the live preview and unique link.');
    generateUniqueURL();
});
