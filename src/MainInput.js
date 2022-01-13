import React, { Component } from 'react';

export default class MainInput extends Component {
	render() {
		const props = this.props;
		return (
			<div className='Main'>
				<input
					id='name'
					type='text'
					value={props.currentItem.name}
					onChange={(e) => {
						props.changeState(e);
					}}
				/>
				<input
					id='quantity'
					type='number'
					min={1}
					value={props.currentItem.quantity}
					onChange={(e) => props.changeState(e)}
				/>
				<button className='buton' onClick={props.handleClickAddButton}>
					Adauga
				</button>
			</div>
		);
	}
}
