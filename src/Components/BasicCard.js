// Library imports
import { Button, CardContent, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import { useSnackbar } from 'material-ui-snackbar-provider';
//Custom imports
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

export default function BasicCard(props) {
  const snackbar = useSnackbar();
  let CustomCard;
  const {
    item: { key, name, quantity, completed },
    HANDLERS: { handleCheckboxCheck, handleClickMinus, handleClickPlus },
  } = props;
  if (completed === false) {
    CustomCard = CustomCardUncompleted;
  } else {
    CustomCard = CustomCardCompleted;
  }
  useEffect(() => {
    snackbar.showMessage(
      `Ati modificat cantitatea elementului cu numele: ${name}. Noua cantitate este: ${quantity}`,
    );
  }, [quantity]);

  useEffect(() => {
    snackbar.showMessage(
      `Ati modificat starea elementului cu numele: ${name}. Elementul este acum: ${
        completed ? 'complet' : 'incomplet'
      }`,
    );
  }, [completed]);
  useEffect(() => {
    snackbar.showMessage(
      `Ati adaugat elementul cu numele: ${name}. Cantitatea este: ${quantity}`,
    );
    return () => snackbar.showMessage(`Ati sters elementul cu numele: ${name}`);
  }, []);

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
