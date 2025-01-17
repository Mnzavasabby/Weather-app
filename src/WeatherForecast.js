import { useState } from "react"

export default function WeatherForecast(){
const apiKey="1d1be0408c3a0f12837f775cefe01006"
const [weather,setWeather]=useState({
    icon:"https://openweathermap.org/img/wn/10d@2x.png",
    city:"Paris",
    temp:20,
    humidity:40,
    speed:20
})

    function handleSubmit(event){
        event.preventDefault()

        let city=event.target.city.value
        if(!city){
            alert("provide the city")
            return
        }
    }

    return(
    <div className="container my-5">
        <div className="mx-auto rounded border text-center text-white p-4 " style={{backgroundColor:"#3B5FAB",width: "400px"}}>
            <h2 className="fw-b mb-5 ">Weather Forecast</h2>
            <form className="d-flex mb-3" onSubmit={handleSubmit}>
                <input className="form-control me-2"  placeholder="City" name="city"/>
                <button className="btn btn-outline-light" type="submit">Search</button>
            </form>

            <img src={weather.icon} alt="..."/>
            <h1 className="display-4 fw-medium">{weather.temp}C
            </h1>
            <h1 className="mb-5">{weather.city}</h1>
            <div className="row mb-3">
                <div className="col">
                <i class="bi bi-water"></i>Humidity<br/>
                {weather.humidity} %
                </div>
                <div className="col">
                <i class="bi bi-wind"></i>Wind speed<br/>
                {weather.speed} km/h
                </div>

            </div>
        </div>

    </div>
)}