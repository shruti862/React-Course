
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import React, { useState} from 'react'
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Switch,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  const[mode,setMode]=useState('light');
  const[alert,setAlert]=useState(null);
  const ShowAlert=(message,type)=>{
          setAlert({
            msg:message,
            type:type
          })
          setTimeout(()=>{
            setAlert(null);
          },1500);
  }
  const toggleMode=(cls)=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='black';
      ShowAlert("Dark mode has been enabled",'success');
      document.title="TextUtils-DarkMode"
     /* setInterval(() => {
        document.title="TextUtils is amazing"
      }, 2000);
      setInterval(() => {
        document.title="Install TextUtils now"
      }, 1500);
   */
    }
    else if(mode==='dark'){
      setMode('light');
      document.body.style.backgroundColor='white';
      ShowAlert("Light mode has been enabled",'success');
      document.title="TextUtils-LightMode"
    }
  }
  return (
    <>
   <Router>
<Navbar title="TextUtils" aboutText="About" mode={mode} toggleMode={toggleMode}/>
<Alert alert={alert}/>
<div className="container my-3">
<Routes>
          <Route exact path="/about" element={<About mode={mode}/>}>
          </Route>
          <Route exact path="/" element={
          <TextForm heading="Enter the text to analyze" ShowAlert={ShowAlert} mode={mode} />}>
          </Route>
        </Routes>
</div>
</Router>
   </>

   
  );
}

export default App;
