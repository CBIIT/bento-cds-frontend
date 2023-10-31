// import { withStyles } from "@mui/styles";
import {
  Table, TableHead, TableBody, TableCell, TableRow, withStyles,
} from '@material-ui/core';
import React, { useState } from 'react';
import styles from './styles';
import ReleaseNotesJSON from '../ReleaseNotesJSON';
import Stats from '../../components/Stats/AllStatsController';
//import jsonData from './test.json';
import jsonData from './releaseNotesTest.json';

const ReleaseTestJSON = (props) => {
  const { classes } = props;
  const [versionDetails, setVersionDetails] = useState(jsonData.VERSIONS[0]);
  console.log('findme', jsonData);
  jsonData.VERSIONS.map((row) => (
    console.log('findme', row)
  ));

  return (
    <>
      <Stats />
      <div className={classes.container}>
        <h1>{jsonData.HEADING}</h1>
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
                {jsonData.VERSIONS.map((row) => (
                  <TableRow key={row.id}>
                    <TableCell align="left"><span className={classes.versionLink} onClick={() => setVersionDetails(row)}>{row.versionNumber}</span></TableCell>
                    <TableCell align="left">{row.releaseDate}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            <hr className={classes.horizontalLine} />
          </div>
          {versionDetails && <ReleaseNotesJSON versionDetails={versionDetails} />}
        </div>
      </div>
    </>
  );
};

export default withStyles(styles)(ReleaseTestJSON);
