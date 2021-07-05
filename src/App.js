import React, { useState } from 'react';
import Counter from './Counter';

export default function App() {
  const [show, setShow] = useState(true);
  return (
    <div className="mt-3 " style={{textAlign: 'center'}}>
      <h4><u>Component life cycle -UseEffect()</u></h4>
      <button className="btn btn-success active" onClick={() => setShow(!show)}>{show ? 'Hide Data' : 'Show Data'}</button>
      <br />
      <br />
      {show ? <Counter /> : <></>}
    </div>
  );
}
