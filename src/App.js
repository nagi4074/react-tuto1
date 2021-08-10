import logo from './logo.svg';
import './App.css';
import InputWithUseState from './components/InputWithUseState'
import InputWithUseRef from './components/InputWithUseRef'

function App() {
  return (
    <div className="App">
      <InputWithUseState />
      <InputWithUseRef />
    </div>
  );
}

export default App;
