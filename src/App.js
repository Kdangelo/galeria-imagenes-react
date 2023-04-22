import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Cards from './components/Cards';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header title={"Galería de imágenes con React"} />
      <Cards img={"https://cdn.pixabay.com/photo/2017/06/24/02/56/art-2436545_1280.jpg"} title={"Mujer peliroja"} 
        descript={"Mujer de pelo rojo y pecas"} />
      <Cards img={"https://cdn.pixabay.com/photo/2018/01/13/19/39/fashion-3080644_1280.jpg"} title={"Mujer morena"} 
        descript={"Mujer de pelo y piel marron"} />
      <Cards img={"https://cdn.pixabay.com/photo/2018/01/06/09/25/hijab-3064633_1280.jpg"} title={"Mujer musulmana"} 
        descript={"Mujer de Hijab y religiosa"} />
      <Footer />
    </div>
  );
}

export default App;
