import { FieldLayout } from './FieldLayout';
import PropTypes from 'prop-types';

export const Field = ({
	field,
	setField,
	currentPlayer,
	setCurrentPlayer,
	setIsGameEnded,
	setIsDraw,
	isGameEnded,
}) => {

	const WIN_PATTERNS = [
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8], // Варианты побед по горизонтали
		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8], // Варианты побед по вертикали
		[0, 4, 8],
		[2, 4, 6], // Варианты побед по диагонали
	];

	const whoWinner = () => {
		const isWin = WIN_PATTERNS.some((pattern) =>
			pattern.every((item) => field[item] === currentPlayer),
		);

		if (isWin) {
			setIsGameEnded(true);
		}

		const isNotEmpty = field.every((item) => item !== '');

		if (!isWin && isNotEmpty) {
			setIsDraw(true);
		}

		if (!isWin && !isNotEmpty) {
			setCurrentPlayer(currentPlayer === 'O' ? 'X' : 'O');
		}
	};

	const handleButton = (index) => {
		field[index] = currentPlayer;

		setField([...field]);
	};

	return (
		<FieldLayout field={field} handleButton={handleButton} whoWinner={whoWinner} isGameEnded={isGameEnded}/>
	);
};

Field.propTypes = {
	field: PropTypes.array,
	setField: PropTypes.func,
	currentPlayer: PropTypes.string,
	setCurrentPlayer: PropTypes.func,
	setIsGameEnded: PropTypes.func,
	setIsDraw: PropTypes.func,
	isGameEnded: PropTypes.bool,
};
