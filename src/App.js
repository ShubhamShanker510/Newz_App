//import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react'
import Navbar from './Navbar';
import News from './News';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';

const App=()=> {
  const pageSize = 5;
  const apikey = process.env.REACT_APP_NEWS_API
  const [progress, setProgress] = useState(0); 
 
 
  
    return (
      <> 
        <Router>
          <Navbar />
          <LoadingBar
          color='#f11946'
          progress={progress}
        
        />
          <Switch>
            <Route exact path="/business">
              <News News setProgress ={setProgress} apikey={apikey} key="business" pageSize={pageSize} country="in" category="business" />
            </Route>
            <Route exact path="/entertainment">
            <News News setProgress ={setProgress} apikey={apikey} key="entertainment" pageSize={pageSize} country="in" category="entertainment" />
            </Route>
            <Route exact path="/health">
            <News News setProgress ={setProgress} apikey={apikey} key="health" pageSize={pageSize} country="in" category="health" />
            </Route>
            <Route exact path="/technology">
            <News News setProgress ={setProgress} apikey={apikey} key="technology" pageSize={pageSize} country="in" category="technology" />
            </Route>
            <Route exact path="/science">
            <News News setProgress ={setProgress} apikey={apikey} key="science" pageSize={pageSize} country="in" category="science" />
            </Route>
            <Route  exact path="/">
            <News News setProgress ={setProgress} apikey={apikey} key="2"pageSize={pageSize} country="in" category="general" />
            </Route>
            <Route exact path="/sports">
            <News News setProgress ={setProgress} apikey={apikey} key="sports" pageSize={pageSize} country="in" category="sports" />
            </Route>
            <Route exact path="/general">
            <News News setProgress ={setProgress} apikey={apikey} key="general" pageSize={pageSize} country="in" category="general" />
            </Route>
            
          </Switch>
      </Router>
      </>
    )
  
}

export default App;