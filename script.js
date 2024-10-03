var form = document.getElementById('resume-form');
var resumeDisplayElement = document.getElementById('resume-display');
form.addEventListener('submit', function (event) {
    event.preventDefault();
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('Phone').value;
    var education = document.getElementById('education').value;
    var experience = document.getElementById('experience').value;
    var skills = document.getElementById('skills').value;
    var resumeHTML = "\n         <h2><b>Editable Resume<b></h2>\n         <h3>Personal Informatin</h3>\n         <p><b>Name:</b><span contenteditable = \"true\">".concat(name, "</span></p>\n          <p><b>Name:</b><span contenteditable = \"true\">").concat(email, "</span></p>\n           <p><b>Name:</b><span contenteditable = \"true\">").concat(phone, "</span></p>\n\n           <h3>Education</h3>\n           <p contenteditable = \"true\">").concat(education, "</h3>\n\n\n           <h3>Experience</h3>\n           <p contenteditable = \"true\">").concat(experience, "</h3>\n\n           <h3>Skills</h3>\n           <p contenteditable = \"true\">").concat(skills, "</h3>\n        ");
    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = resumeHTML;
    }
    else {
        console.error('The resume Display element is missing.');
    }
});
