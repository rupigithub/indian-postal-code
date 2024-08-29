import React from "react";
import Home from "./Components/Home";
import Filter from "./Components/Filter";
import { Route, Routes } from "react-router-dom";
import MyProvider from "./Context/userContext";


function App() {
  

  return(
    <>
    
    <MyProvider>
    <Routes>
    <Route path="/" element={<Home/>} /> 
    <Route path="/filter" element={<Filter/>} />
    </Routes>
    </MyProvider>

    </>
  )
}

export default App;