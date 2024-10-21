import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, {useState} from 'react';
import About from './components/About';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";


function App() {

  const [mode, setMode] = useState('light');


  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      // showAlert("Dark mode has been enabled");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      // showAlert("Light mode has been enabled");
    }
  }

  return (

<>
<Router>
    <Navbar title="Txtutils" about="About Us" mode={mode} toggleMode={toggleMode}/>   
    {/* <Alert alert={alert}/> */}
    <div className="container">
        <Routes>
            {/* cuz react uses partial matching, hence use 'exact path' */}
            <Route exact path="/about" element={<About />} />    
            <Route exact path="/" element={<TextForm heading="Enter your text" mode={mode} />} /> 
        </Routes> 
    </div>
</Router> 
</>

  );
}

export default App;