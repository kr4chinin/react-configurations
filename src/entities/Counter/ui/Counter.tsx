import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'shared/ui';
import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue';
import { counterActions } from '../model/slice/counterSlice';

export const Counter = () => {
	const dispatch = useDispatch();
	const counterValue = useSelector(getCounterValue);

	const increment = () => {
		dispatch(counterActions.increment());
	};

	const decrement = () => {
		dispatch(counterActions.decrement());
	};

	return (
		<div>
			<h1 aria-label="value">{counterValue}</h1>

			<Button aria-label="increment button" size="size-xl" onClick={increment}>
				+
			</Button>
			<Button aria-label="decrement button" size="size-xl" onClick={decrement}>
				-
			</Button>
		</div>
	);
};
