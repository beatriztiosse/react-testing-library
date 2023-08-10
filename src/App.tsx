import './App.css';
import { Skills } from './components/skills/skills';

function App() {
  const skills = ["React", "TypeScript", "Jest", "Cypress"]
  return (
    <div className="App">
      <Skills skills={skills} />
    </div>
  );
}

export default App;
