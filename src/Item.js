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
		const item = props.item;
		return (
			<div
				className={
					item?.completed ? CONSTANTS.completed : CONSTANTS.unCompleted
				} // Sets the className based on the item.completed prop
			>
				<input
					type='checkbox'
					checked={item?.completed}
					onChange={
						() => props.handleCheckboxCheck(item.key)
						//Changes the item.completed prop
					}
				/>
				<p
					style={item.completed ? this.completedStyles : null}
					// If the item is completed it adds the style
				>
					{item.name} ------- {item.quantity} Bucati
				</p>
				<button
					hidden={item.completed} // If the item is completed, hides the + button
					onClick={
						() => props.handleClickPlus(item.key)
						// Adds the functionality for the + button
					}
				>
					+
				</button>
				<button
					hidden={item.completed} // If the item is completed, hides the - button
					onClick={
						() => props.handleClickMinus(item.key)
						// Adds the functionality for the - button
					}
				>
					-
				</button>
			</div>
		);
	}
}
