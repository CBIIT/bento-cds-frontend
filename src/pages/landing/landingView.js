import React from 'react';
import {
  Grid,
  withStyles,
} from '@material-ui/core';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import { Link } from 'react-router-dom';
import StatsView from './components/statsView';
import { landingPageData } from '../../bento/landingPageData';
import icon from '../../assets/landing/LP_ReadMore.svg';
import iconAbout from '../../assets/landing/LP_About_Fullarticle.Arrow.svg';
import linkGenerator from '../../utils/linkGenerator';

const LandingView = ({ classes, statsData }) => (
  <div className={classes.page}>
    <div className={classes.container}>
      <Grid container className={classes.hero}>
        <Grid xs={3} lg={4} className={classes.leftBg} />
        <Grid xs={2} lg={2}>
          <Grid container spacing={16} direction="row">
            <div className={classes.heroImage} />
            <div className={classes.heroTextContainer}>
              <div className={classes.heroTextWrapper}>
                <div className={classes.headerTitle}>
                  { landingPageData.callToActionTitle }
                </div>
                <div className={classes.headerContent}>
                  {linkGenerator(landingPageData.callToActionDescription)}
                </div>
                <div className={classes.headerButtonSection}>
                  <Link to={landingPageData.callToActionLink} className={classes.headerLink}>
                    <button className={classes.buttonText} type="button">
                      {landingPageData.callToActionButtonText}
                    </button>
                    <ArrowRightIcon className={classes.iconArrowRight} />
                  </Link>
                </div>
              </div>
            </div>
          </Grid>
        </Grid>
        <Grid xs={7} lg={6} className={classes.rightBg} />
      </Grid>
    </div>
    <div className={classes.whiteSection} />
    <StatsView stats={landingPageData.landingPageStatsBar} statsData={statsData} />
    <div className={classes.container}>
      <div className={classes.texture}>
        <Grid container spacing={16} direction="row" className={classes.landingContainer}>
          <div className={classes.contentLeft}>
            <div className={classes.about}>
              <div className={classes.aboutImageSection}>
                <img
                  src={landingPageData.tile1.img}
                  className={classes.aboutImage}
                  alt={landingPageData.tile1.alt}
                  id="tile1_image"
                />
              </div>
              <div className={classes.DCWords} id="tile1_title">
                {landingPageData.tile1.titleText.match(/\b(\w+)\b/g).map((word) => (
                  <>
                    {word}
                    <br />
                  </>
                ))}
              </div>
              <div className={classes.aboutContent} id="tile1_description">
                {linkGenerator(landingPageData.tile1.descriptionText)}

              </div>
              <div className={classes.aboutButtonSection}>
                <div className={classes.aboutButtonLeft}>
                  <img src={iconAbout} className={classes.iconAbout} alt="CTDC about icon" />
                </div>
                <div className={classes.aboutButtonRight} id="tile1_button">
                  <Link
                    to={landingPageData.tile1.callToActionLink}
                    className={classes.aboutButton}
                  >
                    {landingPageData.tile1.callToActionText}
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className={classes.contentRight}>
            <div className={classes.contentRightTop}>
              <div className={classes.program}>
                <div className={classes.programImg}>
                  <img
                    className={classes.image}
                    src={landingPageData.tile2.img}
                    alt={landingPageData.tile2.alt}
                    id="tile2_image"
                  />
                </div>
                <div className={classes.content}>
                  <div className={classes.contentHeader} id="tile2_title">
                    {landingPageData.tile2.titleText}
                  </div>
                  <div className={classes.contentContainer} id="tile2_description">
                    {landingPageData.tile2.descriptionText}
                  </div>

                </div>
                <div className={classes.blueButton}>
                  <div className={classes.blueButtonLeft}>
                    <img className={classes.icon} src={icon} alt="CTDC about " />
                    {' '}
                  </div>
                  <div className={classes.blueButtonRight} id="tile2_button">
                    <Link
                      to={landingPageData.tile2.callToActionLink}
                      className={classes.blueButton}
                    >
                      {landingPageData.tile2.callToActionText}
                    </Link>
                  </div>
                </div>
              </div>
              <div className={classes.studies}>
                <div className={classes.programImg}>
                  <img
                    className={classes.image}
                    src={landingPageData.tile3.img}
                    alt={landingPageData.tile3.src}
                    id="tile3_image"
                  />
                </div>
                <div className={classes.content}>
                  <a href="mailto:cdshelpdesk@mail.nih.gov" className={classes.mailLink}>
                    <div className={classes.contentHeader} id="tile3_title">
                      {landingPageData.tile3.titleText.match(/\b(\w+)\b/g).map((word, index) => (
                        <>
                          {word}
                          {<span>&nbsp;</span>}
                          {index === 2 && <br />}
                        </>
                      ))}
                    </div>
                  </a>
                  <div className={classes.contentContainer} id="tile3_description">
                    {linkGenerator(landingPageData.tile3.descriptionText)}
                  </div>

                </div>
                <div className={classes.blueButton}>
                  <div className={classes.blueButtonLeft}>
                    <img className={classes.icon} src={icon} alt="CTDC about " />
                    {' '}
                  </div>
                  <div className={classes.blueButtonRight} id="tile3_button">
                    <Link
                      to={landingPageData.tile3.callToActionLink}
                      className={classes.blueButton}
                    >
                      {landingPageData.tile3.callToActionText}
                    </Link>
                  </div>
                </div>
              </div>

            </div>
            <div className={classes.contentRightBottom}>
              <div className={classes.cases} id="tile4_image">
                <div className={classes.mountainMeadowContentHeader} id="tile4_title">
                  {landingPageData.tile4.titleText}
                </div>
                <div className={classes.mountainMeadowContent} id="tile4_description">
                  {landingPageData.tile4.descriptionText}
                </div>
                <div className={classes.mountainMeadowButtonSection}>
                  <div className={classes.blueButtonLeft}>
                    <img className={classes.mountainMeadowIcon} src={icon} alt="CTDC about " />
                    {' '}
                  </div>
                  <div className={classes.blueButtonRight} id="tile4_button">
                    <Link
                      to={landingPageData.tile4.callToActionLink}
                      className={classes.mountainMeadowButton}
                    >
                      {landingPageData.tile4.callToActionText}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Grid>
      </div>

    </div>
  </div>
);
const styles = () => ({
  page: {
    marginTop: '-47px',
  },
  hero: {
    width: '100%',
    margin: '0 auto',
  },
  leftBg: {
    backgroundRepeat: 'no-repeat',
    backgroundImage: `url(${landingPageData.heroLeftBg.img})`,
    backgroundPosition: 'right',
    minHeight: '470px',
  },
  rightBg: {
    backgroundRepeat: 'no-repeat',
    backgroundImage: `url(${landingPageData.heroRightBg.img})`,
    backgroundPosition: 'left',

  },
  heroImage: {
    width: '100%',
    height: '420px',
    backgroundRepeat: 'no-repeat',
    backgroundSize: '100% 100%',
    // backgroundImage: `url(${landingPageData.landingPageHero.img})`,
  },
  texture: {
    backgroundSize: 'cover',
    backgroundImage: `url(${landingPageData.landingPageTile.img})`,
    padding: '110px 0 80px 0',
  },
  container: {
    fontFamily: 'Raleway, sans-serif',
    margin: '0 auto',
    background: 'white',

  },
  iconArrowRight: {
    color: '#FFF',
    marginTop: '4px',

  },
  whiteSection: {
    height: '3px',
    background: 'white',
  },
  redButton: {
    height: '13px',
    color: '#FFFFFF',
    fontFamily: 'Raleway',
    fontSize: '16px',
    fontWeight: 'bold',
    lineHeight: '47px',
    textAlign: 'center',
    textDecoration: 'none',
    textTransform: 'uppercase',
    letterSpacing: '0.8px',
  },
  headerTitle: {
    paddingTop: '90px',
    fontFamily: 'Inter, Raleway, sans-serif',
    fontSize: '42px',
    fontWeight: '600',
    lineHeight: '35px',
    color: '#942990',
    letterSpacing: '-0.6px',
  },
  paddingLeft50: {
    paddingLeft: '50px',
  },
  headerContent: {
    color: '#000000',
    fontFamily: 'Nunito Sans',
    fontSize: '16px',
    fontWeight: '300',
    lineHeight: '21px',
    marginTop: '32px',
    marginBottom: '16px',
  },
  headerLink: {
    textDecoration: 'none',
    display: 'flex',
    // borderBottom: '1.5px solid #D36000',
    maxWidth: '244px',
    background: '#D36000',
    borderRadius: '8px',
  },

  iconAbout: {
    height: '17px',
    width: '9px',
    marginTop: '15px',
    marginLeft: '20px',
  },
  icon: {
    width: '20px',
    marginTop: '13px',
    marginLeft: '23px',
  },

  aboutImage: {
    width: '297px',
    height: '249px',
    padding: '14px',
  },
  aboutImageSection: {
    height: '249px',
    background: '#20506A',
  },
  DCWords: {
    height: '200px',
    background: '#29ABE2',
    color: '#FFFFFF',
    fontSize: '26px',
    textTransform: 'capitalize',
    lineHeight: '30px',
    padding: '15px 75px 26px 30px',
    fontFamily: 'Lato',
  },
  landingContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  contentLeft: {
    float: 'left',
    paddingRight: '10px',
  },
  about: {
    width: '300px',
    backgroundColor: 'white',
  },
  image: {
    width: '293px',
    height: '249px',
  },
  aboutContent: {
    background: '#20506A',
    minHeight: '372px',
    width: '300px',
    padding: '30px 30px 32px 30px',
    color: 'white',
    fontFamily: 'Nunito Sans',
    fontSize: '16px',
    fontWeight: '300',
    lineHeight: '22px',
  },
  aboutButtonSection: {
    background: '#20506A',
    height: '71px',
  },
  imgIconAbout: {
    width: '49px',
  },
  aboutButtonLeft: {
    float: 'left',
    background: '#AE5E1B',
    height: '45px',
    width: '48px',
  },
  aboutButtonRight: {
    background: '#CB864C',
    float: 'left',
    height: '45px',
    width: '132px',
  },
  aboutButton: {
    color: '#ffffff',
    textDecoration: 'none',
    textTransform: 'uppercase',
    fontSize: '12px',
    fontWeight: '600',
    lineHeight: '45px',
    paddingLeft: '20px',
    boxShadow: 'none',
    letterSpacing: '1px',
  },

  content: {
    width: '100%',
    height: '155px',
    overflowY: 'auto',
    background: '#fff',
    paddingLeft: '30px',
    paddingTop: '5px',
    minHeight: '138px',
  },
  contentHeader: {
    color: '#033D6F',
    fontFamily: 'Lato',
    fontSize: '28px',
    lineHeight: '27px',
    padding: '10px 0',
  },
  contentContainer: {
    width: '215px',
    color: '#010101',
    fontFamily: 'Nunito Sans',
    fontWeight: '300',
    fontSize: '16px',
    lineHeight: '22px',
    paddingLeft: '2px',
    paddingBottom: '10px',
  },

  program: {
    float: 'left',
    padding: '0 10px 6.8px 0px',
  },
  programImg: {
    background: '#fff',
    height: '249px',
  },
  studies: {
    float: 'left',
  },
  mailLink: {
    textDecoration: 'none',
  },

  contentRightBottom: {
    float: 'left',
    width: '597px',
    background: '#fff',
    backgroundImage: `url(${landingPageData.tile4.img})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  },
  cases: {
    height: '436px',
    paddingLeft: '340px',
    paddingTop: '70px',
  },
  mountainMeadowButtonSection: {
    height: '46px',
    width: '176px',
    backgroundColor: '#942A90',
    marginTop: '20px',

  },
  blueButton: {
    height: '45px',
    background: '#942A90',
    color: '#FFFFFF',
    fontFamily: 'Raleway',
    fontSize: '12px',
    fontWeight: '600',
    lineHeight: '25px',
    paddingLeft: '8px',
    textDecoration: 'none',
    letterSpacing: '1px',
  },
  blueButtonLeft: {
    float: 'left',
  },
  blueButtonRight: {
    float: 'left',
    lineHeight: '44px',
    marginLeft: '8px',
    fontFamily: 'Lato',
    fontSize: '14px',
    color: '#fff',
    textTransform: 'uppercase',
  },
  mountainMeadowContentHeader: {
    color: 'white',
    fontFamily: 'Inter',
    fontSize: '28px',
    lineHeight: '32px',
    padding: '15px 0',
  },
  mountainMeadowContent: {
    height: '143px',
    width: '200px',
    color: 'white',
    fontFamily: 'Nunito Sans',
    fontWeight: '300',
    fontSize: '15px',
    lineHeight: '22px',
  },
  mountainMeadowIcon: {
    width: '20px',
    marginTop: '12px',
    marginLeft: '28px',
  },
  mountainMeadowButton: {
    padding: '15px 5px 0 0',
    height: '9px',
    width: '71px',
    color: '#FFFFFF',
    fontFamily: 'Raleway',
    fontSize: '12px',
    fontWeight: '600',
    lineHeight: '19.31px',
    textDecoration: 'none',
    marginLeft: '8px',
    letterSpacing: '1px',
    '&:hover': {
      color: '#ffffff',
    },
  },
  paddingBottom50: {
    paddingBottom: '50px',
  },
  paddingTop30: {
    paddingTop: '30px',
  },
  animationContainer: {
    position: 'relative',
    left: '33%',
  },

  paddingLeft2: {
    paddingLeft: '2px',
  },
  heroTextContainer: {
    position: 'absolute',
    width: '400px',
    margin: 'auto',
    left: '12px',
    right: 0,
    '@media (min-width: 900px)': {
      width: '906px',
    },
  },
  heroTextWrapper: {
    width: '500px',
  },
  buttonText: {
    height: '32px',
    padding: '8px 58px 8px 16px',
    background: 'transparent',
    fontSize: '12px',
    fontFamily: 'Lato',
    fontWeight: '600',
    color: '#FFF',
    border: 'none',
    display: 'flex',
    letterSpacing: '1px',
    whiteSpace: 'pre',
  },
});
export default withStyles(styles, { withTheme: true })(LandingView);
