// Library imports
import React, { Component } from 'react';
import {
  ButtonAdd,
  CustomTextField,
  DivAddElements,
  Main,
  TypographyCustom,
} from './styles';

export default class MainInput extends Component {
  render() {
    const {
      currentItem: { name, quantity },
      changeState,
      handleClickAddButton,
    } = this.props; // Props destructuring

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
            onChange={changeState}
          />
          <br />

          <CustomTextField // Input for Item's quantity
            id='quantity'
            name='quantity'
            type='number'
            label='Quantity'
            min={1}
            value={quantity}
            onChange={changeState}
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
}
