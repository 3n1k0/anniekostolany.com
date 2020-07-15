import React from "react";
import ReactDOM from "react-dom";

import Footer from "./Footer";
import * as serviceWorker from "./serviceWorker";
import Home from "./Home";
import About from "./About";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Portfolio from "./Portfolio";
import Investment from "./Investment";
import Blog from "./Blog";
import Contact from "./Contact";
import FullPost from "./FullPost";
import Boudoir from "./Boudoir";
import Wedding from "./Wedding";
import Rules from "./Rules";
import Family from "./Family";
import SoloTravelers from "./SoloTravelers";
import Couples from './Couples'


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" exact component={About} />
        <Route path="/portfolio" exact component={Portfolio} />
        <Route path="/investment" exact component={Investment} />
        <Route path="/blog" exact component={Blog} />
        <Route path="/contact-form" exact component={Contact} />
        <Route path="/blog/posts/:slug" exact component={FullPost} />
        <Route path="/family" exact component={Family} />
        <Route path="/solo-travelers" exact component={SoloTravelers} />
        <Route path="/couples" exact component={Couples} />
        <Route path="/boudoir" exact component={Boudoir} />
        <Route path="/how-does-it-work" exact component={Rules} />
        <Route path="/wedding" exact component={Wedding} />
        <Route path="/contact" exact component={Contact} />
      </Switch>

      <Footer />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
