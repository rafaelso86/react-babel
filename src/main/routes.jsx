import React from 'react'
import { Router, Route, Redirect, hashHistory } from 'react-router'

// Mapeando as rotas
import Todo from '../todo/todo'
import About from '../about/about'

// Componente baseado em função
export default props => (
    <Router history={hashHistory}>
        <Router path="/todos" component={Todo} />
        <Router path="/about" component={About} />
        <Redirect from ="*" to="/todos" />
    </Router>
)