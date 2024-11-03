let Images = document.createElement("img");
let big = document.getElementById("image");
big.appendChild(Images);
let key = "51b677bfc8ecdb94053503adab7fc3f9";
let city;


async function funcApi(text) {
    city = document.querySelector("input").value;
    try{
        let url = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`
        );
        console.log(url);
        let jurl = await url.json();
        console.log(jurl);

        let cityIs = document.querySelector(".city");
        let temp = document.querySelector(".temperature");
        let hum = document.querySelector(".humidity");
        let pressure = document.querySelector(".pressure");
        let windSpeed = document.querySelector(".wind-speed");
        let description = document.querySelector(".description");
        
        cityIs.innerHTML = `  <i class="fa-duotone fa-solid fa-city"></i> CITY NAME: ${city}`;
        temp.innerHTML = `<i class="fa-solid fa-temperature-three-quarters"></i>TEMPERATURE: ${jurl.main.temp}`;
        hum.innerHTML = ` <i class="fa-solid fa-droplet"></i> HUMIDITY: ${jurl.main.humidity}`;
        pressure.innerHTML = `<i class="fa-brands fa-cloudversify"></i> PRESSURE: ${jurl.main.pressure}`;
        windSpeed.innerHTML = `<i class="fa-solid fa-wind"></i> WIND SPEED: ${jurl.wind.speed}`;
        
        description.innerHTML = `${jurl.weather[0].main}`;
        document.querySelector("input").value = "";

        if(jurl.weather[0].main == "Clouds"){
            Images.src = "clouds2.jpg";
            Images.alt = "something went wrong";
        }
        else if(jurl.weather[0].main == "Mist"){
            Images.src = "mist2.jpg";
            Images.alt = "something went wrong";

        }
        else if(jurl.weather[0].main == "Rain"){
            Images.src = "rain2.jpg";
            Images.alt = "something went wrong";

        }
        else if(jurl.weather[0].main == "Clear"){
            Images.src = "clear2.jpg";
            Images.alt = "something went wrong";

        }
        else if(jurl.weather[0].main == "Haze"){
            Images.src = "windimg.jpg";
            Images.alt = "something went wrong";


        }
        else{
            Images.src = "";
            Images.alt = " ";
        }
        document.querySelector("input").value="";
    }
    
    catch(err){
        // document.querySelector("")
        document.querySelector(".city").innerHTML = "City not found";
        document.querySelector(".temperature").innerHTML = "TEMPERATURE: 0";
        document.querySelector(".humidity").innerHTML = "HUMIDITY: 0";
        document.querySelector(".pressure").innerHTML = "PRESSURE: 0";
        document.querySelector(".wind-speed").innerHTML = "WIND SPEED: 0";
        document.querySelector(".img").innerHTML = "image not found";
        
        document.querySelector(".description").innerHTML = "oops";
                  
        document.querySelector("input").value = "";

        // if(jurl.weather[0].main != "Clouds"){
        //     Images.src = "notfound.png";
        // }
    }
    
}

    