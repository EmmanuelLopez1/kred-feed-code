import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import { Navbar } from './components/Navbar/Navbar'
import { Card } from './components/Card/Card'
import { InputText } from './components/InputText/InputText'
import { InputSelectContainer } from './components/InputSelectContainer/InputSelectContainer'
import {InputDate} from './components/InputDate/InputDate'
import {Countries} from './components/Countries/Countries'

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Card title="Informacion general">
        <InputText placeholder="Nombre" />
        <InputSelectContainer placeholder="" options={['Hombre', 'Mujer']} />
        <InputDate/>
      </Card>
      <Countries/>
    </>
  );
}

export default App;
