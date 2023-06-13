import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from "./components/Header";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Resume from "./components/Resume";
import Footer from "./components/Footer";


// Import bootstrap and custome css styles
import 'bootstrap/dist/css/bootstrap.min.css';
import "./style/App.css";

//defining the app components
function App () {
    return (
        <div className="App">
            <Router>
                <Header />
                {/* <Navigation /> */}
                 {/* <Header/> */}
                <div className="container mt-5">
                    <Routes>
                        <Route path="/Vidishap95/React-Portfolio/" element={<About />} />
                        {/* <Route path="/Vidishap95/React-Portfolio/home" element={<Home />} /> */}
                        <Route path="/Vidishap95/React-Portfolio/about" element={<About />} /> 
                        <Route path="/Vidishap95/React-Portfolio/portfolio" element={<Portfolio />} /> 
                        <Route path="/Vidishap95/React-Portfolio/contact" element={<Contact />} /> 
                        <Route path="/Vidishap95/React-Portfolio/resume" element={<Resume />} /> 

                    </Routes>
                </div>
                <Footer/>
            </Router>
        </div>
    );
}

//render footer components
export default App;