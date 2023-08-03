import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Support from './components/Support';
import Labs from './components/Labs';
import Services from './components/Services';
import NotFound from './components/NotFound';

// import {Link} from 'react-router-dom';
import {NavLink} from 'react-router-dom';

// navigation without refreshing the page using react router concept

function App() {
  return (
    <div className="App">
       
       {/* navbar to navigate between differnet componenets */}
       {/* we used Link tag to link text(Home, About etc) to the path of that element using to="" attribute.
            inside to attribute, we passed the path to go to that element
        */}

       <nav>
          <ul>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
            <li><NavLink to="/support">Support</NavLink></li>
            <li><NavLink to="/labs">Labs</NavLink></li>
            <li><NavLink to="/services">Services</NavLink></li>
            <li><NavLink to="*">NotFound</NavLink></li>
          </ul>
       </nav>

      {/* now here we are creating different routes for routing. so wil use Routes tag. */}
      <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/support" element={<Support/>} />
          <Route path="/labs" element={<Labs/>} />
          <Route path="/services" element={<Services/>} />
           
          {/* Handle situation when above given path doesn't match then below page will be open. use * inside the path */}
          <Route path="*" element={<NotFound/>} />

      </Routes>
    </div>
  );
}

export default App;
