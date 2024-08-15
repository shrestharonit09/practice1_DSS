import React,{createContext} from 'react'


const NoteContext=createContext();

const NoteState = (props) => {
    const person={
        name:"Ronit Shrestha",
        age:23,
        id:1
    }
  return (
   <NoteContext.Provider value={person}>
    {props.children}
   </NoteContext.Provider>
  )
}

export {NoteContext,NoteState};