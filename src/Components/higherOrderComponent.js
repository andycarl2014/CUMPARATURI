import React from 'react';
import { Snackbar, Alert } from '@mui/material';
export const withSnackbar = (WrappedComponent) => {
  class HOC extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        open: false,
        vertical: 'top',
        horizontal: 'right',
        message: '',
        duration: 2000,
        severity: 'success',
      };
    }
    handleClose = (event, reason) => {
      if (reason === 'clickaway') return;
      this.setState({ ...this.state, open: false });
    };
    showMessage = (message, severity, duration = 2000) => {
      this.setState({
        ...this.state,
        message: message,
        severity: severity,
        duration: duration,
        open: true,
      });
    };
    render() {
      const { vertical, horizontal, open } = this.state;
      return (
        <>
          <WrappedComponent
            {...this.props}
            snackbarShowMessage={this.showMessage}
          />
          <Snackbar
            autoHideDuration={3000}
            open={open}
            anchorOrigin={{ vertical, horizontal }}
            onClose={this.handleClose}>
            <Alert severity={this.state.severity}>{this.state.message}</Alert>
          </Snackbar>
        </>
      );
    }
  }
  return HOC;
};
