import React, { Component } from 'react';
import {BrowserRouter} from 'react-router-dom';

import Blog from './containers/Blog/Blog';

//<BrowerRouter> can be used in App.js or Index.js

//Any subcomponents wrapped by <BrowerRouter> can use the routing feature

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Blog />
        </div>
      </BrowserRouter> 
    );
  }
}

export default App;
