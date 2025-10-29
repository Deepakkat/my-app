import { useState } from 'react';
import './App.css';
// import About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route 
// } from "react-router-dom";


// let name = "deepak kataria";
function App() {
   const [alert, setAlert] = useState(null);
   const showAlert = (message, type) => {
     setAlert({
      message: message,
      type: type
     })
     setTimeout(() => {
      setAlert(null)
     }, 1500);
   }
   setInterval(() => {
    document.title="Deepak new react project"
   }, 1500);




  return (
  <>
<Navbar title="This is props" aboutTitle="About Us"/>
<Alert alert={alert}/>

 
  {/* <Routes> */}
  {/* <Route exact path="/" element={  */}
    <TextForm heading="Enter text to analyse" showAlert={showAlert}/>
    {/* } /> */}
  {/* <Route exact path="/about" element={<About />} /> */}
{/* </Routes> */}

  

  
 
  </>
  );
}

export default App;
