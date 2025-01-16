export default function WeatherForecast(){
    return(
    <div className="container my-5">
        <div className="mx-auto rounded border text-center text-white p-4 " style={{backgroundColor:"#3B5FAB",width: "400px"}}>
            <h2 className="fw-b mb-5 ">Weather Forecast</h2>
            <form className="d-flex mb-3">
                <input className="form-control me-2"  placeholder="City" name="city"/>
                <button className="btn btn-outline-light" type="submit">Search</button>
            </form>

            <img src=" https://openweathermap.org/img/wn/10d@2x.png" alt="..."/>
            <h1 className="display-4 fw-medium">20&deg;C
            </h1>
            <h1 className="mb-5">paris</h1>
            <div className="row mb-3">
                <div className="col">
                <i class="bi bi-water"></i>Humidity<br/>
                40%
                </div>
                <div className="col">
                <i class="bi bi-wind"></i>Wind speed<br/>
                23 km/hr
                </div>

            </div>
        </div>

    </div>
)}