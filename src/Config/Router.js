import React from 'react'
import { BrowserRouter as Router , Route} from 'react-router-dom'
import {Home, About, Contact, Profile} from './index'


export default class basicRouter extends React.Component{
    render(){
        return(
            <Router>
                <Route exact path='/' component={Home}/>
                <Route path='/About' component={About}/>
                <Route path='/Contact' component={Contact}/>
                <Route path='/Profile' component={Profile}/>
            </Router>
        )
    }
}