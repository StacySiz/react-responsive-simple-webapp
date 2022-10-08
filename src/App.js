import './App.css';
import Navbar from "./components/Navbar";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from "./components/pages/Home";
import Services from "./components/pages/Services";
import Products from "./components/pages/Products";
import SignUp from "./components/pages/SignUp";

function App() {
  return (
      <>
        <Router>
          <Navbar/>
          {/*<HeroSection/>*/}
          <Routes>
            <Route exact path='/' element={<Home/>}/>
            <Route exact path='/services' element={<Services/>}/>
            <Route exact path='/products' element={<Products/>}/>
            <Route exact path='/sign-up' element={<SignUp/>}/>
            {/*</Route>*/}
          </Routes>
        </Router>
      </>
  );
}

export default App;
