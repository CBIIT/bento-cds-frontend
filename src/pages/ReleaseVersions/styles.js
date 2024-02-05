const styles = () => ({
  container: {
    '& h1': {
      fontSize: 35,
      fontWeight: 700,
      color: '#0E6292',
      textAlign: 'center',
      marginBottom: 40,
      paddingTop: 40,
      FontFamily: 'Lato',
    },

  },
  wrapper: {
    display: 'flex',
    flexDirection: 'row',
    maxWidth: '1200px',
    margin: '0 auto 32px auto',
    '& .MuiTable-root': {
      minWidth: 200,
      width: 362,
      height: 'min-content',
      borderTop: '5px solid #0E6292',
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
        '&:not(:first-of-type):not(:last-of-type)': {
          cursor: 'pointer',
          '&:nth-of-type(even)': {
            backgroundColor: '#DCE9EF', // TODO: color to be updated
          },
          '&:nth-of-type(odd)': {
            backgroundColor: '#F2FBFF', // TODO: color to be updated
          },
        },
      },
    },
    '& .MuiTableCell-body': {
      fontSize: 13,
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
  version: {
    fontFamily: 'Nunito',
    color: ' #000000',
    fontSize: '16px',
    fontWeight: 400,
    paddingLeft: 20,
  },
  hiddenRow: {
    display: 'none',
  },
  releaseHeading: {
    fontFamily: 'Inter',
    fontWeight: 400,
    fontSize: '20px',
  },
  dataHeading: {
    color: '#0E6292',
    display: 'inline-block',
    paddingBottom: 8,
  },
  releaseDropdown: {
    color: '#000000',
    paddingTop: 0,
    marginBottom: -12,
    fontSize: 40,
  },
  upsideDown: {
    transform: 'rotate(180deg)',
  },
  softwareBorder: {
    borderTop: '2px solid #CDD4D8',
  },
  softwareHeading: {
    color: '#942A90',
    cursor: 'pointer',
  },
  softwareDropdown: {
    fontSize: 14,
    marginLeft: 7,
  },
});

export default styles;
