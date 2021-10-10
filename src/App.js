import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import { Navbar } from './components/Navbar/Navbar'
import { Card } from './components/Card/Card'
import {InputText} from './components/InputText/InputText'
import {InputSelect} from './components/InputSelect/InputSelect'

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Card title="Informacion general">
        <InputText placeholder="Nombre"/>
        <InputSelect placeholder=""/>
      </Card>
    </>
  );
}

export default App;
