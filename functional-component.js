import React, {useState} from 'react';

const Count = () => {
    const [count, setCount] = useState(0);

    return (
        <div>
            <button onClick={() => setCount(count + 1)}>Plus 1</button>
            <button onClick={() => setCount(count - 1)}>Minus 1</button>
            <br/>
            <p>{count}</p>
        </div>
    );
}