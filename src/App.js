import logo from './logo.svg';
import './App.css';
import CircleImg from './components/circleImg';
import headShot1 from './assets/images/headshot1.JPG'
import HeadingLine from './components/headingLine';

function App() {
  return (
    <div className="App">
      <CircleImg img={headShot1}/>
      <HeadingLine/>
    </div>
  );
}

export default App;
