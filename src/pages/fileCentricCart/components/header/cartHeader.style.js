export default (theme) => ({
  logo: {
    position: 'absolute',
    float: 'left',
    marginTop: '-17.9px',
    marginLeft: '-10px',
    width: '101px',
    filter: 'drop-shadow(-3px 2px 6px rgba(27,28,28,0.29))',
  },
  header: {
    borderBottom: '#F0C8A6 10px solid',
    height: '77px',
    maxWidth: '100%',
    marginLeft: '3%',
    marginRight: '3.05%',
  },
  headerTitle: {
    maxWidth: theme.custom.maxContentWidth,
    margin: 'auto',
    float: 'left',
    marginLeft: '85px',
    paddingLeft: '16px',
    marginBottom: '-30px',
    position: 'absolute',
  },
  headerMainTitle: {
    fontFamily: theme.custom.fontFamilyInter,
    fontWeight: '300',
    letterSpacing: '-0.5px',
    color: '#AE5E1B',
    fontSize: '26px',
    lineHeight: '75px',
    '& $headerMainTitleTwo': {
      fontWeight: '1000',
      letterSpacing: '-0.5px',
    },
  },
  headerMainTitleTwo: {

  },
});
