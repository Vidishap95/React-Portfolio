// import react library
import React from "react";

// import reactdom client
import ReactDom from 'react-dom/client';


//import app componet
import App from './App';

//import css file
import "./style/index.css";


// create a root element using reactDOM.createroot() and select html ele. with id of "root as the container
const root = ReactDom.createRoot(document.getElementById('root'));

//render the app component inside the root ele.
root.render (
    <React.StrictMode>
        <App/>
    </React.StrictMode>
);