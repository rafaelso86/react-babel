// Importando as dependências do Bootstrap e do Fonte Awesome
import 'modules/bootstrap/dist/css/bootstrap.min.css'
import 'modules/font-awesome/css/font-awesome.min.css'
import '../css/custom.css'

import React from 'react'

// Rotas
//import Routes from './routes'

// Home
import Home from './routes'

// Os parênteses demonstram ser uma expressão
export default props => (
    <div className="container">
        <Home />
    </div>
)