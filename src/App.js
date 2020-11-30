import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome'
import Hello from './components/Hello';
import Message from './components/Message';

function App() {
  return (
    <div className="App">
      {/* <Greet name='Ajay' second='DOn' />
      <Greet name='Sanjay'second='God' />
      <Greet name='Bijay' second='Lord' /> */}
      <Message />

    
    </div>
  );
}

export default App;
