export default () => ({
  dialogBox: {
    minWidth: '750px',
    overflowY: 'scroll',
  },
  dialogPaper: {
    paddingBottom: '10px',
    paddingLeft: '0px',
  },
  titleContent: {
    width: '100%',
    paddingLeft: '37px',
    borderBottom: '1px solid #BDBFC2',
  },
  title: {
    fontSize: '20px',
    marginTop: '20px',
    display: 'inherit',
    fontWeight: '400',
    color: '#000000',
    float: 'left',
    fontFamily: 'Inter',
  },
  closeBtn: {
    padding: '5px',
    textAlign: 'right',
    fontSize: '30px',
  },
  downloadBtn: {
    height: '30px',
    width: '30px',
    marginBottom: '-10px',
    marginRight: '7px',
    // '&:hover': {
    //   backgroundColor: '#0D71A3',
    // },
  },
  closBtnContainer: {
    paddingTop: '8px',
  },
  downloadIcon: {
    color: '#fff',
    height: '30px',
    width: '30px',
  },
  content: {
    height: '700px',
    overflowY: 'scroll',
    paddingRight: '46px',
    paddingLeft: '43px',
    lineHeight: '1.5',
    '& h1, h2, h3, h4, h5': {
      paddingLeft: '24px',
      color: '#000000',
      marginBottom: '0px',
      fontFamily: 'Inter',
      fontWeight: '700',
      fontSize: '18px',
      lineHeight: '40px',
      backgroundColor: '#E9F0F4',
    },
    '& p': {
      padding: '5px 24px 17px 24px',
      fontFamily: 'Nunito',
      fontSize: '16px',
      fontWeight: '300',
      marginTop: '0px',
      marginBottom: '0px',
      backgroundColor: '#E9F0F4',
    },
    '& ul': {
      backgroundColor: '#E9F0F4',
      paddingBottom: '14px', 
      marginTop: '0px',
      marginBottom: '0px',
    },
  },
});
