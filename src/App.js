import React, {useState} from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Services from './components/pages/Services';
import Products from './components/pages/Products';
import SignUp from './components/pages/SignUp';

import Forms from './components/pages/Forms';
import Formo from './components/pages/Formo';
import Formt from './components/pages/Formt';
import TwoD from './components/2d-3d/ThreeD1';

import ThreeD1 from './components/2d-3d/ThreeD1';
import ThreeD2 from './components/2d-3d/ThreeD2';
import ThreeD3 from './components/2d-3d/ThreeD3';
import TwoD1 from './components/2d-3d/TwoD1';

import TwoD2 from './components/2d-3d/TwoD2';
import TwoD3 from './components/2d-3d/TwoD3';

import About from './components/About';
import Developer from './components/Developer';


// import Design from './components/pages/Design';
// import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  const [name1, setName1] = useState("");
  const [name2, setName2] = useState("");
  const [name3, setName3] = useState("");

  

  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          {/* <Route path='/personal' component={Services} />
          <Route path='/rent' component={Products} />
          <Route path='/business' component={SignUp} /> */}
          <Route path='/form' component={()=><Forms name={name1} setName={setName1}/>} />
          <Route path='/formo' component={()=><Formo name1={name2} setName1={setName2}/>} />
          <Route path='/formt' component={()=><Formt name={name3} setName={setName3}/>} />

          <Route path='/2d1' component={()=><TwoD1 name={name1} setName={setName1}/>} />
          <Route path='/2d2' component={()=><TwoD2 name1={name2} setName1={setName2}/>} />
          <Route path='/2d3' component={()=><TwoD3 name={name3} setName={setName3}/>} />
          
          <Route path='/3d1' component={()=><ThreeD1 name={name1} setName={setName1}/>} />
          <Route path='/3d2' component={()=><ThreeD2 name={name2} setName={setName2}/>} />
          <Route path='/3d3' component={()=><ThreeD3 name={name3} setName={setName3}/>} />
          
          <Route path='/about' component={About} />
          <Route path='/developer' component={Developer} />

          {/* <Route path='/design' component={Design} /> */}
        </Switch>
      </Router>
    </>
  );
}

export default App;
