import React, { useState, useEffect } from "react";

const CounterA = React.memo(({ count }) => {
  useEffect(() => {
    console.log("counter 리렌더");
  });
  return <div>{count}</div>
});

const CounterB = React.memo(({ obj }) => {
  useEffect(() => {
    console.log("obj 리렌더");
  });
  return <div>{obj.count}</div>;
});

const areEqual = (prevProps, nextProps) => {
    // ture => 만약 같다면 리렌더링이 일어나지 않는다
    // false => 다르다면 리렌더링이 일어난다
    console.log(prevProps.obj.count === nextProps.obj.count)
    return prevProps.obj.count === nextProps.obj.count;
}

const MemoizedCounterB = React.memo(CounterB, areEqual)

const OptimizeTest = () => {
  const [count, setCount] = useState(0);
  const [obj, setObj] = useState({
    count: 1,
  });

  return (
    <div style={{ padding: 50 }}>
      <div>
        <h2>Counter A</h2>
        <CounterA count={count} />
        <button onClick={() => setCount(count+1)}>button A</button>
      </div>
      <div>
        <h2>Counter B</h2>
        <MemoizedCounterB obj={obj} />
        <button
          onClick={() =>
            setObj({
              count: obj.count,
            })
          }
        >
          button B
        </button>
      </div>
    </div>
  );
};

export default OptimizeTest;
