import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Contact from './pages/Contact';
import About from './pages/About';
import Home from './pages/Home';







function App() {
  return (
    <div>
      <Router>
      <nav>
       
  <Link  to='/'>HOME</Link>
  <Link to='/about'>About</Link>
  <Link to='/contact'>Contact</Link>

    
</nav>
    <Switch>
    <Route path='/Contact'><Contact /></Route>
    <Route path='/About'><About /></Route>
    <Route path='/'><Home /></Route>

</Switch>

            </Router>
            
 <Home />
      </div>
  );
}

export default App
