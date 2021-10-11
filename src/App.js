import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import { Page } from './pages/page'
import { Home } from './pages/Home'
import { RepresentanteLegal } from './pages/Perfil/RepresentanteLegal'
import { InformacionFiscal } from './pages/Perfil/InformacionFiscal'


function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Page>
              <Home/>
            </Page>
          </Route>

          <Route exact path="/perfil/representante-legal">
            <Page>
              <RepresentanteLegal />
            </Page>
          </Route>

          <Route exact path="/perfil/informacion-fiscal">
            <Page>
              <InformacionFiscal />
            </Page>
          </Route>
        </Switch>
      </BrowserRouter>


    </>
  );
}

export default App;
