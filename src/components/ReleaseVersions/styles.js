const styles = () => ({
  container: {
    '& h1': {
      fontSize: 35,
      fontWeight: 700,
      color: '#0B4E75',
      textAlign: 'center',
      marginBottom: 40,
    },
  },
  wrapper: {
    display: 'flex',
    flexDirection: 'row',
    maxWidth: '1200px',
    margin: '0 auto',
    '& .MuiTable-root': {
      minWidth: 200,
      width: 296,
      height: 'min-content',
    },
    '& .MuiTableCell-head': {
      fontSize: 16,
      fontWeight: 700,
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
      fontSize: 16,
      fontWeight: 400,
      lineHeight: '8px',
      color: '#0B4E75',
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
  },
});

export default styles;
