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
import { Link } from '@material-ui/Link';




function App() {

  return (
<div>
    
                  {/* <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Navbar.Brand href="./Home">React-Bootstrap</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="./About">Features</Nav.Link>
      <Nav.Link href="./Services">Pricing</Nav.Link>
    
    </Nav>
    <Nav>
      <Nav.Link href="./">More deets</Nav.Link>
      <Nav.Link eventKey={2} href="#memes">
        Dank memes
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar> */}
  
  <Typography className={classes.root}>
  <Link href="#" onClick={preventDefault}>
    Link
  </Link>
  <Link href="#" onClick={preventDefault} color="inherit">
    {'color="inherit"'}
  </Link>
  <Link href="#" onClick={preventDefault} variant="body2">
    {'variant="body2"'}
  </Link>
</Typography>
    
    <Name />
    </div>
  )
};
    


  


export default App;
