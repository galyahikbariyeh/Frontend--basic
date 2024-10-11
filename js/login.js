var registerForm=document.getElementById('registerForm')
var email=document.getElementById('form2Example1')
var password=document.getElementById('form2Example2')
var allUsers=JSON.parse(localStorage.getItem('userData')) || []
registerForm.addEventListener('submit',function(event){
    event.preventDefault();
    // var userFound=false
console.log(email.value)
console.log(password.value)
for(var i=0;i<allUsers.length;i++){
if(allUsers[i].email === email.value && allUsers[i].password === password.value){
    userFound=true
}
}
if(userFound){
    // alert('login passed')
    Swal.fire({
        title: "Sweet!",
        text: "Modal with a custom image.",
        imageUrl: "https://unsplash.it/400/200",
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: "Custom image"
      });
    
 window.location.href='res.html'
}
     
else{
    Swal.fire({
        title: "wrong",
        text: "Modal with a custom image.",
        imageUrl: "https://unsplash.it/400/200",
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: "Custom image"
      });
   
    // alert('login failed')
}
// for(var i=0;i<allUsers.length;i++){
//     if(allUsers[i].email == email.value && allUsers[i].password == password.value){
//         console.log('yes')
//         alert('good')
//         break
        
//     }
    
//     else{
//         console.log('no')
//         alert('not')
//         break
//     }
//     }
    
    



})