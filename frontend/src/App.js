import React from 'react';
//import React, {useState} from 'react';
import './global.css';
import Routes from './routes';

function App() {
  return (
    <div>
      <Routes />
    </div>
  );
}
//import Header from './Header';
/*
function App() {
  const [counter, setCounter] = useState(0); //Retorna um Array [valor, funcaoDeAtualização]
  
  function increment() {
    setCounter(counter + 1);
  }
  return (
    <div>
      <Header>Contador: {counter}</Header>
      <button onClick={increment}>Incrementar</button>
    </div>
  //  <h1>Hello Word</h1> //JSX - Quando o HTML está dentro do JavaScrip
  );
}
*/
export default App;
