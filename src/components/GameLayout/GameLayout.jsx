import Styles from "./GameLayout.module.css";
import { Information } from "../Information/Information";
import { Field } from "../Field/Field";
import { store } from "../../store/store";
import { useState, useEffect } from "react";

export const GameLayout = () => {
	const [state, setState] = useState(store.getState());

	useEffect(() => {
		const unsubscribe = store.subscribe(() => {
			setState(store.getState());
		});
		return () => unsubscribe();
	}, []);

	const again = () => {
		store.dispatch({ type: "RESET_FIELD" })
		console.log(store.getState())
	};
	return (
		<>
			<Information />
			<Field />
			<button className={Styles.btn} onClick={again}>
				Начать заново
			</button>
		</>
	);
};
