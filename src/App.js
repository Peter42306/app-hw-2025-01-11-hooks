import logo from './logo.svg';
import './App.css';
import User from './components/User/User';
import User1 from './components/User1/User1';
import User2 from './components/User2/User2';
import ChangerTitle from './components/ChangerTitle/ChangerTitle';
import SimpleTimer from './components/SimpleTimer/SimpleTimer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <User></User> */}
        {/* <User1></User1> */}
        {/* <User2></User2> */}
        <ChangerTitle></ChangerTitle>
        <SimpleTimer></SimpleTimer>
      </header>
    </div>
  );
}

export default App;
