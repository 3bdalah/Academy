
import './App.css';
import Home from "./pages/Home";
import About from "./pages/About";
import Tracks from "./pages/Products";
import Navbar from "./components/Navbar";
import Feilddetails from "./pages/Feilddetails"
import {Switch, Route} from "react-router-dom";
import Notfound from './pages/Notfound';
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
    <Navbar/>
     <Switch>
       <Route exact path="/home">
         <Home/>
       </Route>
       <Route exact path="/about">
         <About/>
       </Route>
       <Route exact path="/tracks">
        <Tracks/> 
       </Route> 
       <Route exact path="/tracks/:id">
          <Feilddetails/> 
       </Route>
       <Route exact path="/tracks/:id/contact">
          <Contact/> 
       </Route> 
       <Route path="*">
        <Notfound/> 
       </Route> 
     </Switch>
     <Footer/>
    </>
  );
}

export default App;
