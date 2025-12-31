import React from 'react'
import {BrowserRouter,Route,Routes} from "react-router-dom";
import Form from './pages/Form';

function App() {
  return (
    // <div>App</div>
    <BrowserRouter>
    <Routes>
      {/* <Route> */}
      
         <Route path="/" element={<Form/>} />
      
      {/* </Route> */}
    </Routes>
   
    </BrowserRouter>
  )
}

export default App;