import React, { useState } from 'react';

const StateComplexity = () => {
    const [count, setCount] = useState(0)

    const handleIncreaseByOne = () => {
        setCount(count + 1)
        setCount(count + 1)
        setCount(count + 1)
    }

    const handleIncreaseByThree = () => {
        setCount((prev) => {
            console.log('1st :', prev)
            return prev + 1;
        })
        setCount((prev) => {
            console.log('2nd :', prev)
            return prev + 1;
        })
        setCount((prev) => {
            console.log('3rd :', prev)
            return prev + 1;
        })
    }
    return (
        <div>
            <p> {count} </p>
            {console.log('ui rendered')}
            <button onClick={handleIncreaseByOne}>Increase 1</button>
            <button onClick={handleIncreaseByThree}>Increase 3</button>
        </div>
    );
};

export default StateComplexity;