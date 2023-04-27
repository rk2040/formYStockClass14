import './App.css';
import Formulario from './components/Formulario/Formulario';
import Productos from './components/Productos/Productos';

function App() {
  return (
    <div >
      <h1>Formulario con BBDD</h1>
      <Formulario/>
      <h2>Mis Productos</h2>
      <Productos/>
    </div>
  );
}

export default App;
