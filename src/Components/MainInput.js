import React, { Component } from 'react';
import { Button, Card, TextField } from '@mui/material';

export default class MainInput extends Component {
	render() {
		const {
			currentItem: { name, quantity },
			changeState,
			handleClickAddButton,
		} = this.props; // Props destructuring

		return (
			<div className='Main'>
				<Card style={{ paddingTop: '20px' }}>
					<TextField
						style={{ margin: '20px 20px 20px 20px' }} // Input for Item's name
						id='name'
						label='Name'
						type='text'
						value={name}
						onChange={(e) => {
							changeState(e);
						}}
					/>
					<br />
					<TextField // Input for Item's quantity
						id='quantity'
						type='number'
						label='Quantity'
						min={1}
						value={quantity}
						onChange={(e) => changeState(e)}
					/>
					<br />
					<Button
						variant='outlined'
						className='buton' // Add button
						onClick={handleClickAddButton}
					>
						Adauga
					</Button>
				</Card>
			</div>
		);
	}
}
