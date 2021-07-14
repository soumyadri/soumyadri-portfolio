import './App.css';
import DenseAppBar from './Components/NavBar/NavBar';
import { Intro } from './Components/Intro/Intro';
import { About } from './Components/About/About';
import { Skill } from './Components/Skill/Skill';
import { Project } from './Components/Project/Project';

function App() {
  return (
    <div className="App">
      <DenseAppBar />
      <Intro />
      <About />
      <Skill />
      <Project />
    </div>
  );
}

export default App;