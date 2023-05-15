import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'shared/ui';
import { ButtonSize } from 'shared/ui/Button/Button';
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

			<Button
				aria-label="increment button"
				size={ButtonSize.XL}
				onClick={increment}
			>
				+
			</Button>
			<Button
				aria-label="decrement button"
				size={ButtonSize.XL}
				onClick={decrement}
			>
				-
			</Button>
		</div>
	);
};
