/* eslint-disable react/no-danger */
import React from 'react';
import {
  withStyles,
} from '@material-ui/core';
import styles from './styles';

const ReleaseNotes = (props) => {
  const { classes, versionDetails } = props;

  // Function to convert URLs to anchor tags
  const convertToAnchorTags = (text) => {
    const urlRegex = /(https?:\/\/[^\s]+)/g;
    return text.replace(urlRegex, (url) => `<a href="${url}" target="_blank">${url}</a>`);
  };

  return (
    <div className={classes.releaseNotesContainer}>
      <hr className={classes.horizontalLine} />
      <div className={classes.releaseNotesWrapper}>
        <h3 className={classes.heading}>{versionDetails.heading}</h3>
        <p className={classes.releaseDateInfo}>{`Release Data: ${versionDetails.releaseDate}`}</p>
        <p className={classes.subHeading}>{versionDetails.subHeading}</p>
        <div className={classes.infoWrapper}>
          {versionDetails.content.map((item, index) => (
            <div key={index}>
              {item.paragraph && <p dangerouslySetInnerHTML={{ __html: convertToAnchorTags(item.paragraph) }} />}
              {item.list && (
                <ul>
                  {item.list.map((listItem, listItemIndex) => (
                    <li key={listItemIndex} dangerouslySetInnerHTML={{ __html: convertToAnchorTags(listItem) }} />
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

export default withStyles(styles)(ReleaseNotes);
