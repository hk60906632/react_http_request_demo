import React, { Component } from 'react';
import {BrowserRouter} from 'react-router-dom';

import Blog from './containers/Blog/Blog';

//<BrowerRouter> can be used in App.js or Index.js

//Any subcomponents wrapped by <BrowerRouter> can use the routing feature

//every component which is loaded inside the <BrowserRouter>, will hava access to "match", "location" and "history"

class App extends Component {
  render() {
    return (
      //<BrowserRouter basename="/my-app">
      <BrowserRouter>
        <div className="App">
          <Blog />
        </div>
      </BrowserRouter> 
    );
  }
}

export default App;
