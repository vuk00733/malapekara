import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './pages/Home';
import Gallery from './pages/Gallery';
import Items from './pages/Items';
import Delivery from './pages/Delivery';
import Contact from './pages/Contact';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Navbar/>
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/gallery' component={Gallery}/>
        <Route path='/items' component={Items}/>
        <Route path='/delivery' component={Delivery}/>
        <Route path='/contact' component={Contact}/>
        <Route/>        
      </Switch>
      <Footer/>
    </Router>

  );
}

export default App;
