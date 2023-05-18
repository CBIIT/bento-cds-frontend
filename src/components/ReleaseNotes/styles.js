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
  },
  releaseDateInfo: {
    fontSize: 16,
    fontWeight: 400,
  },
  subHeading: {
    fontSize: 16,
    fontWeight: 700,
    marginBottom: 8,
  },
  infoWrapper: {
    '& div': {
      marginBottom: 24,
      '& p': {
        margin: 0,
        fontSize: 16,
        fontWeight: 400,
      },
      '& ul': {
        margin: 0,
      },
    },
  },
});

export default styles;
