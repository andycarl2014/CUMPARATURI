import { AppBar, Container, Toolbar, Typography } from '@mui/material';
import React, { Component } from 'react';
import { Box } from '@mui/system';

export default class Header extends Component {
	render() {
		return (
			<Box sx={{ flexGrow: 1 }} className='header'>
				<AppBar position='static'>
					<Container maxWidth='md'>
						<Toolbar>
							<Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
								CUMPARATURI
							</Typography>
						</Toolbar>
					</Container>
				</AppBar>
			</Box>
		);
	}
}
