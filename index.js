
const search = document.querySelector("#search")
const submit = document.querySelector("#submit")
const container = document.querySelector(".container")




submit.addEventListener("click", function (e) {
  e.preventDefault()
  submit.style.backgroundColor = "blue"
  submit.style.color = "#fff"


  var usersInput = search.value

  let apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${usersInput}&units=imperial&appid=39b007c646e950e12bd0aad267853d92`
  axios.get(apiUrl).then(function (res) {
    const respond = res.data



    //console.log(respond)
    const imgIcon = `http://api.openweathermap.org/img/w/${respond.weather[0].icon}.png`
    const createEle = document.createElement("div")
    createEle.classList.add("append")

    //create city element
    const city = document.createElement("h3")
    createEle.appendChild(city)
    city.innerHTML = ` ${usersInput}`
    city.classList.add("city")
    //create img ele
    const img = document.createElement("img")
    //img.classList.add("")
    img.src = imgIcon
    createEle.appendChild(img)
    img.classList.add("img")

    //create long and latt
    const latt = document.createElement("p")
    latt.innerHTML = `Latitude: ${respond.coord.lat}`
    createEle.appendChild(latt)
    latt.classList.add("latt")

    const long = document.createElement("p")
    long.innerHTML = `Longitude: ${respond.coord.lon}`
    createEle.appendChild(long)
    long.classList.add("long")

    const des = document.createElement("p")
    des.innerHTML = `Description :${respond.weather[0].description}`
    createEle.appendChild(des)
    des.classList.add("des")

    const temp = document.createElement("h5")
    temp.innerHTML = `Temperature : ${respond.main.temp}`
    createEle.appendChild(temp)
    temp.classList.add("temp")

    const country = document.createElement("h4")
    country.innerHTML = ` Country :${respond.sys.country}`
    createEle.appendChild(country)
    country.classList.add("country")
    
    container.appendChild(createEle)
    container.classList.add("container1")
  })
 
})

//  if ((search.value).length === 0) {
//    // container.parentElement.removeChild(city)
//     container.classList.remove("container1")
//     }





//      fetch ("http://api.openweathermap.org/data/2.5/weather?q=osun&appid=39b007c646e950e12bd0aad267853d92").then(function (res) {
//     console.log(res.data)
// })

