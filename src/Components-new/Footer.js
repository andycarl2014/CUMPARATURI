// Library imports
import { Container, Toolbar } from '@mui/material';
import React from 'react';

//Custom imports
import { CONSTANTS } from '../CONST';
import { AppBarCustom, TypographyCustom, BoxFooter } from './styles';

export default function Footer() {
  return (
    <BoxFooter>
      <AppBarCustom>
        <Container>
          <Toolbar>
            <TypographyCustom>{CONSTANTS.footer}</TypographyCustom>
          </Toolbar>
        </Container>
      </AppBarCustom>
    </BoxFooter>
  );
}
