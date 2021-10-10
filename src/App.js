import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import { Navbar } from './components/Navbar/Navbar'
import { Card } from './components/Card/Card'

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Card title="Informacion general"></Card>
    </>
  );
}

export default App;
