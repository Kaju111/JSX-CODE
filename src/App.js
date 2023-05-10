import React from "react";
import Header from "./Mynew/Header";
import Nav from "./Mynew/Nav";
import From from "./Mynew/From";
import Home from "./Mynew/Home";
import Contect from "./Mynew/Contect";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom"



function App() {
  return (
    <div>

 <Router>
    <Header/>
    <Nav/>
    <Routes>

       <Route path='/' element={<From/>}/>    
       <Route path='/Home' element={<Home/>}/>  
       <Route path='/Contect' element={<Contect/>}/>  
       <Route path='*' element={<div>Page not found 404</div>}/>  


  </Routes>

  </Router> 









     {/* <Nav/>  

        <From />
            
             <Home />
          
 
    <Contect/>  */}
    
     </div>
  );
}

export default App;
