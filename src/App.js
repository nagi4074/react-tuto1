import logo from './logo.svg';
import './App.css';
import InputWithUseState from './components/InputWithUseState'
import InputWithUseRef from './components/InputWithUseRef'
import PropsSample from './components/PropsSample';
import StateSample from './components/StateSample';
import LifeCycle from './components/LifeCycle';
import EventSample from './components/EventSample';
import ListSample from './components/ListSample';

function App() {
  return (
    <div className="App">
      <InputWithUseState />
      <InputWithUseRef />
      <PropsSample text="use props" />
      <StateSample />
      <LifeCycle />
      <EventSample />
      <ListSample />
    </div>
  );
}

export default App;
