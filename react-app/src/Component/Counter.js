import { useState } from "react"
import OddEvenResult from "./OddEvenResult";

const Counter = ({initialVlaue}) => {

    const [count, setCount] = useState(initialVlaue);

    const onPlus = () => {
        setCount(count + 1)
    }
    const onMinus = () => {
        setCount(count -1)
    }

    return (
        <div>
            <h2>{count}</h2>
            <button onClick={onPlus}>+</button>
            <button onClick={onMinus}>-</button>
            <OddEvenResult count={count}/>
        </div>
    )

}

export default Counter