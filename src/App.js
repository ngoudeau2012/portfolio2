import logo from './logo.svg';
import './App.css';
import CircleImg from './components/circleImg';
import headshot1 from './assets/images/headshot1.JPG'
function App() {
  return (
    <div className="App">
      <CircleImg img={headshot1}/>
    </div>
  );
}

export default App;
