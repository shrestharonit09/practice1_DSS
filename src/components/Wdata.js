// import React,{useState,useEffect} from "react";
// import Whether from "../components/Whether";
// // export const information = [
// //   {
// //     day: "Today",
// //     date: "23 May 2024",
// //     image1:
// //       "https://cdn1.vectorstock.com/i/1000x1000/53/35/sunny-weather-icon-vector-21015335.jpg",
// //     temperature: "29°/11°C",
// //     rain: "0mm",
// //     speed: "5.43Km/H",
// //     dense: "34%",
// //   },
// //   {
// //     day: "Friday",
// //     date: "23 May 2024",
// //     image1:
// //       "https://cdn1.vectorstock.com/i/1000x1000/53/35/sunny-weather-icon-vector-21015335.jpg",
// //     temperature: "29°/11°C",
// //     rain: "0mm",
// //     speed: "5.43Km/H",
// //     dense: "34%",
// //   },
// //   {
// //     day: "Saturday",
// //     date: "23 May 2024",
// //     image1:
// //       "https://cdn1.vectorstock.com/i/1000x1000/53/35/sunny-weather-icon-vector-21015335.jpg",
// //     temperature: "29°/11°C",
// //     rain: "0mm",
// //     speed: "5.43Km/H",
// //     dense: "34%",
// //   },
// //   {
// //     day: "Sunday",
// //     date: "23 May 2024",
// //     image1:
// //       "https://cdn1.vectorstock.com/i/1000x1000/53/35/sunny-weather-icon-vector-21015335.jpg",
// //     temperature: "29°/11°C",
// //     rain: "0mm",
// //     speed: "5.43Km/H",
// //     dense: "34%",
// //   },
// //   {
// //     day: "Monday",
// //     date: "23 May 2024",
// //     image1:
// //       "https://cdn1.vectorstock.com/i/1000x1000/53/35/sunny-weather-icon-vector-21015335.jpg",
// //     temperature: "29°/11°C",
// //     rain: "0mm",
// //     speed: "5.43Km/H",
// //     dense: "34%",
// //   },
// // ];

// const Wdata = () => {
//   const[datalocation,setDatalocation]=useState([])
//   const[datacurrent,setDatacurrent]=useState([])
//   const[datacondition,setDatacondition]=useState([])
//   const[rain,setRain]=useState([])
//   let URL="http://api.weatherapi.com/v1/current.json?key=bb65b20bbb064f1bab363401242405&q=bhaktapur&aqi=no"
//   const datafetchgaram = async () => {
//       try {
//         const response = await fetch(URL);
//         const datafromurl = await response.json();
//         setDatalocation(datafromurl.location);
//         setDatacurrent(datafromurl.current);
//         setDatacondition(datafromurl.current.condition)
//         setRain(datafromurl.current)
//       } catch (error) {}
//     };
//     useEffect(() => {
//       datafetchgaram();
//     }, []);
//   return (
//     <div className="flex justify-center mt-20">
//       {/* <div className="grid grid-cols-5 w-[95vw]"> */}
//           <Whether
//             Day={datalocation.name}
//             Date={datalocation.localtime}
//             Country={datalocation.country}
          
//           //   Image={data.country}
//             Temperature={datacurrent.temp_c}
            
//             Image1={datacondition.icon}
//             Rain={rain.precip_mm}
//             Speed={datacurrent.wind_kph}
//             Dense={datacurrent.humidity}
//           />
   
//       </div>
//     // </div>
//   );
// };

// export default Wdata;


import React, { useState, useEffect } from "react";
import Whether from "../components/Whether";

const districts = ["Bhaktapur", "Kathmandu", "Lumbini", "Pokhara", "Janakpur"];

const Wdata = () => {
  const [weatherData, setWeatherData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const weatherDataPromises = districts.map(async (district) => {
        const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=bb65b20bbb064f1bab363401242405&q=${district}&aqi=no`);
        const data = await response.json();
        return data;
      });

      const fetchedWeatherData = await Promise.all(weatherDataPromises);
      setWeatherData(fetchedWeatherData);
    };

    fetchData();
  }, []);

  return (
    <div className="flex justify-center mt-20">
      <div className="grid grid-cols-5 gap-4">
        {weatherData.map((data, index) => (
          <Whether
            key={index}
            Day={data.location.name}
            Date={data.location.localtime}
            Country={data.location.country}
            Temperature={data.current.temp_c}
            Image1={data.current.condition.icon}
            Rain={data.current.precip_mm}
            Speed={data.current.wind_kph}
            Dense={data.current.humidity}
          />
        ))}
      </div>
    </div>
  );
};

export default Wdata;
