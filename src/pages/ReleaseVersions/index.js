// import { withStyles } from "@mui/styles";
import {
  Table, TableBody, TableCell, TableRow, withStyles, 
} from '@material-ui/core';
import { ArrowDropDown, Launch } from '@material-ui/icons';
import clsx from 'clsx';
import React, { useState } from 'react';
import * as Constants from '../../bento/releaseNotesData';
import styles from './styles';
import ReleaseNotes from '../ReleaseNotes';
import Stats from '../../components/Stats/AllStatsController';

const ReleaseVersions = (props) => {
  const { classes } = props;
  const [versionDetails, setVersionDetails] = useState(Constants.VERSIONS[0]);
  const [expanded, setExpanded] = useState(false);

  return (
    <>
      <Stats />
      <div className={classes.container}>
        <h1>{Constants.HEADING}</h1>
        <div className={classes.wrapper}>
          <div className={classes.tableWrapper}>
            <Table>
              <TableBody>
                <TableRow>
                  <TableCell colSpan={2} >
                    <span className={clsx(classes.releaseHeading, classes.dataHeading)} onClick={() => setExpanded(!expanded)}> 
                      {"CDS RELEASE NOTES"}
                      <ArrowDropDown className={clsx(classes.releaseDropdown, expanded ? classes.upsideDown : '')}/>
                    </span>
                  </TableCell>
                </TableRow>
                {Constants.VERSIONS.map((row) => (
                  <TableRow key={row.id} onClick={() => setVersionDetails(row)} className={expanded ? '' : classes.hiddenRow}>
                    <TableCell align="left"><span className={classes.version}>{"Version: " + row.versionNumber}</span></TableCell>
                    <TableCell align="left">{"(" + row.releaseDate + ")"}</TableCell>
                  </TableRow>
                ))}
                <TableRow>
                  <TableCell colSpan={2}>
                    <span className={clsx(classes.releaseHeading, classes.softwareHeading)} onClick={() => window.open("https://github.com/CBIIT/bento-cds-frontend/releases")}> 
                      {"SOFTWARE RELEASE NOTES"}
                      <Launch className={classes.softwareDropdown}/>
                    </span>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
            <hr className={classes.horizontalLine} />
          </div>
          {versionDetails && <ReleaseNotes versionDetails={versionDetails} />}
        </div>
      </div>
    </>
  );
};

export default withStyles(styles)(ReleaseVersions);
