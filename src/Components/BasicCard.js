// Library imports
import { Button, CardContent, Typography } from '@mui/material';
import React, { Component } from 'react';

// Custom imports
import plus from '../images/plus.png';
import minus from '../images/minus.png';
import { CONSTANTS } from '../CONST';
import {
  DivItem,
  ImgBtn,
  TypographyBasicCard,
  TypographyBasicCardModifyQ,
  CustomCardCompleted,
  CustomCardUncompleted,
  ButtonMark,
} from './styles';

export default class BasicCard extends Component {
  componentWillUnmount() {
    let currentItem = this.props.item;
    if (currentItem.quantity === 0)
      this.props.HANDLERS?.snackbarShowMessage(
        `Elementul cu numele ${currentItem.name} a fost sters!`,
        'warning',
        2000,
      );
  }
  render() {
    let CustomCard;

    const {
      item: { key, name, quantity, completed },
      HANDLERS: { handleClickMinus, handleClickPlus, handleCheckboxCheck },
    } = this.props; // Props destructuring
    if (completed === false) CustomCard = CustomCardCompleted;
    else CustomCard = CustomCardUncompleted;
    return (
      <DivItem>
        <CustomCard>
          <CardContent>
            <TypographyBasicCard>Name: {name}</TypographyBasicCard>

            <TypographyBasicCard>Quantity: {quantity}</TypographyBasicCard>
            <TypographyBasicCardModifyQ>
              Modify Quantity:
              <Button onClick={() => handleClickPlus(key)}>
                <ImgBtn src={plus} alt='Button Plus' />
              </Button>
              <Button onClick={() => handleClickMinus(key)}>
                <ImgBtn src={minus} alt='Button Minus' />
              </Button>
            </TypographyBasicCardModifyQ>
            <Typography>
              <ButtonMark
                onClick={() => {
                  handleCheckboxCheck(key);
                }}>
                Mark as
                {completed === false
                  ? CONSTANTS.completedForMarkText
                  : CONSTANTS.uncompletedForMarkText}
              </ButtonMark>
            </Typography>
          </CardContent>
        </CustomCard>
      </DivItem>
    );
  }
}
