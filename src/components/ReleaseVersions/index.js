// import { withStyles } from "@mui/styles";
import {
  Table, TableHead, TableBody, TableCell, TableRow, withStyles,
} from '@material-ui/core';
import React, { useState } from 'react';
import * as Constants from '../../bento/releaseNotesData';
import styles from './styles';
import ReleaseNotes from '../ReleaseNotes';
import Stats from '../Stats/AllStatsController';

const ReleaseVersions = (props) => {
  const { classes } = props;
  const [versionDetails, setVersionDetails] = useState(Constants.VERSIONS[0]);

  return (
    <>
      <Stats />
      <div className={classes.container}>
        <h1>{Constants.HEADING}</h1>
        <div className={classes.wrapper}>
          <div className={classes.tableWrapper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell align="left">Version</TableCell>
                  <TableCell align="left">Date</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {Constants.VERSIONS.map((row) => (
                  <TableRow key={row.id}>
                    <TableCell align="left"><span className={classes.versionLink} onClick={() => setVersionDetails(row)}>{row.versionNumber}</span></TableCell>
                    <TableCell align="left">{row.releaseDate}</TableCell>
                  </TableRow>
                ))}
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
