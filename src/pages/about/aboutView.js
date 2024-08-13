import React from 'react';
// import AboutBody from "../../components/about/aboutBodyView"
import { AboutHeader, AboutBody } from '@bento-core/about';
import { withStyles } from '@material-ui/core';
import Stats from '../../components/Stats/AllStatsController';
import { getComponent } from '../../bento/aboutPagesComponentMap';
import usePageTitle from '../../components/Analytics/usePageTitle';
import { STATIC_CONTENT } from '../../assets/staticContent';

const AboutView = ({ classes, data }) => {
  usePageTitle(data.title || "About")
  const getImage = (imgPath, alt) => <img className={classes.img} src={imgPath != null ? imgPath : ''} alt={alt} />;

  const getImageLocation = (imgLocation) => {
    if (imgLocation && imgLocation === "hidden") {
      return null;
    }

    return imgLocation ? imgLocation : 'right';
  }
  
  return (
    <>
      <Stats />
      {/* <div className={classes.leftBg}> */}

      <div className={classes.leftBg}>
        <div className={classes.rightBg}>

          <AboutHeader title={data.title} titleColor="#0B4E75" background="" />
          <div className={classes.aboutBodyWrapper}>
            <AboutBody
              data={{
                image: data.imageLocation !== "hidden" ? getImage(data.primaryContentImage, data.title) : null,
                imageLocation: getImageLocation(data.imageLocation),
                title: data.title ? data.title : '',
                content: data.content ? data.content : '',
                table: data.table ? data.table : '',
                secondaryImage: data.secondaryZoomImage ? data.secondaryZoomImage : null,
                secondaryImageData: getImage(data.secondaryZoomImage, 'secondary zoominout'),
                secondaryZoomImageTitle: data.secondaryZoomImageTitle
                  ? data.secondaryZoomImageTitle : null,
                downloadableContentTitle: data.downloadableContentTitle
                  ? data.downloadableContentTitle : null,
                downloadableContent: data.downloadableContent ? data.downloadableContent : '',
                actionTitle: data.actionTitle ? data.actionTitle : null,
                actionButtonLabel: data.actionButtonLabel ? data.actionButtonLabel : null,
                actionLink: data.actionLink ? data.actionLink : null,
                marginBottom: data.marginBottom ? data.marginBottom : 0,
                lineHeight: "23.2px",
              }}
              titleColor="#1280AE"
              linkColor="#900F89"
              externalIconImage={STATIC_CONTENT.icons.EXTERNAL_LINK_ICON_SVG}
            />
          </div>

          {data.components && data.components.map((componentName, idx)  => {
            const Component = getComponent(componentName);
            return Component ? <Component key={`${data.title}_${idx}`} /> : null;
          })}
        </div>
      </div>    
    </>
  );
};

const styles = () => ({
  img: {
    width: '100%',
  },
  hero: {
    width: '100%',
    margin: '0 auto',
  },
  leftBg: {
    backgroundImage: `url('${STATIC_CONTENT.about.LEFT_BG_IMAGE}')`,
    backgroundPosition: 'left top, left top',
    backgroundRepeat: 'no-repeat, repeat',
  },
  rightBg: {
    paddingBottom: '30px',
    backgroundImage: `url('${STATIC_CONTENT.about.RIGHT_BG_IMAGE}')`,
    backgroundPosition: 'right bottom, left top',
    backgroundRepeat: 'no-repeat, repeat',
  },
  aboutBodyWrapper: {
    "& ul": {
      marginTop: "-22px",
      marginBottom: 0,
    },
    "& .MuiGrid-container": {
      justifyContent: "center"
    }
  }
});

export default withStyles(styles)(AboutView);
