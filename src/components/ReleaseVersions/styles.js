const styles = () => ({
  container: {
    '& h1': {
      fontSize: 35,
      fontWeight: 600,
      color: '#0B4E75',
      textAlign: 'center',
      marginBottom: 40,
      paddingTop: 40,
      FontFamily: 'Lato',
      FontStyle: 'Bold',
    },

  },
  wrapper: {
    display: 'flex',
    flexDirection: 'row',
    maxWidth: '1200px',
    margin: '0 auto 32px auto',
    '& .MuiTable-root': {
      minWidth: 200,
      width: 296,
      height: 'min-content',
    },
    '& .MuiTableCell-head': {
      fontSize: 19,
      fontWeight: 700,
      FontFamily: 'Lato',
      color: '#000',
    },
    '& .MuiTableBody-root': {
      border: '2px solid #CDD4D8',
      '& .MuiTableRow-root': {
        '&:nth-of-type(odd)': {
          backgroundColor: '#DEDEDE', // TODO: color to be updated
        },
      },
    },
    '& .MuiTableCell-body': {
      fontSize: 17,
      fontWeight: 400,
      lineHeight: '8px',
      color: '#004C73',
      FontFamily: 'Nunito Sans',

    },
  },
  horizontalLine: {
    width: 40,
    margin: 0,
    backgroundColor: '#CDD4D8',
    border: 'none',
    height: 2,
    marginTop: 74,
  },
  tableWrapper: {
    display: 'flex',
  },
  versionLink: {
    textDecoration: 'underline',
    cursor: 'pointer',
    FontFamily: 'Nunito Sans',
    color: ' #942A90',
    fontSize: '17px',
    fontWeight: 400,
  },
});

export default styles;
