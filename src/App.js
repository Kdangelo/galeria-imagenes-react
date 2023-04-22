import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Card from './components/Card';

function App() {
  return (
    <div className="App">
      <Header title={"Galería de imágenes con React"} />
      <Card title={"Mujer peliroja"} descript={"Mujer de pelo rojo y pecas"} />
    </div>
  );
}

export default App;
