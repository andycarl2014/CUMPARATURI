// Library imports
import { Container, Toolbar } from '@mui/material';
import React, { Component } from 'react';
import { Box } from '@mui/system';

//Custom imports
import { CONSTANTS } from '../CONST';
import { AppBarCustom, TypographyCustom } from './styles';

export default class Header extends Component {
  render() {
    return (
      <Box>
        <AppBarCustom>
          <Container>
            <Toolbar>
              <TypographyCustom>{CONSTANTS.title}</TypographyCustom>
            </Toolbar>
          </Container>
        </AppBarCustom>
      </Box>
    );
  }
}
