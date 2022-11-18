import './App.css';

import React, { Component } from 'react'

// import Routing
import { BrowserRouter } from 'react-router-dom';


// import compnents
import NavBar from './components/navComponent';
// import Pages
import Pages from "./pages";

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>

        <NavBar/>
        <main>
          <Pages/>
        </main>
      </BrowserRouter>
    )
  }
}

