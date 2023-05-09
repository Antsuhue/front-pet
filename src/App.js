import './App.css';
import Carousel from './components/Carousel';
import Menu from './components/Menu';

function App() {
  return (
    <div className="App">
      <header className='header'>
        <Carousel />
        <Menu></Menu>
      </header>
    </div>
  );
}

export default App;
