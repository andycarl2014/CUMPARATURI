import React, { Component } from 'react';
import { AppBar, Button, IconButton, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { Toolbar } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
export default class Header extends Component {
	render() {
		return (
			<Box sx={{ flexGrow: 1 }} className='header'>
				<AppBar position='static'>
					<Toolbar>
						<Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
							CUMPARATURI
						</Typography>
					</Toolbar>
				</AppBar>
			</Box>
		);
	}
}
