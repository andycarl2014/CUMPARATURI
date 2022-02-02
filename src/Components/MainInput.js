import React, { Component } from 'react';
import { Button, Card, TextField, Typography } from '@mui/material';

export default class MainInput extends Component {
  render() {
    const {
      currentItem: { name, quantity },
      changeState,
      handleClickAddButton,
    } = this.props; // Props destructuring

    return (
      <div className='Main'>
        <Card className='divAddElements' variant='outlined'>
          <Typography sx={{ fontSize: 25 }} gutterBottom>
            Adauga elemente !
          </Typography>
          <TextField
            style={{ margin: '20px 20px 20px 20px' }} // Input for Item's name
            id='name'
            label='Name'
            type='text'
            value={name}
            onChange={(e) => {
              changeState(e);
            }}
          />
          <br />

          <TextField // Input for Item's quantity
            id='quantity'
            type='number'
            label='Quantity'
            min={1}
            value={quantity}
            onChange={(e) => changeState(e)}
          />
          <br />
          <Button
            variant='outlined'
            className='buton' // Add button
            onClick={handleClickAddButton}
            style={{ marginTop: '10%' }}>
            Adauga
          </Button>
        </Card>
      </div>
    );
  }
}
