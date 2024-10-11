var userForm=document.getElementById('userForm')
var userName=document.getElementById('form3Example1c')
var email=document.getElementById('form3Example3c')
var password=document.getElementById('form3Example4c')
var confirmPass=document.getElementById('form3Example4cd')
var allUsers=JSON.parse(localStorage.getItem('userData'))||[]
userForm.addEventListener('submit',function(event){
event.preventDefault();
console.log(userName.value)
console.log(email.value)
console.log(password.value)
console.log(confirmPass.value)

var userData={
    userName:userName.value,
    email:email.value,
    password:password.value,
    confirmPass:confirmPass.value

}
//1 way
// if(password.value !== confirmPass.value){
// alert('password and confirm pass are not the same')
//     return
// }
//2 way
console.log(allUsers)
if( password.value == confirmPass.value){
    allUsers.push(userData)
}
else{
    alert('password and confirm pass are not the same')
}


// allUsers.push(userData)
localStorage.setItem('userData',JSON.stringify(allUsers))

})