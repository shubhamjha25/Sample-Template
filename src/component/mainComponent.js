import React, { Component } from 'react';
import Home from './HomeComponent'
import Header from './HeaderComponent';
import { Switch, Route } from 'react-router-dom';
import Footer from './FooterComponet';
import About from './AboutComponent';
class Main extends Component{
    render()
    {
        const HomePage = () => {
            return(
                <Home/>
            )
        }
        const AboutPage = () => {
            return(
                <About/>
            )
        }


        return(
            <div className="App">
                <Header/>
                <Switch>
                    <Route exact path="/home" component={HomePage}/>
                    <Route exact path="/aboutus" component={AboutPage}/>
                </Switch>
                <Footer/>
            </div>
            
        )
    }
}

export default Main