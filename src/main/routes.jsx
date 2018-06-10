import React from 'react'
import { Router, Route, Redirect, hashHistory } from 'react-router'

// Mapeando as rotas
import Home from '../home/home'

// Componente baseado em função
export default props => (
    <Router history={hashHistory}>
        <Router path="/home" component={Home} />
        <Redirect from ="*" to="/home" />
    </Router>
)