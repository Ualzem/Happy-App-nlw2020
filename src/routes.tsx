import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Landing from './pages/Landing';  /* ROTA DA LANDING PAGE */
import OrphanagesMap from './pages/OrphanagesMap';  /* ROTA DA PAGINA DO MAPA */
import Orphanage from './pages/Orphanage';
import CreateOrphanage from './pages/CreateOrphanage';

function Routes() {
    return (
        <BrowserRouter>
        <Switch>
        <Route path="/" exact component={Landing} /> 
        <Route path="/app" component={OrphanagesMap} /> 

        <Route path="/orphanages/create" component={CreateOrphanage} />
        <Route path="/orphanages/:id" component={Orphanage} />
        </Switch> 
        </BrowserRouter>
    )
}
 /*  O exact acima quer dizer que essa será a 1ª página que será mostrada. */
export default Routes;