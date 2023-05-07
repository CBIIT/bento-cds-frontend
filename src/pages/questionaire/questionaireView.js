import React from 'react';
import { withStyles } from '@material-ui/core';
import AboutHeader from '../../components/about/aboutHeaderView';

import Stats from '../../components/Stats/AllStatsController';

const QuestionaireView = () => (
  <>
    <Stats />

    <AboutHeader title="New Request Questionnaire" titleColor="#0B4E75" background="white" />
    <iframe title="questionaire" width="100%" height="900px" src="https://forms.office.com/Pages/ResponsePage.aspx?id=gwDJdMYDOkWAHJJRzdF-uEwrjqoTEuJMj3MXvQdkxMhUMzNTTDZXVUNVQjZZOUw5MVJNMU9FNjE1MS4u&embed=true" frameBorder="0" marginWidth="0" marginHeight="0" allowFullScreen webkitallowfullscreen mozallowfullscreen msallowfullscreen> </iframe>
  </>

);
const styles = () => ({
  img: {
    width: '100%',
  },
  whiteBg: {
    // background: 'white',
  },
  marginTop: {
    // marginTop: '-60px',
  },
  hero: {
    width: '100%',
    margin: '0 auto',
  },
  leftBg: {
    backgroundImage: 'url(\'https://raw.githubusercontent.com/CBIIT/datacommons-assets/main/cds/about/leftBg.jpg\')',
    // backgroundImage: 'https://raw.githubusercontent.com/CBIIT/datacommons-assets/main/cds/landing/LeftSide.png',
    backgroundPosition: 'left top, left top',
    backgroundRepeat: 'no-repeat, repeat',
  },
  rightBg: {
    paddingBottom: '30px',
    backgroundImage: 'url(\'https://raw.githubusercontent.com/CBIIT/datacommons-assets/main/cds/about/rightBg.png\')',
    backgroundPosition: 'right bottom, left top',
    backgroundRepeat: 'no-repeat, repeat',
  },
});

export default withStyles(styles)(QuestionaireView);
