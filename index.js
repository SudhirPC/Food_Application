import navbar from "./component/navbar.js"
console.log(navbar)
let navbar_div=document.getElementById("navbar-container")
navbar_div.innerHTML =navbar();

let Meal=document.getElementById("getMeal")
Meal.addEventListener("input",function(){
  debounce(main,1000)
})
  const MealBySearch=async()=>{
    var input=document.getElementById("getMeal").value;
    // console.log(input)
    let url=`https://www.themealdb.com/api/json/v1/1/search.php?s=${input}`
      try{
             var res=await fetch(url)

             var data=await res.json();
             console.log(data)
             return(data)
      }
      catch(err){
          console.log(err)
      }
  }
  
  async function main() {
    let data = await MealBySearch()
  
    if (data === undefined) {
      return false
    }
    displaymeal(data)
    console.log(data)
  }
  let timerId
function debounce(func, delay) {
  if (timerId) {
    clearTimeout(timerId)
  }
  timerId = setTimeout(function () {
    func()
  }, delay)
}


  const RandomMeal=async()=>{
    let url=`https://www.themealdb.com/api/json/v1/1/random.php?`
    try{
         var res=await fetch(url)
         var data=await res.json();
         DisplayRandom(data)
         console.log(data)
    }
    catch(err){
      console.log(err)
    }
  }
  RandomMeal()
  const DisplayRandom=(data)=>{
    container.innerHTML=""
    data.meals.forEach(function (el){
    var div=document.createElement("div")
    div.setAttribute("class", "firstdiv1")

    var img=document.createElement("img")
    img.src=el.strMealThumb
    
      

    var div2=document.createElement("div")
    div2.setAttribute("class", "seconddiv")
    var div3=document.createElement("div")
    div3.setAttribute("class", "thirddiv")
    var type=document.createElement("h2")
    type.innerHTML="Recipe Type:"+el.strArea

    var name=document.createElement("h2")
    name.innerHTML="Recipe name:"+el.strMeal

    var recipy=document.createElement("p")
    recipy.innerHTML="Recipe:"+el.strInstructions
     div3.append(name,type)
     div2.append(div3,recipy)

    div.append(img)
      
    container.append(div,div2)
  })
}

  let meals=document.getElementById("meals")
  function displaymeal(data) {
    meals.innerHTML = ''
    console.log(data)
  
    data.meals.forEach(function (el) {
      let div = document.createElement('div')
      let Title = document.createElement('button')
      Title.innerText = el.strMeal
      Title.setAttribute('class', 'Title')
      Title.addEventListener("click" ,function(){
        DisplayData(el)
      
    })
  
      div.append(Title)
      meals.append(div)
    })
  }
var container=document.getElementById("container")
  const DisplayData=(el)=>{
      container.innerHTML=""
      meals.innerHTML = ''
      var div=document.createElement("div")
      div.setAttribute("class", "firstdiv1")

      var img=document.createElement("img")
      img.src=el.strMealThumb
      
        

      var div2=document.createElement("div")
      div2.setAttribute("class", "seconddiv")
      var div3=document.createElement("div")
      div3.setAttribute("class", "thirddiv")
      var type=document.createElement("h2")
      type.innerHTML="Recipe Type:"+el.strArea

      var name=document.createElement("h2")
      name.innerHTML="Recipe name:"+el.strMeal

      var recipy=document.createElement("p")
      recipy.innerHTML="Recipe:"+el.strInstructions
       div3.append(name,type)
       div2.append(div3,recipy)

      div.append(img)
        
      container.append(div,div2)

  }
  var userdata ;
  // console.log(userdata)
  var h3 = document.getElementById('showname')
  function showname(userdata) {
     userdata =JSON.parse(localStorage.getItem("username"))
    if(userdata !== undefined){
      h3.innerHTML=userdata.name
    }
    else{
    h3.innerHTML = ""
    }
  }
  showname(userdata)