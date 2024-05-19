import React from 'react';
import { Button, withStyles } from '@material-ui/core';
import ReadmeIcon from './readmeIcon';
import { readMeButtonStyles } from './readMeStyles';

const readMeButtonView = (props) => {
    const { classes } = props;
    return (
        <>
            <Button
                className={classes.readMeButton}
                color="primary"
                variant="contained"
                endIcon={<ReadmeIcon />}
                disableRipple
                >
                README
            </Button>
        </>
    );
}

export default withStyles(readMeButtonStyles)(readMeButtonView);