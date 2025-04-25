function resetPassword(){
    const email=document.getElementById('email').value;
    const newPassword=document.getElementById('new-password').value;
    const confirmPassword=document.getElementById('confirm-password').value;

    if(!email || !newPassword || !confirmPassword)
    {
        alert('please fill all the details');
        return;
    }

    if(newPassword!==confirmPassword)
    {
        alert('passwords does not match');
        return;
    }

    let users=JSON.parse(localStorage.getItem("users"))||[];
    
    let userFound=false;
    
    users=users.map(user => {
        if(user.email===email){
            user.password=newPassword;
            userFound=true;
        }
        return user;
    });

    if(!userFound)
    {
        alert('Email not found');
        return;
    }
    localStorage.setItem("users",JSON.stringify(users));
    alert('password changed successfully');
}