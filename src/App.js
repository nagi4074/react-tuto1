import logo from './logo.svg';
import './App.css';
import InputWithUseState from './components/InputWithUseState'
import InputWithUseRef from './components/InputWithUseRef'
import PropsSample from './components/PropsSample';
import StateSample from './components/StateSample';
import LifeCycle from './components/LifeCycle';

function App() {
  return (
    <div className="App">
      <InputWithUseState />
      <InputWithUseRef />
      <PropsSample text="use props" />
      <StateSample />
      <LifeCycle />
    </div>
  );
}

export default App;
