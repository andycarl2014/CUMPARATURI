// Library imports
import React from 'react';
import { CONSTANTS } from '../CONST';
import {
  ButtonAdd,
  CustomTextField,
  DivAddElements,
  Main,
  TypographyCustom,
} from './styles';

export default function MainInput(props) {
  const {
    currentItem: { name, quantity },
    handleChange,
    handleClickAddButton,
    name_error_text,
    quantity_error_text,
  } = props; // Props destructuring

  return (
    <Main>
      <DivAddElements>
        <TypographyCustom>Adauga elemente !</TypographyCustom>
        <CustomTextField // Input for Item's name
          id='name'
          name='name'
          label='Name'
          type='text'
          value={name}
          onChange={handleChange}
          error={name_error_text === CONSTANTS.empty ? false : true}
          helperText={name_error_text}
        />
        <br />

        <CustomTextField // Input for Item's quantity
          id='quantity'
          name='quantity'
          type='text'
          label='Quantity'
          value={quantity}
          onChange={handleChange}
          error={quantity_error_text === CONSTANTS.empty ? false : true}
          helperText={quantity_error_text}
        />
        <br />
        <ButtonAdd // Add button
          onClick={handleClickAddButton}>
          Adauga
        </ButtonAdd>
      </DivAddElements>
    </Main>
  );
}
