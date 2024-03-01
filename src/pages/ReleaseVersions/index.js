// import { withStyles } from "@mui/styles";
import {
  Table, TableBody, TableCell, TableRow, withStyles,
} from '@material-ui/core';
import { ArrowDropDown, Launch } from '@material-ui/icons'; 
import clsx from 'clsx'; 
import React, { useState, useEffect } from 'react';
import jsonLink from '../../bento/releaseNotesData';
import styles from './styles';
import ReleaseNotes from '../ReleaseNotes';
import Stats from '../../components/Stats/AllStatsController';

const ReleaseVersions = (props) => {
  const { classes } = props;
  const [jsonData, setJsonData] = useState(null);
  const [versionDetails, setVersionDetails] = useState(null);
  const [expanded, setExpanded] = useState(false); 

  useEffect(() => {
    const fetchJsonData = async () => {
      try {
        const response = await fetch(jsonLink);
        const data = await response.json();
        setJsonData(data);
        setVersionDetails(data.VERSIONS[0]); // Set initial version details
      } catch (error) {
        alert('Error fetching release notes data:', error);
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
                  <TableBody>
                    <TableRow>
                      <TableCell colSpan={2} > 
                        <span className={clsx(classes.releaseHeading, classes.dataHeading)} onClick={() => setExpanded(!expanded)}>  
                          {"DATA RELEASE NOTES"} 
                          <ArrowDropDown className={clsx(classes.releaseDropdown, expanded ? classes.upsideDown : '')}/> 
                        </span> 
                      </TableCell> 
                    </TableRow>
                    {jsonData.VERSIONS.map((row) => (
                      <TableRow key={row.id} onClick={() => setVersionDetails(row)} className={expanded ? '' : classes.hiddenRow}>
                        <TableCell align="left"><span className={classes.version}>{"Version: " + row.versionNumber}</span></TableCell> 
                        <TableCell align="left">{"(" + row.releaseDate + ")"}</TableCell> 
                      </TableRow>
                    ))}
                    <TableRow className={classes.softwareBorder}> 
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
          </>
        )}
      </div>
    </>
  );
};

export default withStyles(styles)(ReleaseVersions);
