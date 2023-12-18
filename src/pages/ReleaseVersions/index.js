// import { withStyles } from "@mui/styles";
import {
  Table, TableHead, TableBody, TableCell, TableRow, withStyles,
} from '@material-ui/core';
import React, { useState, useEffect } from 'react';
import jsonLink from '../../bento/releaseNotesData';
import styles from './styles';
import ReleaseNotes from '../ReleaseNotes';
import Stats from '../../components/Stats/AllStatsController';

const ReleaseVersions = (props) => {
  const { classes } = props;
  const [jsonData, setJsonData] = useState(null);
  const [versionDetails, setVersionDetails] = useState(null);

  useEffect(() => {
    const fetchJsonData = async () => {
      try {
        const response = await fetch(jsonLink);
        const data = await response.json();
        setJsonData(data);
        setVersionDetails(data.VERSIONS[0]); // Set initial version details
      } catch (error) {
        console.error('Error fetching JSON data:', error);
      }
    };

    fetchJsonData();
  }, []); // Empty dependency array ensures that this effect runs once, similar to componentDidMount

  return (
    <>
      <Stats />
      <div className={classes.container}>
        {jsonData && (
          <>
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
              {versionDetails && <ReleaseNotes versionDetails={versionDetails} />}
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default withStyles(styles)(ReleaseVersions);
