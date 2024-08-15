import React from "react";
import Cloud from "../Images/Cloud.svg";
import Sun from "../Images/Sun.svg";
import Rain from "../Images/Rain.svg";
import { FaTemperatureEmpty } from "react-icons/fa6";
import { CiCloudDrizzle } from "react-icons/ci";
import { FaWind } from "react-icons/fa6";
import { CiDroplet } from "react-icons/ci";

const Fivewhether = (props) => {
  const date = new Date(props.Datetime);
  const options = { weekday: "long" };
  const day = date.toLocaleDateString("en-US", options);

  let weathericons;
  if (props.Icons == "Rain") {
    weathericons = <img className="h-12 w-12" src={Rain} alt="rain" />;
  }
  if (props.Icons == "Clouds") {
    weathericons = <img className="h-12 w-12" src={Cloud} alt="cloud" />;
  }
  if (props.Icons == "Clear") {
    weathericons = <img className="h-12 w-12" src={Sun} alt="sun" />;
  }
  
  return (
    <div className="border border-green-800 bg-green-500 rounded-lg">
      <div className="flex flex-col gap-4">
        {props.City}
      <h1>{day}</h1>
      <h1>{props.Datetime}</h1>
      <h1>{props.Icons}</h1>
      {/* {weathericons} */}
     <img height={60} width={60} src={`https://openweathermap.org/img/wn/${props.Icons}@2x.png`} alt="" />
      <div className="flex gap-2">
        <FaTemperatureEmpty />
        {Math.round(props.Maxtemp - 273.15)}°C/
        {Math.round(props.Mintemp - 273.15)}°C
      </div>

      <div className="flex gap-2">
        <CiCloudDrizzle />
        {props.Mm}mm
      </div>

      <div className="flex gap-2">
        <FaWind />
        {props.Speed}Km/H
      </div>

      <div className="flex gap-2">
        <CiDroplet />
        {props.Humidity}%
      </div>
      </div>
    </div>
  );
};

export default Fivewhether;
