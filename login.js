import navbar from './component/navbar.js'
let navbar_div = document.getElementById('navbar-container')
navbar_div.innerHTML = navbar()
var login = document
  .getElementById('loginid')
  .addEventListener('click', function () {
    Login()
  })
let Login = async () => {
  try {
    let login_data = {
      username: document.getElementById('login-username').value,
      password: document.getElementById('login-password').value,
    }
    let login_data_json = JSON.stringify(login_data)

    let res = await fetch('https://masai-api-mocker.herokuapp.com/auth/login', {
      method: 'POST',
      body: login_data_json,

      headers: {
        'Content-Type': 'application/json',
      },
    })
    let data = await res.json()
    console.log(data)
    getuser(login_data.username, data.token)
  } catch (err) {
    console.log(err)
  }
}
// 00b7270130eb73f406d9cf06e4b93fe1

let getuser = async (username, token) => {
  console.log(username, token)
  try {
    let res = await fetch(
      `https://masai-api-mocker.herokuapp.com/user/${username}`,
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      },
    )

    let data = await res.json()
    console.log('userdata', data)
    localStorage.setItem("username",JSON.stringify(data))
    showname(data)
  } catch (error) {
    console.log(error)
  }
  alert('Login Successfully')
  window.location.href = 'index.html'
}
function showname(data) {
  var h3 = document.getElementById('showname')
  h3.innerHTML = data.name
}
