import { GameLayout } from './components/GameLayout/GameLayout';
import { useState } from 'react';
export const App = () => {
	const [currentPlayer, setCurrentPlayer] = useState('X');
	const [isGameEnded, setIsGameEnded] = useState(false);
	const [isDraw, setIsDraw] = useState(false);
	const [field, setField] = useState(['', '', '', '', '', '', '', '', '']);
	return (
		<GameLayout
			field={field}
			isGameEnded={isGameEnded}
			isDraw={isDraw}
			currentPlayer={currentPlayer}
			setField={setField}
			setCurrentPlayer={setCurrentPlayer}
			setIsGameEnded={setIsGameEnded}
			setIsDraw={setIsDraw}
		/>
	);
};
