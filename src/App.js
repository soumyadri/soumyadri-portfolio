import './App.css';
import { Intro } from './Components/Intro/Intro';
import { About } from './Components/About/About';
import { Skill } from './Components/Skill/Skill';
import { Project } from './Components/Project/Project';
import {DenseAppBar} from './Components/NavBar/NavBar'
import { Github } from './Components/Github/Github';

function App() {
  return (
    <div className="App">
      <DenseAppBar />
      <Intro />
      <About />
      <Skill />
      <Project />
      <Github />
    </div>
  );
}

export default App;