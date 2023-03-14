import React from 'react';
import { AboutHeader } from 'bento-components';
import { withStyles } from '@material-ui/core';
import AboutBody from '../../components/about/aboutBodyView';
import Stats from '../../components/Stats/AllStatsController';

const AboutView = ({ classes, data }) => {
  const getImage = (imgPath, alt) => (imgPath !== '' ? <img className={classes.img} src={imgPath != null ? imgPath : ''} alt={alt} /> : <></>);

  return (
    <>
      <Stats />
      <div className={classes.whiteBg}>
        <AboutHeader title={data.title} titleColor="#0B4E75" background="white" />
        <div className={classes.marginTop}>
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
    </>

  );
};
const styles = () => ({
  img: {
    width: '100%',
  },
  whiteBg: {
    background: 'white',
  },
  marginTop: {
    marginTop: '-60px',
  },
});

export default withStyles(styles)(AboutView);
