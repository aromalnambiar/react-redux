import { useDispatch, useSelector } from 'react-redux';
import styles from './Counter.module.css';
import { counterAction } from '../store/counter';

const Counter = () => {

  const dispatch = useDispatch();
  const counter = useSelector(state => state.counter.counter)
  const showCounter = useSelector(state => state.counter.showCounter)

  const counterIncreament = () => {
    dispatch(counterAction.increament())
  }


  const counterDecreament = () => {
    dispatch(counterAction.decrement())
  }

  const counterByFive = () => {
    dispatch(counterAction.increase(5))
  }

  const toggleCounterHandler = () => {
    dispatch(counterAction.showCounter())
  }

  
  return (
    <main className={styles.counter}>
      <h1>Redux Counter</h1>
      {showCounter && <div className={styles.value}>{counter}</div>}
      <div  >
        <button onClick={counterDecreament} >Decrement</button>
        <button onClick={counterIncreament} >Increment</button>
        <button onClick={counterByFive} >Increment By 5</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
