// import logo from './logo.svg';
import Intro from './components/Intro';
import NavBar from './components/NavBar';
import './styles/index.css'
function App() {
  return (
    <div className="container">
      <NavBar />
      <div className='mask'>
        <Intro />
      </div>
    </div>
  );
}

export default App;
