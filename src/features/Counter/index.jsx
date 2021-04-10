import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrease, increase } from './counterSlice';

CounterFeature.propTypes = {};

function CounterFeature(props) {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const handleIncreaseClick = () => {
    const action = increase();
    console.log(action);
    dispatch(action);
  };

  const handleDecreaseClick = () => {
    const action = decrease();
    console.log(action);
    dispatch(action);
  };

  return (
    <div>
      <div>
        <button onClick={handleIncreaseClick}>Increase</button>
      </div>
      Counter {counter}
      <div>
        <button onClick={handleDecreaseClick}>Decrease</button>
      </div>
    </div>
  );
}

export default CounterFeature;
