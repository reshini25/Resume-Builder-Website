document.querySelector('.login-form').addEventListener('submit',function(e){
    e.preventDefault();
    const email=document.getElementById('email').value;
    const password=document.getElementById('password').value;

    //Get users from Local Storage
    const users=JSON.parse(localStorage.getItem("users")) || [];

    //Checking if email and password matches with the mail and password saved in the local storage
    const validUser=users.find(user => user.email===email && user.password===password);

    if(validUser)
    {
        alert(`Welcome , ${validUser.name}`);
        window.location.href='../HomePage/homepage.html';
    }
    else
    {
        alert('Invalid email or password');
    }
});