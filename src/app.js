// Api 
const apiKey = "f8137048d0461e134ea214a4760d67b9";
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=`;

// html components 
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");


// func to fetch and display data
async function getWeatherData(location) {
    //fetch data from api
    const response = await fetch(apiUrl +location+ `&appid=${apiKey}`);

    if(response.status == 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }
    else{
        var data = await response.json();

        console.log(data);

        //dispalay data on page
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "&deg;c";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

        //change weather icon according to weather
        if(data.weather[0].main == "Clouds"){
            weatherIcon.src = "/src/Images/clouds.png";
        }
        else if(data.weather[0].main == "Clear"){
            weatherIcon.src = "/src/Images/clear.png";
        }
        else if(data.weather[0].main == "Rain"){
            weatherIcon.src = "/src/Images/rain.png";
        }
        else if(data.weather[0].main == "Drizzle"){
            weatherIcon.src = "/src/Images/drizzle.png";
        }
        else if(data.weather[0].main == "Mist"){
            weatherIcon.src = "/src/Images/mist.png";
        }

        document.querySelector(".error").style.display = "none";
        document.querySelector(".weather").style.display = "block";
    }

    
}

// on click of btn search for location in searchbox 
searchBtn.addEventListener("click", ()=> {
    getWeatherData(searchBox.value);
})


