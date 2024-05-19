import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Button, withStyles } from '@material-ui/core';
import readMeContent from '../../../../bento/fileCentricCartPageREADME.md'
import ReadMeDialogComponent from './components/readmeDialogController';
import ReadmeIcon from './readmeIcon';
import { readMeButtonStyles } from './readMeStyles';

const readMeButtonView = (props) => {
    const { classes } = props;
    const tempReadMeUrl = 'https://raw.githubusercontent.com/CBIIT/icdc-readMe-content/dev/My_Files_Cart_Page_README.md'

    const [displayReadMe, setDisplayReadMe] = useState(false);
    const [content, setContent] = useState(undefined);

    useEffect(() => {
        getReadMe(setContent, tempReadMeUrl);
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