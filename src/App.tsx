import React from "react";
import Node from './types/Node';

const App = ({children}: {children?: Node})=>{
  return(
    <>
    {children ?? null}
    </>
  )
}

export default App;
