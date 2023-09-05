import React from 'react';
import { AboutHeader, AboutBody } from '@bento-core/about';
import { withStyles } from '@material-ui/core';
import Stats from '../../components/Stats/AllStatsController';

const AboutView = ({ classes, data }) => {
  const getImage = (imgPath, alt) => <img className={classes.img} src={imgPath != null ? imgPath : ''} alt={alt} />;

  return (
    <>
      <Stats />
      {/* <div className={classes.leftBg}> */}

      <div className={classes.leftBg}>
        <div className={classes.rightBg}>

          <AboutHeader title={data.title} titleColor="#0B4E75" background="white" />
          <div>
            <AboutBody
              data={{
                image: getImage(data.primaryContentImage, data.title),
                imageLocation: 'right',
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
              }}
              titleColor="#1280AE"
              linkColor="#900F89"
              externalIconImage="https://raw.githubusercontent.com/CBIIT/datacommons-assets/main/cds/icons/externalLinkIcon.svg"
            />
          </div>
        </div>
      </div>    </>

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
    backgroundImage: 'url(\'https://raw.githubusercontent.com/CBIIT/datacommons-assets/main/cds/about/leftBg.jpg\')',
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

export default withStyles(styles)(AboutView);
