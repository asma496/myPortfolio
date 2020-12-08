import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import Services from './pages/Services';
import Resume from './pages/Resume';
import About from './pages/About';
import Home from './pages/Home';
import Name from './componenets/Name';




function App() {
  return (
    <div className="App">
               
                  <Router>
                <nav>
               <h1 className='link'> <Name /></h1>
                    <Link className='link' to='/'>Home</Link>
                    <Link className='link' to='/about'>About</Link>
                    <Link className='link' to='/resume'>Resume</Link>
                    <Link className='link' to='/Services'>Services</Link>
                    <Link className='link' to='/Portfolio'>Portfolio</Link>
                    <Link className='link' to='/Contact'>Contact</Link>

                </nav>


                <Switch>
                    <Route path='/contact'><Contact /></Route>
                    <Route path='/portfolio'><Portfolio /> </Route>
                    <Route path='/services'> <Services /> </Route>
                    <Route path='/resume'> <Resume /> </Route>
                    <Route path='/about'><About /> </Route>
                    <Route path='/'> <Home /></Route>
                </Switch>
            </Router>



    </div>
  );
}

export default App;
