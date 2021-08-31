
// const loadForcast = async () => {
//     const inputField = document.getElementById('input-field')
//     const inputValue = inputField.value
//     const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputValue}&appid=2b52f3434120d2763fbf7816c47a0928&units=metric`
//     const response = await fetch(url)
//     const data = await response.json()
//     displayData(data)
// }

// const displayData = forcast => {
//     const weatherIcon = document.getElementById('weather-icon')
//     weatherIcon.setAttribute('src', `https://openweathermap.org/img/wn/${forcast.weather[0].icon}@2x.png`)

//     const cityName = document.getElementById('city-name')
//     const temperature = document.getElementById('temp')
//     const situation = document.getElementById('view')

//     cityName.innerText = forcast.name
//     temperature.innerText = Math.round(forcast.main.temp)
//     situation.innerText = forcast.weather[0].description
//     console.log(forcast)
// }


//This function is made for catching the search value
const cityInput = (id) => {
    const inputField = document.getElementById(id)
    const inputValue = inputField.value
    return inputValue
}

//This is the API caller function
const loadForcast = async (cityName, diplayFunc) => {
    const city = cityName

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=2b52f3434120d2763fbf7816c47a0928&units=metric`
    const response = await fetch(url)
    const data = await response.json()

    return diplayFunc(data)
}

// This is the display function
const displayData = forcast => {
    const weatherIcon = document.getElementById('weather-icon')
    weatherIcon.setAttribute('src', `https://openweathermap.org/img/wn/${forcast.weather[0].icon}@2x.png`)

    const cityName = document.getElementById('city-name')
    const temperature = document.getElementById('temp')
    const situation = document.getElementById('view')

    cityName.innerText = forcast.name
    temperature.innerText = Math.round(forcast.main.temp)
    situation.innerText = forcast.weather[0].description
}

//Here defaut location's Forecast is being displayed
loadForcast('feni', displayData)










