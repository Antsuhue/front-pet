import './App.css';
import Carousel from './components/Carousel';
import Menu from './components/Menu';
import AboutUs from './components/AboutUs';

function App() {
  return (
    <div className="App">
      <header className='header'>
        <Carousel />
        <Menu />
      </header>
      <div>
        <AboutUs />
      </div>
    </div>
  );
}

export default App;
