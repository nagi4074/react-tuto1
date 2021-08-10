import React, { useState, useEffect } from 'react';

const UseEffectSample = () => {
    const [count, setCount] = useState(0);
    useEffect(() => {
        document.title = `${count}`
    })

    return (
        <div>
            <button onClick={() => setCount((pre) => pre + 1)}>click</button>
            <p>count:{count}</p>
        </div>
    )
}

export default UseEffectSample