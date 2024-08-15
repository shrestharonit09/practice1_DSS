import React from "react";
import { FaTemperatureEmpty } from "react-icons/fa6";
import { CiCloudDrizzle } from "react-icons/ci";
import { FaWind } from "react-icons/fa6";
import { CiDroplet } from "react-icons/ci";
import {motion} from 'framer-motion'

const Whether = (props) => {
  return (
  <>

  <motion.div
  initial={{x:"0%"}}
  animate={{x:"100%"}}
  transition={{repeat:Infinity,duration:10 ,ease:"linear"}}>
    <div className="flex justify-center bg-green-500 rounded-lg shadow-lg w-[17vw] h-auto">

      <div className="flex flex-col gap-4 mt-4 mb-10 ">
        <div className="flex flex-col">
        <h1 className="text-2xl text-white">{props.Day}</h1>
        <h1 className="text-xs text-white">{props.Date}</h1>
        <h1 className="text-xs text-white">{props.Country}</h1>

        </div>
        {/* <h1>{props.Image}</h1> */}
       
        <img className="h-8 w-8 ml-4" src={props.Image1} alt="Image" />
        <div className="flex gap-2">
          <h1>
            <FaTemperatureEmpty />
          </h1>
          <h1 className="text-md text-white">{props.Temperature}</h1>
        </div>

        <div className="flex gap-2">
          <h1>
            <CiCloudDrizzle />
          </h1>
          <h1 className="text-md text-white">{props.Rain}</h1>
        </div>

        <div className="flex gap-2">
          <h1>
            <FaWind />
          </h1>
          <h1 className="text-md text-white">{props.Speed}</h1>
        </div>

        <div className="flex gap-2">
          <h1>
            <CiDroplet />
          </h1>
          <h1 className="text-md text-white">{props.Dense}</h1>
        </div>
      </div>
    </div>
    </motion.div>
    </>
  );
};

export default Whether;
