import navbar from "./component/navbar.js"
console.log(navbar)
let navbar_div=document.getElementById("navbar-container")
navbar_div.innerHTML =navbar();



const RandomMeal=async()=>{
    let url=`https://www.themealdb.com/api/json/v1/1/filter.php?a=American`
    try{
         var res=await fetch(url)
         var data=await res.json();
         DisplayData(data)
         console.log(data)
    }
    catch(err){
      console.log(err)
    }
  }
  RandomMeal()

    var container2=document.getElementById("container2")
  const DisplayData=(data)=>{

    data.meals.forEach(function(el){
           var div=document.createElement("div")

           var img=document.createElement("img")
           img.src=el.strMealThumb
           img.setAttribute("class","gridimage")

           var name=document.createElement("h3")
           name.innerHTML=el.strMeal

           var button=document.createElement("button")
           button.innerHTML="More"

           button.addEventListener("click",function(){
               window.location.href="Details.html"
           })

           div.append(img,name,button)

           container2.append(div)
    })
  }
  