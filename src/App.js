import './App.css';
import Navbar from "./components/Navbar";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from "./components/pages/Home";

function App() {
  return (
      <>
        <Router>
          <Navbar/>
          {/*<HeroSection/>*/}
          <Routes>
            <Route exact path='/' element={<Home/>}/>
            {/*<Route path='/services' component={HeroSection}>*/}
            {/*</Route>*/}
          </Routes>
        </Router>
      </>
  );
}

export default App;
