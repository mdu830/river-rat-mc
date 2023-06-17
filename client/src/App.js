import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import HomePage from './routes/root';
import About from './routes/about';
import Contact from './routes/contact';

function App() {
  return (
    <div className="App">
      <Header />
    </div>
  );
}

export default App;
