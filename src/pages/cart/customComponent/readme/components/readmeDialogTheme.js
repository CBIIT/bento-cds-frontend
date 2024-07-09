import React from 'react';
import { MuiThemeProvider, createTheme } from '@material-ui/core/styles';

export default ({
  children,
}) => {
  const theme = {
    overrides: {
      MuiDialog: {
        paper: {
          borderRadius: '5px',
          padding: '0px 0px 0px 20px',
          boxShadow: 'none',
          overflowX: 'hidden',
          overflowY: 'hidden',
        },
        paperScrollPaper: {
          maxHeight: '650px',
        },
        paperWidthMd: {
          minWidth: '750px',
        },
      },
      MuiDialogContent: {
        root: {
          padding: '15px 25px 35px 15px',
        },
      },
      MuiBackdrop: {
        root: {
          backgroundColor: '#4a4a4a52',
        },
      },
      MuiButton: {
        root: {
          minWidth: '24px',
        },
        startIcon: {
          marginRight: '0',
          marginLeft: '0',
        },
      },
      MuiIconButton: {
        root: {
          marginRight: '10px',
          textTransform: 'none',
          padding: 'none',
          '&:hover': {
            backgroundColor: 'transparent',
            cursor: 'pointer',
          },
        },
      },
      MuiSvgIcon: {
        root: {
          color: '#0d71a3',
        },
      },
    },
  };

  const computedTheme = createTheme(theme);
  return (
    <MuiThemeProvider theme={computedTheme}>
      {children}
    </MuiThemeProvider>
  );
};
