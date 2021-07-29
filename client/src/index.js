import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";

import AppMainContainer from './Contexts/AppMainContainer';

const root = document.getElementById('root');

ReactDOM.render(
        <Router>
            <AppMainContainer/> 
        </Router>,
    root
);