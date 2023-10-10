import React from "react";
import { Grid, withStyles } from "@material-ui/core";

const cartMessage = (props) => {
    const { classes } = props;
  return (
    <Grid>
      <Grid item xs={12} className={classes.marginTopNegative}>
        <div class={classes.text}>
          To access and analyze file click "Download Manifest" button and upload
          resulting file to{" "}
          <a
            class={classes.sbgLink}
            target="_blank"
            href="https://www.cancergenomicscloud.org"
            rel="noreferrer"
          >
            Seven Bridges Genomics
          </a>{" "}
          account
        </div>
      </Grid>
    </Grid>
  );
};

const styles = (props)=>({
    text: {
        color: '#BB5500',
        width: '538px',
        padding: '20px',
        fontSize: '14px',
        fontFamily: 'Nunito',
        fontWeight: 200,
        letterSpacing: '-0.02em',
    },
    sbgLink:{
      color: '#900F89',
      fontWeight: 'bold',
      textDecoration: 'none',
    }
})

export default withStyles(styles)(cartMessage);
