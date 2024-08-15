import React from "react";
import Fivedays from "./components/Fivedays";
import Prapanna from "./components/Prapanna";
import Wdata from "./components/Wdata";
import One from "./componentss/One";
import {NoteState} from "./context/NoteState";

const App = () => {
  return (
    <>
      <div>
        <Wdata />
        <Prapanna />
        <Fivedays />
      </div>
      <NoteState>
        <One />
      </NoteState>
    </>
  );
};

export default App;
