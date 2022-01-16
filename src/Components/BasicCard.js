import { Button, Card, CardContent, Typography } from '@mui/material';
import React, { Component } from 'react';
import { CONSTANTS } from '../CONST';
export default class BasicCard extends Component {
	render() {
		const {
			item: { key, name, quantity },
			handleClickMinus,
			handleClickPlus,
		} = this.props;

		return (
			<div className='item'>
				<Card sx={{ minWidth: 100 }}>
					<CardContent>
						<Typography sx={{ fontSize: 25 }} gutterBottom>
							Name:{name}
						</Typography>

						<Typography sx={{ fontSize: 25 }} gutterBottom>
							Quantity: {quantity}
						</Typography>
						<Typography sx={{ fontSize: 20 }} gutterBottom>
							Modify Quantity:
							<Button onClick={() => handleClickPlus(key)}>+</Button>
							<Button onClick={() => handleClickMinus(key)}>-</Button>
						</Typography>
					</CardContent>
				</Card>
			</div>
		);
	}
}
