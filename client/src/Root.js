import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/header'
import { Outlet } from "react-router-dom";


function Root() {
  return (
    <div className="App">
      <Header />
      <Outlet />
    </div>
  );
}

export default Root;
