export const customTheme = {
  MuiContainer: {
    root: {
      paddingTop: '5px',
      '&.container_outer_layout': {
        maxWidth: '100%',
        height: '77px',
        borderBottom: '#F0C8A6 10px solid',
        '& img': {
          float: 'left',
          marginTop: '-25px',
          marginLeft: '-33px',
          width: '111px',
          filter: 'drop-shadow(-3px 2px 6px rgba(27,28,28,0.29))',
        },
        '& span': {
          color: '#AE5E1B',
          fontSize: '26px',
          fontFamily: 'Inter',
          fontWeight: 300,
          lineHeight: '64px',
          letterSpacing: '-0.5px',
          '&.cart_header_text': {
            letterSpacing: '-0.5px',
            fontWeight: '300',
          },
          '&.cart_sel_files_text': {
            letterSpacing: '-0.5px',
            fontWeight: '1000',
            marginLeft: '6px',
          },
        },
      },
      '&.container_header': {
        maxWidth: '100%',
        height: '75px',
        padding: '10px 0px 15px 0px',
        position: 'relative',
        textAlign: 'right',
        '& img.tooltip_icon': {
          width: '20px',
          marginLeft: '5px',
          verticalAlign: 'top',
        },
      },
      '&.tooltip_icon': {
        width: '25px',
      },
      '&.cart_message_outer':{
        paddingLeft: '0px',
      },
      '&.container_footer': {
        maxWidth: '100%',
        textAlign: 'left',
        paddingLeft: '20px',
        '& span.cart_message_text': {
          display: 'block',
        },
        '& textarea.manifest_comments': {
          color: '#000',
          border: '1.5px solid #707070',
          height: '170px',
          resize: 'none',
          padding: '15px',
          fontSize: '10px',
          minWidth: '412px',
          background: '#ebebeb',
          fontFamily: 'Open Sans',
          marginRight: '10px',
          borderRadius: '10px',
        },
      },
    },
  },
  MuiButton: {
    text: {
      padding: '10px 16px',
    },
    root: {
      color: '#fff',
      backgroundColor: '#BB5500',
      fontSize: '0.875rem',
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
      fontWeight: '500',
      lineHeight: '1.75',
      borderRadius: '10px',
      marginBottom: '10px',
      textTransform: 'uppercase',
      border: 'none',
      cursor: 'pointer',
      height: '45px',
      padding: '6px 16px',
      minWidth: '191px',
      boxShadow: 'none',
      boxSizing: 'border-box',
      marginTop: '6px',
      transition: 'background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
      verticalAlign: 'top',
      '&:hover': {
        backgroundColor: '#BB5500',
      },
    },
  },
  MuiLink: {
    root: {
      height: '65px',
      color: '#3E6886',
      fontSize: '12px',
      fontFamily: 'Lato',
      borderBottom: '1px solid #3E6886',
      textDecoration: 'none',
    },
  },
  MuiDialog: {
    paper: {
      width: '431px',
      height: '170px',
      borderRadius: '25px !important',
      textAlign: 'center',
      backgroundColor: '#E8DFDC !important',
      border: '2px solid #A61401',
    },
  },
  MuiDialogContent: {
    root: {
      padding: '40px 20px 0px 20px',
      '&.alter-content': {
        fontFamily: 'Lato',
        size: '16px',
      },
    },
  },
  MuiDialogActions: {
    root: {
      justifyContent: 'center',
      paddingBottom: '25px',
    },
  },
};

export const themeConfig = {
  customTheme,
};
