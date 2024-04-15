import Styles from './GameLayout.module.css';
import { Information } from '../Information/Information';
import { Field } from '../Field/Field';
import PropTypes from 'prop-types';

export const GameLayout = ({
	isGameEnded,
	isDraw,
	currentPlayer,
	field,
	setField,
	setCurrentPlayer,
	setIsGameEnded,
	setIsDraw,
}) => {

	const again = () => {
		setCurrentPlayer('X');
		setIsGameEnded(false);
		setIsDraw(false);
		setField(['', '', '', '', '', '', '', '', '']);
	}
	return (
		<>
			<Information
				isGameEnded={isGameEnded}
				isDraw={isDraw}
				currentPlayer={currentPlayer}
			/>
			<Field
				field={field}
				currentPlayer={currentPlayer}
				setField={setField}
				setCurrentPlayer={setCurrentPlayer}
				setIsGameEnded={setIsGameEnded}
				setIsDraw={setIsDraw}
				isGameEnded={isGameEnded}
			/>
			<button className={Styles.btn} onClick={again}>Начать заново</button>
		</>
	);
};

GameLayout.propTypes = {
	isGameEnded: PropTypes.bool,
	isDraw: PropTypes.bool,
	currentPlayer: PropTypes.string,
	field: PropTypes.array,
	setField: PropTypes.func,
	setCurrentPlayer: PropTypes.func,
	setIsGameEnded: PropTypes.func,
	setIsDraw: PropTypes.func,
};
