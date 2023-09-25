export const customTheme = {
  MuiTabs: {
    root: {
      borderBottom: '10px solid #40789c',
    },
  },
  MuiTab: {
    root: {
      marginTop: '15px',
      color: '#6E6E6E',
      height: '45px',
      overflow: 'hidden',
      background: '#EAEAEA',
      borderTop: '1px solid black',
      borderLeft: '1px solid black',
      borderRight: '1px solid black',
      fontWeight: '400',
      lineHeight: '18px',
      letterSpacing: '0.25px',
      marginRight: '10px',
      fontSize: '21px',
      width: '250px',
      textTransform: 'none',
      fontFamily: 'Lato',
      '&.Mui-selected': {
        fontWeight: 'bolder',
        '&.participants': {
          background: '#c3e8f7',
          color: '#142D64',
        },
        '&.samples': {
          background: '#c3e8f7',
          color: '#142D64',
        },
        '&.files': {
          background: '#c3e8f7',
          color: '#142D64',
        },
        '&.MuiTypography-body1': {
          color: 'red',
        },
      },
      '& span.cases_count': {
        marginLeft: '5px',
        fontSize: '17px',
      },
      '& span.samples_count': {
        marginLeft: '5px',
        fontSize: '17px',
      },
      '& span.files_count': {
        marginLeft: '5px',
        fontSize: '17px',
      },
    },
  },
};
