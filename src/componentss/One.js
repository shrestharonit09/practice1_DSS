import React from "react";
import { useContext } from "react";
import {NoteContext} from "../context/NoteState"


const One = () => {
    const data=useContext(NoteContext)
  return(
   <>
   <h1>my name is {data.name} and my age is {data.age} and id is {data.id}</h1>
  </>
  );
};

export default One;
