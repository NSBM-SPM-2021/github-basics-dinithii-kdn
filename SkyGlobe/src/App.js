import logo from './logo.svg';
import './App.css';

import { Button } from 'react-bootstrap';


import img1 from './images/img1.PNG';

import Contact from './Contact';
import Home from './Home'
import About from './About'
import Contact from './Contact'



function App() {
  return (
    <div className="App">


      <h1>WELCOME HOME PAGE</h1>

      <center><h1 style={{ fontFamily: 'monospace' }} size={100} >Welcome to FlightX !</h1></center>  <br />
      <h3 style={{ color: 'purple' }}>Book Your Flight Ticket Here!</h3>
      <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br />
      <Button variant="primary" size="lg" >
        GO TO NEXT PAGE
      </Button>


      <br /> <br /><br />
      <img src={img1} alt="" />

    </div >





  );
}

export default App;
