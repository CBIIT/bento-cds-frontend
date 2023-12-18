const styles = () => ({
  releaseNotesContainer: {
    borderWidth: [[0, 0, 0, 2]],
    borderColor: '#CDD4D8',
    borderStyle: 'solid',
  },
  releaseNotesWrapper: {
    paddingLeft: 32,
  },
  horizontalLine: {
    width: 120,
    margin: 0,
    backgroundColor: '#CDD4D8',
    border: 'none',
    height: 2,
  },
  heading: {
    fontSize: 22,
    fontWeight: 600,
    color: '#43779A',
    fontFamily: 'Lato',
    fontStyle: 'normal',
    /* or 114% */

    letterSpacing: '0.14994',
  },
  releaseDateInfo: {
    fontSize: 16,
    fontWeight: 400,
    fontFamily: 'Nunito',
  },
  subHeading: {
    fontSize: 16,
    fontWeight: 700,
    marginBottom: 8,
    fontFamily: 'Nunito',

  },
  infoWrapper: {
    color: '#000',
    lineHeight: '24px',
    '& div': {
      fontFamily: 'Nunito',
      marginBottom: 20,
      fontSize: 16,
      '& p': {
        fontFamily: 'Nunito',
        margin: 0,
        fontSize: 16,
        fontWeight: 400,
        whiteSpace: 'pre-wrap',
      },
      '& ul': {
        fontFamily: 'Nunito',
        fontSize: 16,
        margin: 0,
      },
    },
  },
});

export default styles;
