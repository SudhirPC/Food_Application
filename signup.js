import navbar from "./component/navbar.js"
console.log(navbar)
let navbar_div=document.getElementById("navbar-container")
navbar_div.innerHTML =navbar();
var register=document.getElementById("registerid").addEventListener("click",function(){
    Register()
  })
let  Register=async()=>{
    try{
       let register_data={
        name:document.getElementById("name").value,
        email:document.getElementById("email").value,
        password:document.getElementById("password").value,
        username:document.getElementById("username").value,
        mobile:document.getElementById("mobile").value,
        description:document.getElementById("description").value,
        
   };
     register_data=JSON.stringify(register_data)
        let res=await fetch("https://masai-api-mocker.herokuapp.com/auth/register",{
            method:"POST",
            body:register_data,

            headers:{
                "Content-Type":"application/json",
            },
        });
        var data =await res.json();   
        console.log(data)

    }
    catch(err){
        console.log(err)
    }
  window.location.href="login.html"
}
