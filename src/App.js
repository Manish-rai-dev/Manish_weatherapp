import React, { useState } from "react";
import './App.css';


const App=()=> {

    const [weather, setWeather] = useState({})
    const [city, setCity] = useState('lucknow')


    const getValues = (event) => {
        if (event.key === 'Enter') {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=767c03573eace3869b37f3d23bea0379`)
                .then(result => result.json())
                .then(
                    weatherInfo => {
                        setWeather(weatherInfo)
                        setCity('')
                        console.log(weatherInfo);
                    });
        }
    }


    function newData(event){
         setCity(event.target.value)
    }


    const today = new Date().toDateString()

    return (
      <>
    <div className="card1">
      <header className="weatherknow">Know Weather</header></div>
      <div className="row">
      <div className="col-lg-6 container">
        <div className={(typeof weather.main != 'undefined') ? ((weather.main.temp > 10) ? '' : '') : ''} >

              
                  <div className="card">
                    <div className="card-body">
                        <input type="text" className="cityNameInput" 
                        placeholder="Enter the name of city" 
                        onChange={newData}
                         value={city} onKeyPress={getValues}
                        />
                        
                        </div>
                        </div>
                        </div>
                        
                    {(typeof weather.main != 'undefined') ? (
                        <div className="">
                            <div className="flip-card">
                                <div className="flip-card-inner">
                                  <div className="flip-card-front">
                                    <div className="city">{weather.name},{weather.sys.country}</div>
                                    <div className="date">{today}</div>
                

                                </div>
                                
                                <div className="flip-card-back">
                                    <div className="temp">{Math.round(weather.main.temp)}°C</div>
                                    <div className="others">
                                        <div className="weathertype">{weather.weather[0].main} </div>
                                        <div className="humidtiy">Humidtiy : {weather.main.humidity}%</div>
                                        <div className="wind">Wind speed : {weather.wind.speed}km/h </div>
                                        <div className="pressure">Pressure : {weather.main.pressure}hPa</div>
                                    </div>
                                </div>
                                </div>
                            </div>
                        </div>
                    ) : (<div className="card2"><h2>Know weather. Get the weather.</h2></div>)}
                    <div className="notFound">
                        
                        {weather.cod === '404' ? (
                            <p className="card2">City not found</p>
                        ) : (
                            <>
                            </>
                        )}
                    </div>
                </div>
        </div>

    
</>

    )
}


export default App;