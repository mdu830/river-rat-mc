import { Component } from 'react';
import './App.css';
import Header from './components/Header'
import { Outlet } from "react-router-dom";

class Root extends Component {
  
  render() {
    return (
      <div className="App">
        <Header />
        
        <Outlet />
      </div>
    )
  }
}

export default Root;
