document.addEventListener("DOMContentLoaded",()=>{
    const urlParams = new URLSearchParams(window.location.search);
    const selectedTemplate = urlParams.get('template');
    
    document.getElementById('nextBtn').addEventListener('click',function(event){
        event.preventDefault();
        //collect form data
        const data={
            skills:Array.from(document.querySelectorAll('input[type="checkbox"]:checked')).map(cb=>cb.value)
        };
        const existingData=JSON.parse(sessionStorage.getItem("resumeData"))||{};
        //saves form data temporarly
        sessionStorage.setItem("resumeData", JSON.stringify({ ...existingData, ...data }));
        //redirect to another page
        window.location.href = `../Resume/resume.html?template=${selectedTemplate}`;
    });
});


