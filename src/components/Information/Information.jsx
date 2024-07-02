import { InformationLayout } from "./InformationLayout";
import { store } from "../../store/store";
import { useState, useEffect } from "react";
import PropTypes from "prop-types";

export const Information = () => {
	const [state, setState] = useState(store.getState());

	useEffect(() => {
		const unsubscribe = store.subscribe(() => {
			setState(store.getState());
		});
		return () => unsubscribe();
	}, []);
	
	const { isDraw, isGameEnded, currentPlayer } = store.getState();
	return (
		<InformationLayout
			isGameEnded={isGameEnded}
			isDraw={isDraw}
			currentPlayer={currentPlayer}
		/>
	);
};
