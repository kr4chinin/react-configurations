import { useState } from 'react';
import './Counter.scss'

export const Counter = () => {
	const [counter, setCounter] = useState(0);

	const increment = () => {
		setCounter(counter + 1);
	};

	const decrement = () => {
		setCounter(counter - 1);
	};

	return (
		<div>
			<pre>Counter {counter}</pre>
			<button onClick={decrement}>-</button>
			<button onClick={increment}>+</button>
		</div>
	);
};
