import React, { useEffect, useState } from "react";

const CounterA = ({count}) => {
    useEffect(() => {
        console.log(`counterA Update count: ${count}`)
    })
    return <div>{count}</div>
}
const CounterB = ({obj}) => {
    useEffect(() => {
        useEffect(() => {
            console.log(`counterB Update obj.count: ${obj.count}`)
        })
    })
    return <div>{obj.count}</div>
} 

const OptimizeTest = () => {
  const [count, setCount] = useState(1);
  const [obj, setObj = useState] = useState({
    count: 1
  });
  return <div style={{ padding: 50 }}>
    <div>
    <h2>Count A</h2>
    <CounterA count={count}/>
    <button onClick={() => setCount(count)}>A button</button>
    </div>
    <div>
        <h2>Counter B</h2>
        <CounterB obj={obj}/> 
        <button onClick={() => setObj({
            count: obj.count
        })}>B button</button>
    </div>
  </div>
};

export default OptimizeTest;
