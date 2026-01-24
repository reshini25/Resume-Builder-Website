document.addEventListener("DOMContentLoaded",()=>{
    const urlParams = new URLSearchParams(window.location.search);
    const selectedTemplate = urlParams.get('template');
    
    document.getElementById('nextBtn').addEventListener('click',function(event){
        event.preventDefault();
        //collect form data
        const data={
            degree:document.getElementById("degree").value,
            istname:document.getElementById("istname").value,
            cgpa:document.getElementById("cgpa").value,
            eduCity:document.getElementById("edu-city").value,
            eduState:document.getElementById("edu-state").value,
            graduationDate:document.getElementById("date").value,
            school:document.getElementById("school").value,
            percentage:document.getElementById("per").value,
            schoolCity:document.getElementById("scl-city").value,
            schoolState:document.getElementById("scl-state").value
        };
        const existingData=JSON.parse(sessionStorage.getItem("resumeData"))||{};
        //saves form data temporarly
        sessionStorage.setItem("resumeData", JSON.stringify({ ...existingData, ...data }));
        //redirect to another page
        window.location.href = `../ResumeForm/page4.html?template=${selectedTemplate}`;
    });
});


