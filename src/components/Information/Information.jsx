import { InformationLayout } from './InformationLayout';
import PropTypes from 'prop-types';

export const Information = (props) => {
	return (
		<InformationLayout
			isGameEnded={props.isGameEnded}
			isDraw={props.isDraw}
			currentPlayer={props.currentPlayer}
		/>
	);
};

Information.propTypes = {
	isGameEnded: PropTypes.bool,
	isDraw: PropTypes.bool,
	currentPlayer: PropTypes.string,
};

