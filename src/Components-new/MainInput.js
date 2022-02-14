import React from 'react';
import { CONSTANTS } from '../CONST';
import {
  ButtonAdd,
  CustomTextField,
  DivAddElements,
  Main,
  TypographyCustom,
} from './styles';

function MainInput() {
  return (
    <Main>
      <DivAddElements>
        <TypographyCustom>Adauga elemente!</TypographyCustom>
        <CustomTextField id='name' name='name' label='Name' type='text' />
        <CustomTextField
          id='quantity'
          name='quantity'
          label='Quantity'
          type='text'
        />
      </DivAddElements>
    </Main>
  );
}

export default MainInput;
