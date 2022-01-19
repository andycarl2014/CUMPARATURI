import { AppBar, Container, Toolbar, Typography } from '@mui/material';
import React, { Component } from 'react';

export default class Footer extends Component {
	render() {
		return (
			<AppBar position='static' color='primary'>
				<Container maxWidth='md'>
					<Toolbar>
						<Typography variant='body1' color='inherit'>
							© 2022 Constantin Dragos Gabriel
						</Typography>
					</Toolbar>
				</Container>
			</AppBar>
		);
	}
}
