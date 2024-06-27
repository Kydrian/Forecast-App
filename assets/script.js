const searchBtn = document.getElementById('search-btn')
const cityInput = document.getElementById('city-input')
searchBtn.addEventListener('click', getWeather) 




function getWeather(event) {
    event.preventDefault();
    const city = cityInput.value;
const requestUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=b78c9c7ce1b0bd7212ebb0b83effcbd7&units=imperial`

fetch(requestUrl)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
    // console.log(data.list[4].main.temp)
    // console.log(data.list[4].wind.speed)
    // console.log(data.list[4].main.humidity)
    // console.log(data.list[2].weather[1].icon)


const currentIcon = document.getElementById('img1')
const temp1 = document.getElementById('day1temp')
const wind1 = document.getElementById('day1wind')
const humid1 = document.getElementById('day1humid')


const temp2 = document.getElementById('day2temp')
const wind2 = document.getElementById('day2wind')
const humid2 = document.getElementById('day2humid')
const currentIcon2 = document.getElementById('img2')

const currentIcon3 = document.getElementById('img3')
const temp3 = document.getElementById('day3temp')
const wind3 = document.getElementById('day3wind')
const humid3 = document.getElementById('day3humid')

const currentIcon4 = document.getElementById('img4')
const temp4 = document.getElementById('day4temp')
const wind4 = document.getElementById('day4wind')
const humid4 = document.getElementById('day4humid')

const currentIcon5 = document.getElementById('img5')
const temp5 = document.getElementById('day5temp')
const wind5 = document.getElementById('day5wind')
const humid5 = document.getElementById('day5humid')


temp1.textContent= 'Temp: ' + data.list[0].main.temp
wind1.textContent='Wind mph: ' + data.list[0].wind.speed
humid1.textContent='humidity' + data.list[0].main.humidity
const iconCode1 = data.list[0].weather[0].icon
const iconURL1= `https://openweathermap.org/img/wn/${iconCode1}@2x.png`
currentIcon.src = iconURL1

temp2.textContent='Temp: ' + data.list[1].main.temp
wind2.textContent='Wind mph: ' + data.list[1].wind.speed
humid2.textContent='humidity: ' + data.list[1].main.humidity
const iconCode2 = data.list[1].weather[0].icon
const iconURL2= `https://openweathermap.org/img/wn/${iconCode2}@2x.png`
currentIcon2.src = iconURL2

temp3.textContent='Temp: ' + data.list[2].main.temp
wind3.textContent='Wind mph: ' +data.list[2].wind.speed
humid3.textContent='humidity: ' + data.list[2].main.humidity
const iconCode3 = data.list[2].weather[0].icon
const iconURL3= `https://openweathermap.org/img/wn/${iconCode3}@2x.png`
currentIcon3.src = iconURL3

temp4.textContent='Temp: ' + data.list[3].main.temp
wind4.textContent='Wind mph: ' +data.list[3].wind.speed
humid4.textContent='humidity: ' + data.list[3].main.humidity
const iconCode4 = data.list[3].weather[0].icon
const iconURL4= `https://openweathermap.org/img/wn/${iconCode4}@2x.png`
currentIcon4.src = iconURL4

temp5.textContent='Temp: ' + data.list[4].main.temp
wind5.textContent='Wind mph: ' + data.list[4].wind.speed
humid5.textContent='humidity: ' + data.list[4].main.humidity
const iconCode5 = data.list[4].weather[0].icon
const iconURL5= `https://openweathermap.org/img/wn/${iconCode5}@2x.png`
currentIcon5.src = iconURL5
    })
}


function displayWeather(data) {

    const temperature = data.main.temp;
    const wind = data.wind[2];
    const humidity = data.main.humidity
    const Icon = data.weather[0].icon1
    

}
