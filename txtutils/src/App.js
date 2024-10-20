import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, {useState} from 'react';
// import About from './components/About';


function App() {

  const [mode, setMode] = useState('light');

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      // showAlert("Dark mode has been enabled", "success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      // showAlert("Light mode has been enabled", "success");
    }
  }

  return (
     <>

<Navbar title="Txtutils" about="About Us" mode={mode} toggleMode={toggleMode}/>    
<div className="container">
<TextForm heading="Enter your text" mode={mode}/>
{/* <About/> */}
</div>

    </>
  );
}

export default App;