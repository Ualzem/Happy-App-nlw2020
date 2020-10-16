import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Landing from './pages/Landing';  /* ROTA DA LANDING PAGE */
import OrphanagesMap from './pages/OrphanagesMap';  /* ROTA DA PAGINA DO MAPA */

function Routes() {
    return (
        <BrowserRouter>
        <Switch>
        <Route path="/" exact component={Landing} /> 
        <Route path="/app" component={OrphanagesMap} /> 
        </Switch> 
        </BrowserRouter>
    )
}
 /*  O exact acima quer dizer que essa será a 1ª página que será mostrada. */
export default Routes;