import React, { Component } from 'react';

export default class Item extends Component {
	completedStyles = {
		fontStyle: 'italic',
		color: '#cdcdcd',
		textDecoration: 'line-through',
	};
	render() {
		return (
			<div
				className={this.props.item.completed ? 'complet' : 'incomplet'} // Sets the className based on the item.completed prop
			>
				<input
					type='checkbox'
					checked={this.props.item.completed}
					onChange={
						() => this.props.handleChange(this.props.item.key)
						//Changes the item.completed prop
					}
				/>
				<p
					style={this.props.item.completed ? this.completedStyles : null}
					// If the item is completed it adds the style
				>
					{this.props.item.name} ------- {this.props.item.quantity} Bucati
				</p>
				<button
					hidden={this.props.item.completed} // If the item is completed, hides the + button
					onClick={
						() => this.props.handleClickPlus(this.props.item.key)
						// Adds the functionality for the + button
					}
				>
					+
				</button>
				<button
					hidden={this.props.item.completed} // If the item is completed, hides the - button
					onClick={
						() => this.props.handleClickMinus(this.props.item.key)
						// Adds the functionality for the - button
					}
				>
					-
				</button>
			</div>
		);
	}
}
