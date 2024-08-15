// afno code......
// import React, { useState, useEffect } from "react";
// import Fivewhether from "./Fivewhether";

// const Fivedays = () => {
//   const [data, setData] = useState([]);
//   let URL =
//     "https://api.openweathermap.org/data/2.5/forecast?lat=27.6710&lon=85.4298&appid=85ddfa36b52f28b28ec40b04ceae1b7b";
//   const datafetchgaram = async () => {
//     try {
//       const response = await fetch(URL);
//       const datafromurl = await response.json();
//       setData(datafromurl.list);

//     } catch (error) {}
//   };
//   useEffect(() => {
//     datafetchgaram();
//   }, []);

//   const current= new Date();
//   console.log("current",current);
//   return (
//     <div className="flex justify-center mt-20">
//       <div className="grid grid-cols-5 w-[95vw] gap-5">
//         {data?.map((items) => (
//           <Fivewhether 
//           key={items.dt}
//           Datetime={items.dt_txt} 
//           Icons={items.weather[0].main} 
//           Maxtemp={items.main.temp_min}
//           Mintemp={items.main.temp_max}
//           Mm={items.rain && items.rain["3h"]}
//           Speed={items.wind.speed}
//           Humidity={items.main.humidity}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Fivedays;

// five days ko code from chatgpt

import React, { useState, useEffect } from "react";
import Fivewhether from "./Fivewhether";

const Fivedays = () => {
  const [data, setData] = useState([]);
  let URL =
    "https://api.openweathermap.org/data/2.5/forecast?lat=27.6710&lon=85.4298&appid=85ddfa36b52f28b28ec40b04ceae1b7b";
  const datafetchgaram = async () => {
    try {
      const response = await fetch(URL);
      const datafromurl = await response.json();
      // Get the current time
      const currentTime = new Date();
      // Iterate over each day's data to find the item closest to the current time for that day
      const closestItems = datafromurl.list.reduce((acc, curr) => {
        const currDate = new Date(curr.dt_txt);
        const diffTime = Math.abs(currDate - currentTime);
        const day = currDate.getDate();
        if (!acc[day] || diffTime < Math.abs(new Date(acc[day].dt_txt) - currentTime)) {
          acc[day] = curr;
        }
        return acc;
      }, {});
      // Set the closest items as the data
      setData(Object.values(closestItems));
    } catch (error) {}
  };
  useEffect(() => {
    datafetchgaram();
  }, []);

  console.log("data",data);

  return (
    <div className="flex justify-center mt-20">
      <div className="grid grid-cols-6 w-[95vw] gap-5">
        {data.map((item) => (
          <Fivewhether 
          key={item.dt}
          Datetime={item.dt_txt} 
          Icons={item.weather[0].icon} 
          Maxtemp={item.main.temp_min}
          Mintemp={item.main.temp_max}
          Mm={item.rain && item.rain["3h"]}
          Speed={item.wind.speed}
          Humidity={item.main.humidity}
          />
        ))}
      </div>
    </div>
  );
};

export default Fivedays;

//single show gareko time ko respect ma bkt ko matra

// import React, { useState, useEffect } from "react";
// import Fivewhether from "./Fivewhether";

// const latitude=[27.6710, 27.7008,  27.4840,  28.2096,26.7288];
// const longitude=[85.4298, 85.3001,83.2760,83.9856,85.9259];

// const Fivedays = () => {
//   const [data, setData] = useState([]);
//   const[city,setCity]=useState([])

//   const datafetchgaram = async () => {
//     try {
//       const weatherDataPromises =latitude.map(async (lat,index)=>{
//         const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${longitude[index]}&appid=85ddfa36b52f28b28ec40b04ceae1b7b`);
//         const datafromurl = await response.json();
//         return data;
//       });

      
//       const currentTime = new Date();
    
//       const closestItem = datafromurl.list.reduce((prev, curr) => {
//         const prevTimeDiff = Math.abs(new Date(prev.dt_txt) - currentTime);

//         const currTimeDiff = Math.abs(new Date(curr.dt_txt) - currentTime);
//         return prevTimeDiff < currTimeDiff ? prev : curr;
//       });
//       // Set the closest item as the data
//       setData([closestItem]);
//       setCity(datafromurl.city)

//     } catch (error) {}
//   };
//   useEffect(() => {
//     datafetchgaram();
//   }, []);

//   return (
//     <div className="flex justify-center mt-20">
//       <div className="grid grid-cols-5 w-[95vw] gap-5">
//         {data.map((item) => (
//           <Fivewhether 
//           key={item.dt}
//           Datetime={item.dt_txt} 
//           Icons={item.weather[0].main} 
//           Maxtemp={item.main.temp_min}
//           Mintemp={item.main.temp_max}
//           Mm={item.rain && item.rain["3h"]}
//           Speed={item.wind.speed}
//           Humidity={item.main.humidity}
//           City={city.name}


//           />
//         ))}
        
//       </div>
//     </div>
//   );
// };

// export default Fivedays;

//mileko code

// import React, { useState, useEffect } from "react";
// import Fivewhether from "./Fivewhether";

// const latitude = [27.6710, 27.7008, 27.4840, 28.2096, 26.7288];
// const longitude = [85.4298, 85.3001, 83.2760, 83.9856, 85.9259];

// const Fivedays = () => {
//   const [data, setData] = useState([]);
  

//   const datafetchgaram = async () => {
//     try {
//       const weatherDataPromises = latitude.map(async (lat, index) => {
//         const response = await fetch(
//           `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${longitude[index]}&appid=85ddfa36b52f28b28ec40b04ceae1b7b`
//         );
//         const datafromurl = await response.json();
//         return { list: datafromurl.list, city: datafromurl.city };
//       });

//       const weatherDataArray = await Promise.all(weatherDataPromises);

//       const currentTime = new Date();

//       const closestItems = weatherDataArray.map((weatherData) => {
//         const closestItem = weatherData.list.reduce((prev, curr) => {
//           const prevTimeDiff = Math.abs(new Date(prev.dt_txt) - currentTime);
//           const currTimeDiff = Math.abs(new Date(curr.dt_txt) - currentTime);
//           return prevTimeDiff < currTimeDiff ? prev : curr;
//         });
//         return {...closestItem, city: weatherData.city.name };
//       });

//       setData(closestItems);
//     } catch (error) {
//       console.error("Error fetching weather data:", error);
//     }
//   };

//   useEffect(() => {
//     datafetchgaram();
//   }, []);

//   return (
//     <div className="flex justify-center mt-20">
//       <div className="grid grid-cols-5 w-[95vw] gap-5">
//         {data.map((item) => (
//           <Fivewhether 
//             key={item.dt}
//             Datetime={item.dt_txt} 
//             Icons={item.weather[0].main} 
//             Maxtemp={item.main.temp_max} 
//             Mintemp={item.main.temp_min} 
//             Mm={item.rain && item.rain["3h"]}
//             Speed={item.wind.speed}
//             Humidity={item.main.humidity}
//             City={item.city}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Fivedays;



