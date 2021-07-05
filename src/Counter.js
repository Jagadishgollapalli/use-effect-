import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Counter() {
  const [count, setCount] = useState(0);
  const [city, setCity] = useState('Chennai');

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);

  // componentDidMount
  useEffect(() => {
    console.log('componentDidMount !!!');
    return () => {
      console.log('componentWillUnmount !!!');
    };
  }, [city]);

  // componentDidUpdate
  useEffect(() => {
    console.log('componentDidUpdate for all state !!!');
  });

  // componentDidUpdate for count
  useEffect(() => {
    console.log('componentDidUpdate for count !!!');
  }, [count]);

  return (
    <div>
      <input 
        style={{border: '2px solid',width:'250px'}}
        type="text"
        value={city}
        onChange={({ target: { value } }) => setCity(value)}
        placeholder="set your default city"
      />
      <p>Counter value : {count}</p>
      <button className="btn btn-primary active " onClick={increment}>Increment</button>&nbsp;
      <button className="btn btn-primary active" onClick={decrement}>Decrement</button>&nbsp;
      <button className="btn btn-primary active" onClick={reset}>Reset</button>
    </div>
  );
}

export default Counter;

