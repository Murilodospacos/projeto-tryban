import './App.css';
import ListTasks from './components/ListTasks';
import Navbar from './components/Navbar.js/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <header className="App-header">
       <ListTasks />
      </header>
    </div>
  );
}

export default App;
