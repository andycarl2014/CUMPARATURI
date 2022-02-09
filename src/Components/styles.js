import { AppBar, Typography, Card, Button } from '@mui/material';
import { TextField } from '@mui/material';
import styled from 'styled-components';
import backgroundImg from '../images/3fbq.gif';
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
    color: primary;
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
const CustomTable = styled.table`
  && {
    height: 100%;
    width: 100%;
    border-collapse: collapse;
  }
`;
const CustomUl = styled.ul`
  && {
    min-width: 300px;
    min-height: 500px;
    list-style: none;
  }
`;
const CustomTh = styled.th`
  && {
    height: 4%;
    width: 100%;
  }
`;
const CustomTr = styled.tr`
  && {
    width: 100%;
    background-color: white;
  }
`;
const CustomTrGif = styled.tr`
  && {
    width:100%
    background-image: ${backgroundImg};
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
`;
const CustomTd = styled.td`
  && {
    width: 35%;
    height: 100%;
  }
`;
const ScrollbarWrapper = styled.div(() => ({
  width: '100%',
  height: '100%',
  overflowY: 'scroll',
  '::-webkit-scrollbar-track': {
    boxShadow: 'inset 0 0 6px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#f5f5f5',
    borderRadius: '10px',
  },
  '::-webkit-scrollbar': {
    width: '10px',
    backgroundColor: '#f5f5f5',
  },
  '::-webkit-scrollbar-thumb': {
    borderRadius: '10px',
    backgroundColor: '#fff',
    backgroundImage:
      '-webkit-gradient(linear,40% 0%,75% 84%,from(#4d9c41),to(#19911d),color-stop(0.6, #54de5d))',
  },
}));
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
  CustomTable,
  CustomTh,
  CustomTr,
  CustomTrGif,
  CustomTd,
  ScrollbarWrapper,
};
