import logo from './logo.svg';
import './App.css';
import InputWithUseState from './components/InputWithUseState'
import InputWithUseRef from './components/InputWithUseRef'
import PropsSample from './components/PropsSample';

function App() {
  return (
    <div className="App">
      <InputWithUseState />
      <InputWithUseRef />
      <PropsSample text="use props" />
    </div>
  );
}

export default App;
