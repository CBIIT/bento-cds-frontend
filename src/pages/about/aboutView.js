import React from 'react';
import { AboutHeader, AboutBody } from 'bento-components';
import { withStyles } from '@material-ui/core';
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
            }}
            titleColor="#1280AE"
            linkColor="#900F89"
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
