import React from 'react';
import './spinner.css';

export function Spinner(props) {
	return (
		<div className="wrap">
			<div className="spinner-wrap">
				<div className="spinner">
					<i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i>
				</div>
			</div>
		</div>
	);
}