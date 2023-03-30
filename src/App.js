import React from 'react';
import './App.css';
 import About from './Components/About';
import Navbar from './Components/Navbar';
 import TextForm from './Components/TextForm';
import Alert from './Alert';
 import { useState } from 'react';
 import { BrowserRouter,Routes, Route } from "react-router-dom"
import './App.css';

function App() {
  const [mode, setMode] = useState('light'); // wheather dark mode is enable or not
  const [alert , setAlert] =useState (null);

const showAlert =(message , type) =>{
  setAlert ({
    msg: message,
    type: type
  })
  setTimeout(() => {
    setAlert (null);
     
  },1500);
  
}

  const toggleMode = ()=>{
  if(mode === 'light'){
    setMode ('dark');
    document.body.style.backgroundColor = '#042743';
    showAlert("dark mode has been enable","success");
    document.title = 'TextUtlies2 - Dark Mode';
  }


  else{
    setMode ('light');
    document.body.style.backgroundColor = 'white';
    showAlert("light mode has been enable","success");
    document.title = 'TextUtlies2 - light Mode';  
  }
  }
  return (
 <>
 <BrowserRouter>

<Navbar title="TextUtiles2" mode={mode} toggleMode={toggleMode}/>
  <Alert  alert={alert}/>
<div className='container my-3'>
    
    <Routes>
      <Route exact strict path="/" element={<TextForm showAlert={showAlert} heading="Enter text to analyze below " mode={mode}/>} />
      <Route exact path="/about" element={<About/>} /> 

    </Routes>

</div>

</BrowserRouter>
</>
  );
}

export default App;
