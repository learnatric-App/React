import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";

//import bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';

import AppMain from './Components/AppMain';

const root = document.getElementById('root');

ReactDOM.render(
        <Router>
            <AppMain/> 
        </Router>,
    root
);