import react, { useState } from 'react';
import Button from './Button';

const Counter = () => {
  const [count, setCount] = useState(5);

  const incrementar = () => {
    setCount(count + 50);
  };

  return (
        <button onClick={incrementar}>
            {count}
        </button>
  )
}

export default Counter
