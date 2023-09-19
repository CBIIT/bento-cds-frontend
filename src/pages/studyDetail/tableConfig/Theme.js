export const tblHeader = {
  MuiTableSortLabel: {
    root: {
      color: '#13344A',
      position: 'relative',
      fontSize: '10pt',
      fontFamily: 'Nunito, Lato Regular, Raleway, sans-serif',
      fontWeight: 'bold',
      letterSpacing: '0.06em',
      textDecoration: 'none',
      '&:hover': {
        color: '#13344A',
      },
    },
  },
  MuiTableCell: {
    root: {
      padding: '5px 5px 5px 20px',
      paddingRight: '5px',
      color: '#13344A',
      '&.del_all_row': {
        minWidth: '150px',
        cursor: 'pointer',
      },
    },
  },
  MuiTooltip: {
    tooltipPlacementBottom: {
      '@media (min-width: 600px)': {
        marginTop: '-10px',
        marginLeft: '-20px',
        background: 'none',
      },
    },
    popper: {
      '&#header-tooltip div': {
        background: '#61614F',
        marginTop: '0px',
        marginLeft: '0px',
      },
    },
  },
  MuiIconButton: {
    root: {
      '&.del_all_row_btn': {
        paddingLeft: '5px',
      },
    },
  },
  MuiTypography: {
    root: {
      color: '#A61401',
      '&.remove_all_tooltip': {
        width: '110px',
        border: '2px solid #A61401',
        height: '48px',
        padding: '5px 10px',
        fontSize: '12px',
        background: '#fff',
        textAlign: 'center',
        fontWeight: '500',
        borderRadius: '7px',
      },
      '&.del_all_row_text': {
        float: 'left',
        fontSize: '11pt',
        textAlign: 'center',
        fontWeight: 'bold',
        fontFamily: 'Lato Regular, Raleway, sans-serif',
        lineHeight: '47px',
      },
    },
  },
};

export const tblPgn = {
  MuiTablePagination: {
    root: {
      paddingRight: '50px',
      borderTop: '5px solid #e7e5e5',
      borderBottom: '3px solid #e7e5e5',
    },
    toolbar: {
      minHeight: '45px',
    },
  },
  MuiTypography: {
    body2: {
      fontSize: '10px',
      fontFamily: 'Open Sans',
      textTransform: 'uppercase',
    },
  },
  MuiSelect: {
    root: {
      fontSize: '10px',
    },
  },
  MuiInputBase: {
    root: {
      backgroundColor: '#fff',
    },
  },
};

export const tblBody = {
  MuiTableBody: {
    root: {
      margin: 'auto 3% auto 3%',
      maxWidth: '100%',
    },
  },
  MuiTableRow :{
    root:{
      color: '#004C73',
      '&:nth-child(even)': {
        backgroundColor: '#ebebeb',
      },
    },
  },
  MuiTableCell: {
    body: {
      color: '#004C73',
      borderBottom: 'none',
      maxWidth: '150px',
      overflowWrap: 'break-word',
      '&.accession': {
        '& p': {  
          fontWeight: 'bold',
        },
      },
    },
    root: {
      minHeight: '45px',
      padding: '5px 5px 5px 20px',
      paddingRight: '20px',
      color: '#004C73',
      borderBottom: 'none',
    },
  },
  MuiLink: {
    root: {
      color: '#900F89',
      '&:hover': {
      textDecoration: 'underline',
      textUnderlineOffset: '2.5px',
      },
    },
  },
  MuiTypography: {
    body1: {
      fontSize: '16px',
      fontFamily: 'Nunito',
    },
  },
};

export const tblContainer = {
  MuiTableContainer: {
    root: {
      width: '100%',
      overflowX: 'auto',
      transform: 'rotateX(180deg)',
      boxShadow: 'none',
      borderRadius: '0',
    }
  },
  MuiTable: {
    root: {
      transform: 'rotateX(180deg)',
      width: '100%',
      display: 'table',
      borderSpacing: '0',
      borderCollapse: 'collapse',
    },
  },
};

export const themeConfig = {
  tblHeader,
  tblPgn,
  tblBody,
  tblContainer,
};

export const wrapperThemConfig = {
  MuiContainer: {
    root: {
      textAlign: 'right',
      paddingTop: '14px',
    },
  },
  MuiButton: {
    root: {
      width: '156px',
      lineHeight: '30px',
      fontSize: '12px',
      marginTop: '6px',
      marginLeft: '5px',
      marginBottom: '10px',
      marginRight: '4px',
      color: '#fff',
      fontFamily: 'Lato',
      borderRadius: '10px',
      textTransform: 'uppercase',
      '&.add_selected_button': {
        backgroundColor: '#10a075',
      },
      '&.Mui-disabled': {
        color: '#fff',
        '&.add_selected_button': {
          backgroundColor: '#10a075',
          opacity: '0.3',
        },
      },
    },
  },
};