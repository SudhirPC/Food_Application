function navbar() {
  return `<div id="navbar">
  <img id="navimage" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTk9KpTxvz7Ny9gWA3-U8Qz4jNj6rLRsnYgxiILNkd8zgNv4_sD849P03Vv7pTqHiLiD8E&usqp=CAU" alt="">

    <div class="firstdiv" >
      <h3> <a href="index.html">Home</a> </h3>
      </div>
      <div class=searchdiv>
      <input type="text" id="getMeal" />
      <button id="Mealbutton">Search</button>
      </div>
     

    <div class="options">
      <h3><a href="Recipe.html">Latest</a></h3>
      <h3><a href="signup.html">Register</a></h3>
      <h3><a href="login.html">Login</a></h3>
      <h3 id="showname"></h3>

    </div>
  </div>`
}
export default navbar
