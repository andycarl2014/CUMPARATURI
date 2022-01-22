import { AppBar, Container, Toolbar, Typography } from '@mui/material';
import React, { Component } from 'react';
import { Box } from '@mui/system';

export default class Footer extends Component {
	render() {
		return (
			<Box sx={{ flexGrow: 1 }} className='footer'>
				<AppBar position='static' color='primary'>
					<Container maxWidth='md'>
						<Toolbar>
							<Typography
								variant='body1'
								color='inherit'
								className='footerPage'
							>
								© 2022 Constantin Dragos Gabriel
							</Typography>
						</Toolbar>
					</Container>
				</AppBar>
			</Box>
		);
	}
}
