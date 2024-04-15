import Style from './Field.module.css';
import PropTypes from 'prop-types';

export const FieldLayout = ({ field, handleButton, whoWinner, isGameEnded }) => {
	return (
		<div className={Style['game-board']}>
			{field.map((item, index) => (
				<button
					className={`${Style['game-board__square']} ${
						item === 'O'
							? Style['game-board__square-blue']
							: Style['game-board__square-red']
					}`}
					key={index}
					onClick={() => {
						handleButton(index)
						whoWinner()
					}}
					disabled={item || isGameEnded}
				>
					{item}
				</button>
			))}
		</div>
	);
};

FieldLayout.propTypes = {
	field: PropTypes.array,
	handleButton: PropTypes.func,
	whoWinner: PropTypes.func,
	isGameEnded: PropTypes.bool,
};
