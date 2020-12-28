import React, { useState } from "react";

const UseStatePage = (props) => {
    const [count, setCount] = useState(4);

    function decrementCount() {
        setCount(prevCount => prevCount - 1)
    }

    function incrementCount() {
        setCount(prevCount => prevCount + 1)
    }
    
    return (
        <div className="text-center">
            <button onClick={decrementCount}>-</button>
            <span>{count}</span>
            <button onClick={incrementCount}>+</button>
        </div>
    );
};

export default UseStatePage;
