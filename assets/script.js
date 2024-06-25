function getInfo(){
    const newName = document.getElementById("cityInput");
    const cityName = document.getElementById("cityName");
    cityName.innerHTML = newName.value;
}

getInfo();

fetch("https://api.openweathermap.org/data/2.5/forecast?q='NewName.value+'&appid=b78c9c7ce1b0bd7212ebb0b83effcbd7")
.then(response => response.json())
.then(data =>{
    console.log(data)
})