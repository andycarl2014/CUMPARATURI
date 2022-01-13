import React, { Component } from 'react';
import { CONSTANTS } from './CONST';

export default class Item extends Component {
	completedStyles = {
		fontStyle: 'italic',
		color: '#cdcdcd',
		textDecoration: 'line-through',
	};
	render() {
		const props = this.props;
		return (
			<div
				className={
					props.item.completed ? CONSTANTS.completed : CONSTANTS.unCompleted
				} // Sets the className based on the item.completed prop
			>
				<input
					type='checkbox'
					checked={props.item.completed}
					onChange={
						() => props.handleCheckboxCheck(props.item.key)
						//Changes the item.completed prop
					}
				/>
				<p
					style={props.item.completed ? this.completedStyles : null}
					// If the item is completed it adds the style
				>
					{props.item.name} ------- {props.item.quantity} Bucati
				</p>
				<button
					hidden={props.item.completed} // If the item is completed, hides the + button
					onClick={
						() => props.handleClickPlus(props.item.key)
						// Adds the functionality for the + button
					}
				>
					+
				</button>
				<button
					hidden={props.item.completed} // If the item is completed, hides the - button
					onClick={
						() => props.handleClickMinus(props.item.key)
						// Adds the functionality for the - button
					}
				>
					-
				</button>
			</div>
		);
	}
}
