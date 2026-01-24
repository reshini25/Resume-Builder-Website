document.addEventListener("DOMContentLoaded", () => {

const data = JSON.parse(sessionStorage.getItem('resumeData'));
const container = document.getElementById('resumeContainer');

if (!data) {
    console.error('No resume data found in sessionStorage');
    container.innerHTML = '<p>No resume data available. Please fill out the form first.</p>';
    return;
}

// Get the selected template from URL
const urlParams = new URLSearchParams(window.location.search);
const selectedTemplate = urlParams.get('template');

// Switch between templates
switch(selectedTemplate) {
    case "1":
        generateSimpleResume(data,container);
        break;
    case "2":
        generateModernResume(data,container);
        break;
    case "3":
        generateTechnicalResume(data,container);
        break;
    default:
        generateSimpleResume(data,container);
        break;
}
});
// Simple Template Function
function generateSimpleResume(data,container) {
    container.innerHTML = `
        <div class="simple-template">
            <h1>${data.firstName} ${data.lastName}</h1>
            <p><strong>Email:</strong> ${data.email}</p>
            <p><strong>Phone:</strong> ${data.phone}</p>
            <p><strong>LinkedIn:</strong> ${data.linkedin}</p>
            <p><strong>Location:</strong> ${data.city}, ${data.state}, ${data.country} - ${data.pincode}</p>
            <hr>
            <h2>Summary</h2> 
            <p>${data.summary}</p>
            <hr>
            <h2>Education</h2>
            <p><strong>Degree:</strong> ${data.degree}</p>
            <p><strong>Institution Name:</strong> ${data.istname}</p>
            <p><strong>CGPA:</strong> ${data.cgpa}</p>
            <p><strong>Location:</strong> ${data.eduCity}, ${data.eduState}</p>
            <p><strong>Graduation Date:</strong> ${data.graduationDate}</p>
            <p><strong>School:</strong> ${data.school}</p>
            <p><strong>Percentage:</strong> ${data.percentage}</p>
            <p><strong>Location:</strong> ${data.schoolCity}, ${data.schoolState}</p>
            <hr>
            <h2>Work Experience</h2>
            <p><strong>Job Title:</strong> ${data.jobTitle}</p>
            <p><strong>Company Name:</strong> ${data.companyName}</p>
            <p><strong>Start Date:</strong> ${data.startDate}</p>
            <p><strong>End Date:</strong> ${data.endDate}</p>
            <hr>
            <h2>Skills</h2>
            <ul>
                ${data.skills.map(skill => `<li>${skill}</li>`).join('')}
            </ul>
        </div>
    `;
}

function generateModernResume(data,container){
    container.innerHTML=`
    <div class="modern-template">
        <h1>${data.firstName} ${data.lastName}</h1>
        <div class="mrpara">
            <p><strong>Email:</strong> ${data.email}</p>
            <p><strong>Phone:</strong> ${data.phone}</p>
            <p><strong>LinkedIn:</strong> ${data.linkedin}</p>
            <p><strong>Location:</strong> ${data.city}, ${data.state}, ${data.country} - ${data.pincode}</p>
        </div>
        <hr>
        <h2>Summary</h2> 
        <p>${data.summary}</p>
        <hr>
        <h2>Education</h2>
        <p><strong>Degree:</strong> ${data.degree}</p>
        <p><strong>Institution Name:</strong> ${data.istname}</p>
        <p><strong>CGPA:</strong> ${data.cgpa}</p>
        <p><strong>Location:</strong> ${data.eduCity}, ${data.eduState}</p>
        <p><strong>Graduation Date:</strong> ${data.graduationDate}</p>
        <p><strong>School:</strong> ${data.school}</p>
        <p><strong>Percentage:</strong> ${data.percentage}</p>
        <p><strong>Location:</strong> ${data.schoolCity}, ${data.schoolState}</p>
        <hr>
        <h2>Work Experience</h2>
        <p><strong>Job Title:</strong> ${data.jobTitle}</p>
        <p><strong>Company Name:</strong> ${data.companyName}</p>
        <p><strong>Start Date:</strong> ${data.startDate}</p>
        <p><strong>End Date:</strong> ${data.endDate}</p>
        <hr>
            <h2>Skills</h2>
        <ul>
            ${data.skills.map(skill => `<li>${skill}</li>`).join('')}
        </ul>
    </div>
    `;
}

function generateTechnicalResume(data,container){
    container.innerHTML=`
    <div class="technical-template">
        <h1>${data.firstName} ${data.lastName}</h1>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Phone:</strong> ${data.phone}</p>
        <p><strong>LinkedIn:</strong> ${data.linkedin}</p>
        <p><strong>Location:</strong> ${data.city}, ${data.state}, ${data.country} - ${data.pincode}</p>
        <hr>
        <h2>Summary</h2> 
        <p>${data.summary}</p>
        <hr>
        <h2>Education</h2>
        <p><strong>Degree:</strong> ${data.degree}</p>
        <p><strong>Institution Name:</strong> ${data.istname}</p>
        <p><strong>CGPA:</strong> ${data.cgpa}</p>
        <p><strong>Location:</strong> ${data.eduCity}, ${data.eduState}</p>
        <p><strong>Graduation Date:</strong> ${data.graduationDate}</p>
        <p><strong>School:</strong> ${data.school}</p>
        <p><strong>Percentage:</strong> ${data.percentage}</p>
        <p><strong>Location:</strong> ${data.schoolCity}, ${data.schoolState}</p>
        <hr>
        <h2>Work Experience</h2>
        <p><strong>Job Title:</strong> ${data.jobTitle}</p>
        <p><strong>Company Name:</strong> ${data.companyName}</p>
        <p><strong>Start Date:</strong> ${data.startDate}</p>
        <p><strong>End Date:</strong> ${data.endDate}</p>
        <hr>
            <h2>Skills</h2>
        <ul>
            ${data.skills.map(skill => `<li>${skill}</li>`).join('')}
        </ul>
    </div>
    `;
} 

document.getElementById('downloadResumeBtn').addEventListener('click', () => {
    const container = document.getElementById('resumeContainer');
    
    // Convert the HTML content of the resumeContainer to PDF
    const options = {
        margin:       0.5,
        filename:     'resume.pdf',
        image:        { type: 'jpeg', quality: 0.98 },
        html2canvas:  { scale: 4 },
        jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
    };
    
    // Capture the styled HTML and convert it to PDF
    html2pdf().from(container).set(options).save();
});
