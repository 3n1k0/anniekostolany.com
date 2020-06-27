import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import React, { useState } from 'react';
import About from './About'
import Portfolio from './Portfolio'
import { Menuitem, Menuitems, ContactButton } from './Menu'




class Routes extends React.Component {

    render() {
        return (
            <div className="Routes">

                <Router>
                    <Switch>
                        <Route path="/" exact component={Home} />
                        <Route path="/about" exact component={About} />
                        <Route path="/portfolio" exact component={Portfolio} />

                    </Switch>


                    <Menuitems>
                        <Menuitem><Link to="/">Home</Link></Menuitem>
                        <Menuitem><Link to="/about">About me</Link></Menuitem>
                        <Menuitem><Link to="/portfolio">Portfolio</Link></Menuitem>
                        <Menuitem><Link to="/investment">Investment</Link></Menuitem>
                        <Menuitem><Link to="/preset-shop">Preset shop</Link></Menuitem>
                        <Menuitem><Link to="/blog">Blog </Link></Menuitem>
                        <Menuitem><Link to="/contact-form"><ContactButton>Contact</ContactButton></Link></Menuitem>
                    </Menuitems>

                </Router>

            </div>

        )
    }
}

export default Routes