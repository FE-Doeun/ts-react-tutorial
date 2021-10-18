import React from 'react';
import PropTypes from 'prop-types';

type Counterprop = {
    count: number;
    onIncrease: () => void;
    onDecrease: () => void;
    onIncreaseBy: (diff: number) => void;
};

 const Counter = ({ count, onIncrease, onDecrease, onIncreaseBy}:Counterprop) => {
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={onIncrease}>+1</button>
            <button onClick={onDecrease}>-1</button>
            <button onClick={() => onIncreaseBy(5)}>+5</button>
        </div>
    );
}

export default Counter;