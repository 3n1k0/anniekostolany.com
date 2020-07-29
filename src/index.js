import React from "react";
import ReactDOM from "react-dom";
import Footer from "./Footer";
import * as serviceWorker from "./serviceWorker";
import Home from "./Pages/Home";
import About from "./Pages/About";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Portfolio from "./Pages/Portfolio";
import Investment from "./Pages/Investment";
import Blog from "./Blog";
import Contact from "./Pages/Contact";
import FullPost from "./FullPost";
import Boudoir from "./Pages/Boudoir";
import Wedding from "./Pages/Wedding";
import Rules from "./Pages/Rules";
import Family from "./Pages/Family";
import SoloTravelers from "./Pages/SoloTravelers";
import Couples from "./Pages/Couples";

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
        <Route component={Contact} />
      </Switch>

      <Footer />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.unregister();
