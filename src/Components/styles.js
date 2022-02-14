import { AppBar, Typography, Card, Button, Box } from '@mui/material';
import { TextField } from '@mui/material';
import styled from 'styled-components';
const DivItem = styled.div`
  && {
    width: 75%;
    margin: auto;
    margin-bottom: 2em;
    min-width: 330px;
  }
`;
const ButtonMark = styled(Button)`
  && {
    margin: 0 auto !important;
    display: flex !important;
    color: white !important;
  }
`;
const CustomCardUncompleted = styled(Card)`
  && {
    background-color: #e06377;
  }
`;
const CustomCardCompleted = styled(Card)`
  && {
    background-color: #343632;
  }
`;
const TypographyCustom = styled(Typography)`
  &&{text-align: center;
  margin: 0 auto !important;
  variant='body1';
  font-size: 25px;
  color: inherit;
  margin-bottom: 0.35em;
  }`;
const AppBarCustom = styled(AppBar)`
  && {
    position: static;
    background-color: #1976d2;
    color: white;
  }
`;
const TypographyBasicCard = styled(Typography)`
  && {
    font-size: 25px;
    color: white;
    text-shadow: 1px 1px grey;
    margin-bottom: 0.35em;
  }
`;
const TypographyBasicCardModifyQ = styled(TypographyBasicCard)`
  && {
    border-bottom: 1px solid white;
  }
`;
const ImgBtn = styled.img`
  && {
    width: 50px;
    height: 50px;
    opacity: 0.8;
  }
`;

const ListItem = styled.div`
  && {
    height: 100%;
    width: 100%;
    margin-top: auto;
    overflow: auto;
  }
`;
const H1Custom = styled.h1`
  && {
    width: 90%;
    padding: 10px;
    text-align: center;
    margin-top: 2em;
    margin-bottom: 2em;
    border-bottom: 1px solid black;
  }
`;
const ListItemBox = styled.div`
  && {
    min-width: 300px;
    min-height: 500px;
  }
`;
const CardDiv = styled.div`
  && {
    min-width: 300px;
    min-height: 500px;
  }
`;
const DivAddElements = styled(Card)`
  && {
    padding-top: 10%;
  }
`;
const Main = styled.div`
  && {
    display: flex;
    text-align: center;
    height: 100%;
    width: 100%;
  }
`;

const CustomTextField = styled(TextField)`
  && {
    margin: 1em;
  }
`;
const ButtonAdd = styled(Button)`
  && {
    border: 1px solid blue;
    padding: 2.5% 5%;
  }
`;
const CustomApp = styled.div`
  && {
    height: 100%;
    width: 100%;
  }
`;

const CustomUl = styled.ul`
  && {
    min-width: 300px;
    min-height: 500px;
    list-style: none;
  }
`;

const BoxHeader = styled(Box)`
  && {
    position: sticky;
    top: 0;
    width: 100%;
  }
`;
const BoxFooter = styled(Box)`
  && {
    position: absolute;
    bottom: 0;
    width: 100%;
  }
`;
const DivPage = styled.div`
  && {
    height: 100%;
    display: flex;
    flex-direction: column;
  }
`;
export {
  DivItem,
  TypographyCustom,
  AppBarCustom,
  TypographyBasicCard,
  TypographyBasicCardModifyQ,
  ImgBtn,
  ListItem,
  H1Custom,
  ListItemBox,
  CardDiv,
  CustomUl,
  CustomCardCompleted,
  CustomCardUncompleted,
  ButtonMark,
  DivAddElements,
  Main,
  CustomTextField,
  ButtonAdd,
  CustomApp,
  BoxHeader,
  BoxFooter,
  DivPage,
};
