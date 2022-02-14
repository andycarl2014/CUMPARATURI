// Library imports
import { Container, Toolbar } from '@mui/material';
import React from 'react';

//Custom imports
import { CONSTANTS } from '../CONST';
import { AppBarCustom, TypographyCustom, BoxHeader } from './styles';

export default function Header() {
  return (
    <BoxHeader>
      <AppBarCustom>
        <Container>
          <Toolbar>
            <TypographyCustom>{CONSTANTS.title}</TypographyCustom>
          </Toolbar>
        </Container>
      </AppBarCustom>
    </BoxHeader>
  );
}
