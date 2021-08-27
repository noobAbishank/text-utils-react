
import './App.css';
import { Header } from './Containers/Header'
import { MyTextArea } from './Containers/MyTextArea';
import React, { useState } from 'react';
// import {About} from './Containers/About'
import { Alert } from './Containers/Alert';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,

// } from "react-router-dom";



function App() {

  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1000);
  }

  const toggler = () => {
    if (mode === 'light') {
      setMode('dark');
      showAlert("DarkMode Enabled", "success");
      document.body.style.backgroundColor = '#080110';
      document.getElementById('faviconPng').href = '%PUBLIC_URL%/favicon_io1/favicon-16x16.png';
      document.getElementById('faviconIco').href = '%PUBLIC_URL%/favicon_io1/favicon.ico';
    }
    else {
      setMode('light');
      showAlert("LightMode Enabled", "success");
      document.body.style.backgroundColor = 'white';
      document.getElementById('faviconPng').href = "%PUBLIC_URL%/favicon_io2/favicon-16x16.png";
      document.getElementById('faviconIco').href = "%PUBLIC_URL%/favicon_io2/favicon.ico";
    }
  }

  return (
    <div>
//       <Router>
        <Header mode={mode} toggler={toggler} alert={alert} />
//         <Switch>
//           <Route exact path="/">
            <Alert alert={alert} />
            <MyTextArea heading="Enter the Text to analyze" mode={mode} showAlert={showAlert} />
//           </Route>
//           <Route exact path="/About">
//             <Alert alert={alert} />
//             <About heading="About Us" mode={mode}></About>
//           </Route>
//         </Switch>
//       </Router>
     </div>
  );
}

export default App;
