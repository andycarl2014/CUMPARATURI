import React, { Component } from 'react';

export default class Item extends Component {
	completedStyles = {
		fontStyle: 'italic',
		color: '#cdcdcd',
		textDecoration: 'line-through',
	};
	render() {
		return (
			<div className={this.props.item.completed ? 'complet' : 'incomplet'}>
				<input
					type='checkbox'
					checked={this.props.item.completed}
					onChange={() => this.props.handleChange(this.props.item.key)}
				/>
				<p style={this.props.item.completed ? this.completedStyles : null}>
					{this.props.item.name} ------- {this.props.item.quantity} Bucati
				</p>
				<button
					hidden={this.props.item.completed}
					onClick={() => this.props.handleClickPlus(this.props.item.key)}
				>
					+
				</button>
				<button
					hidden={this.props.item.completed}
					onClick={() => this.props.handleClickMinus(this.props.item.key)}
				>
					-
				</button>
			</div>
		);
	}
}
