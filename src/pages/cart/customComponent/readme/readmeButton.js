import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Button, withStyles } from '@material-ui/core';
//import readMeContent from '../../../../bento/fileCentricCartPageREADME.md'
import env from '../../../../utils/env';
import ReadMeDialogComponent from './components/readmeDialogController';
import ReadmeIcon from './readmeIcon';
import { readMeButtonStyles } from './readmeStyles';

const readMeButtonView = (props) => {
    const { classes } = props;
    const readMeURL = env.REACT_APP_STATIC_CONTENT_URL+ 'fileCentricCartPageREADME.md';

    const [displayReadMe, setDisplayReadMe] = useState(false);
    const [content, setContent] = useState(undefined);

    useEffect(() => {
        getReadMe(setContent, readMeURL);
      }, []);

    const getReadMe = async (setContent, url) => {
        const { data } = await axios.get(url);
        setContent(data);
    };

    const displayReadMeHandler = () => {
        setDisplayReadMe(!displayReadMe);
      };
    return (
        <>
            <Button
                className={classes.readMeButton}
                color="primary"
                variant="contained"
                endIcon={<ReadmeIcon />}
                disableRipple
                onClick={displayReadMeHandler}
                >
                README
            </Button>
            <ReadMeDialogComponent
                content={content}
                config={{
                readMeTitle: 'Understanding the “My Files” Cart Page',
                }}
                display={displayReadMe}
                displayReadMeDialog={displayReadMeHandler}
            />
        </>
    );
}

export default withStyles(readMeButtonStyles)(readMeButtonView);