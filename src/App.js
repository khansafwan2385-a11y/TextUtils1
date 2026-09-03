
import './App.css';
import Navbar from './Components/Navbar';
import TextArrea from './Components/TextArrea';

import React,{ useState} from 'react'
import Alert from './Alert';
import About from './About';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  //const[checked,setchecked]=useState("white");
  
        
    //  
    const [darkMode, setDarkMode] = useState(false);
  
     
        // const changeMode=()=>{
        //     if(checked=="black"){
        //         setchecked("white");
        //         setCheckedText("black")
        //         showAlert("ya","success")
        //     }else{
        //         setchecked("black");
        //          setCheckedText("white")
        //          showAlert("ya sure","success")
        //     }
    
            
    
        // }
        const changeMode = () => {
  setDarkMode(prev => {
    const newMode = !prev;

    if (newMode) {
      
      showAlert("dark mode enabled", "success");
    } else {
      
      showAlert("Light mode enabled", "success");
    }

    return newMode;
  });
};
        const [alert, setAlert] = useState(null);
        const showAlert = (message,type)=>{
          setAlert({
            msg:message,
            type:type

          });
          setTimeout(() => {
    setAlert(null);
  }, 5000);
        }
        
  return (
     <div
  style={{
    backgroundColor: darkMode ? "black" : "white",
    color: darkMode ? "white" : "black",
   
    minHeight: "100vh",
  }}
>
    
     <BrowserRouter>
   
    
        <Navbar Title='TextUtils'  changeMode={changeMode} />
       
          <Alert alert={alert}  />      
          <Routes>
      <Route
           exact path="/"
            element={<TextArrea showAlert={showAlert} />}
        />

      <Route
         exact path="/about"
        element={<About />}
      />
      </Routes>
       </BrowserRouter>
       </div>
      
  );
}


export default App;
