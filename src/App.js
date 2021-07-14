import './App.css';
import { Intro } from './Components/Intro/Intro';
import { About } from './Components/About/About';
import { Skill } from './Components/Skill/Skill';
import { Project } from './Components/Project/Project';
import {DenseAppBar } from './Components/NavBar/NavBar'

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