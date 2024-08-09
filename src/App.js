import './App.css';
import Footer from './components/Footer.tsx';
import MainArea from './components/MainArea.tsx';
import { Navigation }  from './components/Navigation.tsx';

function App() {
  return (
    <div className="App">
      <Navigation/>
      <MainArea/>
    </div>
  );
}

export default App;
