import { Button, Card, CardContent, Typography } from '@mui/material';
import plus from '../images/plus.png';
import minus from '../images/minus.png';
import React, { Component } from 'react';
import { CONSTANTS } from '../CONST';
export default class BasicCard extends Component {
	render() {
		const {
			item: { key, name, quantity, completed },
			handleClickMinus,
			handleClickPlus,
			handleCheckboxCheck,
		} = this.props;

		return (
			<div className='item'>
				<Card sx={{ minWidth: 100 }}>
					<CardContent>
						<Typography sx={{ fontSize: 25 }} className='typo' gutterBottom>
							Name: {name}
						</Typography>

						<Typography sx={{ fontSize: 25 }} className='typo' gutterBottom>
							Quantity: {quantity}
						</Typography>
						<Typography
							sx={{ fontSize: 20 }}
							className='typo modifyQuantity'
							gutterBottom
						>
							Modify Quantity:
							<Button
								className='buttonQuantity'
								onClick={() => handleClickPlus(key)}
							>
								<img src={plus} className='imgQ' />
							</Button>
							<Button onClick={() => handleClickMinus(key)}>
								<img src={minus} className='imgQ' />
							</Button>
						</Typography>
						<Typography>
							<Button
								className='buttonMark'
								onClick={() => {
									handleCheckboxCheck(key);
								}}
							>
								Mark as {completed === false ? ' completed' : 'uncompleted'}
							</Button>
						</Typography>
					</CardContent>
				</Card>
			</div>
		);
	}
}
