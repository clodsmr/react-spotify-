import React from "react";
import "./App.css";
import MusicPlayer from "./components/MusicPlayer";
import SideBar from "./components/SideBar";
import { Col, Row, Container } from "react-bootstrap";
import HomePage from "./components/HomePage";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

function App() {
  return (
  
     <Container >
      <Row >
        
          <SideBar />
       
          <Router>
            
              <Route path="/">
                <HomePage />
              </Route>
              <Route path="/albumpage/:id"> 
              
             <HomePage /> 
            </Route>
  
            
          </Router>
        
      </Row>
      <MusicPlayer />
      </Container>
    
  );
}

export default App;
