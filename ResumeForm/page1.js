document.addEventListener("DOMContentLoaded",()=>{
    const urlParams = new URLSearchParams(window.location.search);
    const selectedTemplate = urlParams.get('template');
    
    document.getElementById('nextBtn').addEventListener('click',function(event){
        event.preventDefault();
        //collect form data
        const data={
            firstName:document.getElementById("name").value,
            lastName:document.getElementById("lastname").value,
            email:document.getElementById("email").value,
            phone:document.getElementById("phone").value,
            linkedin:document.getElementById("linkedin").value,
            city:document.getElementById("city").value,
            state:document.getElementById("state").value,
            country:document.getElementById("country").value,
            pincode:document.getElementById("pincode").value
        };
        const existingData=JSON.parse(sessionStorage.getItem("resumeData"))||{};
        //saves form data temporarly
        sessionStorage.setItem("resumeData", JSON.stringify({ ...existingData, ...data }));
        //redirect to another page
        window.location.href = `../ResumeForm/page2.html?template=${selectedTemplate}`;
    });
});


