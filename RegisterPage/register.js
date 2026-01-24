document.querySelector('.register-form').addEventListener('submit',function(e){
    e.preventDefault();
    const name=document.getElementById('name').value;
    const email=document.getElementById('email').value;
    const password=document.getElementById('password').value;
    const confirmPassword=document.getElementById('confirm-password').value;
    
    if(password!==confirmPassword){
        e.preventDefault(); //It will stops the form submission
        alert('Passwords does not match!');
        return;
    }
    console.log("hi");
    //save data into local storage
    let users=JSON.parse(localStorage.getItem("users")) || [];

    //checking if email id is already exists or not
    const userExists=users.some(user => user.email === email);
    
    if(userExists)
    {
        e.preventDefault();
        alert("Email already registered");
        return;
    }
    //Adding new user into an array
    users.push({
        name:name,
        email:email,
        password:password
    });
    //save back to local storage
    localStorage.setItem("users",JSON.stringify(users));    //Local Storage can only stores data in string form
    alert("Account created Successfully");  
});