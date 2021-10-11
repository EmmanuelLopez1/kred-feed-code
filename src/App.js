import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import {Route, Switch, BrowseRouter} from 'react-router-dom';
import { Page } from './pages/page'
import { RepresentanteLegal } from './pages/Perfil/RepresentanteLegal'


function App() {
  return (
    <>
      <BrowseRouter>
        <Switch>
          <Route path="/perfil/representante-legal">
            <Page>
              <RepresentanteLegal />
            </Page>
          </Route>
        </Switch>
      </BrowseRouter>


    </>
  );
}

export default App;
