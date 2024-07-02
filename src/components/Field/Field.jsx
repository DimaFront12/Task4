import { FieldLayout } from "./FieldLayout";
import { useState, useEffect } from "react";
import { store } from "../../store/store";
import { WIN_PATTERNS } from "../../utils/constants";
import PropTypes from "prop-types";

export const Field = () => {
	const [state, setState] = useState(store.getState());
	const { currentPlayer, isGameEnded, field } = store.getState();

	useEffect(() => {
		const unsubscribe = store.subscribe(() => {
			setState(store.getState());
		});
		return () => unsubscribe();
	}, []);

	const whoWinner = () => {
		const { currentPlayer, field } = store.getState();

		const isWin = WIN_PATTERNS.some((pattern) =>
			pattern.every((item) => field[item] === currentPlayer)
		);

		if (isWin) {
			store.dispatch({ type: "SET_GAME_ENDED", payload: true });
		}

		const isNotEmpty = field.every((item) => item !== "");

		if (!isWin && isNotEmpty) {
			store.dispatch({ type: "SET_IS_DRAW", payload: true });
			store.dispatch({ type: "SET_GAME_ENDED", payload: true });
		}

		if (!isWin && !isNotEmpty) {
			store.dispatch({
				type: "SET_USER",
				payload: currentPlayer === "O" ? "X" : "O",
			});
		}
	};

	const handleButton = (index) => {
		field[index] = currentPlayer;
		store.dispatch({ type: "SET_FIELD", payload: [...field] })
		whoWinner();
	};

	return (
		<FieldLayout
			field={field}
			handleButton={handleButton}
			isGameEnded={isGameEnded}
		/>
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