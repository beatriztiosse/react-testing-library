import './App.css';
import { Users } from './components/users/users';
import { AppProviders } from './providers/app-providers';

function App() {
  return (
    <AppProviders>
      <div className="App">
        <Users />
      </div>
    </AppProviders>
  );
}

export default App;
