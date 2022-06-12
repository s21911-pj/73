import React from 'react';
import {Route, Routes, BrowserRouter} from 'react-router-dom'
import Main from "./components/main";
import Error from "./components/error";
import Sum from "./components/sum";
import Substraction from "./components/substraction";
import Multiply from "./components/multiply";
import Division from "./components/division";
import './App.css';


function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Main/>}/>
          <Route path="/sum/:a/:b" exact element={<Sum/>}/>
          <Route path="/substraction/:a/:b" exact element={<Substraction/>}/>
          <Route path="/multiply/:a/:b" exact element={<Multiply/>}/>
          <Route path="/division/:a/:b" exact element={<Division/>}/>
          <Route path="*" exact element={<Error/>}/>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
