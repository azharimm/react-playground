import React, { useEffect, useRef, useState } from 'react'

const UseRefPage = (props) => {
    const [name, setName] = useState('');
    const renderCount = useRef(0);
    const inputRef = useRef();

    useEffect(() => {
        renderCount.current = renderCount.current + 1;
        inputRef.current = name;
    }, [name])

    function focus() {
        inputRef.current.focus();
    }

    return (
        <div className="text-center">
            <input ref={inputRef} value={name} onChange={e => setName(e.target.value)} />
            <div>My name is {name}</div>
            <div>Previously : {inputRef.current}</div>
            <div>render : {renderCount.current}</div>
            <button onClick={focus}>Focus</button>
        </div>
    )
}

export default UseRefPage
