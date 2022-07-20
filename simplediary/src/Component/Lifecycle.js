import React, { useEffect, useState} from "react";

const Lifecycle = () => {
    
    const [isVisible, setIsVisible] = useState(false);
    const toggle = () => setIsVisible(!isVisible)

    return <div style={{ padding: 20}}>
        <button onClick={toggle}>ON/OFF</button>
    </div>
}

export default Lifecycle;