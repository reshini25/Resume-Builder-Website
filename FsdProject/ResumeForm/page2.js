document.addEventListener("DOMContentLoaded",()=>{
    const urlParams = new URLSearchParams(window.location.search);
    const selectedTemplate = urlParams.get('template');
    
    document.getElementById('nextBtn').addEventListener('click',function(event){
        event.preventDefault();
        //collect form data
        const data={
            summary:document.getElementById("summary").value
        };
        const existingData=JSON.parse(sessionStorage.getItem("resumeData"))||{};
        //saves form data temporarly
        sessionStorage.setItem("resumeData", JSON.stringify({ ...existingData, ...data }));
        //redirect to another page
        window.location.href = `../ResumeForm/page3.html?template=${selectedTemplate}`;
    });
});


