import React from 'react';

import './global.css';

import Routes from './routes'

// JSX (Javascript e XML) 

function App() {

  // const [counter, setCounter] = useState(0);

  // Array [valor, funcaoDeAtualizacao]

  // function increment() {
  //   setCounter(counter +1);
  // };
  // function subtrair() {
  //   if(counter==0){
  //     setCounter(counter);
  //   }else{
  //     setCounter(counter -1);
  //   }
  // }
  return (
    <div>
      <Routes/>
      {/* <Header>Contador: {counter * 8}</Header> */}
      {/* <button onClick={increment}>Incrementar</button> */}
      {/* <button onClick={subtrair}>Subtrair</button> */}
    </div>
  );
}

export default App;
