import React, { useEffect } from 'react';

import * as config from '../../../config/config';
import classes from './Toastbar.module.css';

import Info from './Info/Info';
import Warning from './Warning/Warning';

export default function Toastbar(props) {
	const info = props.info;
	const warning = props.warning;
	const infoTimePassedHandler = props.infoTimePassedHandler;
	const warningTimePassedHandler = props.warningTimePassedHandler;

	// shows main info
	let informationElement = null;
	if (info !== '') {
		informationElement = (
			<Info customStyle={props.customInfoStyle}>{info}</Info>
		);
	}

	useEffect(() => {
		const timer = setTimeout(() => {
			infoTimePassedHandler();
		}, config.INFO_TIME_SEK * 1000);

		return () => clearTimeout(timer);
	}, [info]);


	// shows main warning
	let warningElement = null;
	if (warning !== '') {
		warningElement = (
			<Warning customStyle={props.customWarningStyle}>{warning}</Warning>
		);
	}

	useEffect(() => {
		const timer = setTimeout(() => {
			warningTimePassedHandler();
		}, config.WARNING_TIME_SEK * 1000);

		return () => clearTimeout(timer)
	}, [warning]);

	return (
		<div className={classes.Toastbar}>
			{informationElement}
			{warningElement}
		</div>
	);
}