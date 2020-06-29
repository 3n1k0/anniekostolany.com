import React from 'react';
import ReactDOM from 'react-dom';

import Footer from './Footer';
import * as serviceWorker from './serviceWorker';
import Home from './Home'
import About from './About'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import  Portfolio from './Portfolio'


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
  
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" exact component={About} />
        <Route path="/portfolio" exact component={Portfolio} />

      </Switch>


      <Footer />
    </BrowserRouter>

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
