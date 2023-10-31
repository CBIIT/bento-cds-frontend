/* eslint-disable react/no-danger */
import React from 'react';
import {
  withStyles,
} from '@material-ui/core';
import styles from './styles';

const ReleaseNotesJSON = (props) => {
  const { classes, versionDetails } = props;

  return (
    <div className={classes.releaseNotesContainer}>
      <hr className={classes.horizontalLine} />
      <div className={classes.releaseNotesWrapper}>
        <h3 className={classes.heading}>{versionDetails.heading}</h3>
        <p className={classes.releaseDateInfo}>{`Release Data: ${versionDetails.releaseDate}`}</p>
        <p className={classes.subHeading}>{versionDetails.subHeading}</p>
        <div className={classes.infoWrapper}>
          { versionDetails.content.map((item) => (
            <div>
              {item.paragraph && <p>{item.paragraph}</p>}
              {item.list && (
                <ul>
                {item.list.map((listItem) => (
                  <li>{listItem}</li>
                ))}
                </ul>
              )}
            </div>
          ))}
        </div>
        </div>
      <hr className={classes.horizontalLine} />
    </div>
  );
};

export default withStyles(styles)(ReleaseNotesJSON);
