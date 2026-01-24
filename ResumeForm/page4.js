document.addEventListener("DOMContentLoaded",()=>{
    const urlParams = new URLSearchParams(window.location.search);
    const selectedTemplate = urlParams.get('template');
    
    document.getElementById('nextBtn').addEventListener('click',function(event){
        event.preventDefault();
        //collect form data
        const data={
            jobTitle:document.getElementById("title").value,
            companyName:document.getElementById("cname").value,
            weCity:document.getElementById("we-city").value,
            weState:document.getElementById("we-state").value,
            startDate:document.getElementById("startdate").value,
            endDate:document.getElementById("enddate").value
        };
        const existingData=JSON.parse(sessionStorage.getItem("resumeData"))||{};
        //saves form data temporarly
        sessionStorage.setItem("resumeData", JSON.stringify({ ...existingData, ...data }));
        //redirect to another page
        window.location.href = `../ResumeForm/page5.html?template=${selectedTemplate}`;
    });
});


