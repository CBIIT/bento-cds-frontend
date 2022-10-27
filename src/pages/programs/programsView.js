import React from 'react';
import {
  Grid,
  withStyles,
} from '@material-ui/core';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { CustomDataTable, getOptions, getColumns } from 'bento-components';
import globalData from '../../bento/siteWideConfig';
import {
  table, programListingIcon, externalLinkIcon,
} from '../../bento/programData';
import Stats from '../../components/Stats/AllStatsController';
import { Typography } from '../../components/Wrappers/Wrappers';
import {
  singleCheckBox, setSideBarToLoading, setDashboardTableLoading,
} from '../dashboardTab/store/dashboardReducer';
import themes, { overrides } from '../../themes';

const Programs = ({ classes, data }) => {
  const overridesObj = themes.light.overrides;

  overridesObj.MUIDataTableBodyRow.root.height = '90px';

  const computedTheme = createMuiTheme({ ...themes.light, ...overrides });

  const redirectTo = (program) => {
    setSideBarToLoading();
    setDashboardTableLoading();
    singleCheckBox([{
      datafield: 'programs',
      groupName: 'Program',
      isChecked: true,
      name: program.rowData[0],
      section: 'Filter By Cases',
    }]);
  };

  return (
    <>
      <Stats />
      <div className={classes.tableContainer}>
        <div className={classes.container}>
          <div className={classes.header}>
            <div className={classes.logo}>
              <img
                src={programListingIcon.src}
                alt={programListingIcon.alt}
              />

            </div>
            <div className={classes.headerTitle}>
              <div className={classes.headerMainTitle}>
                <span>
                  <Typography>
                    <span className={classes.headerMainTitle}>{table.title}</span>
                  </Typography>
                </span>
              </div>
            </div>
          </div>

          { table.display ? (
            <div id="table_programs" className={classes.tableDiv}>
              <Grid container>
                <Grid item xs={12}>
                  <MuiThemeProvider theme={computedTheme}>

                    <CustomDataTable
                      data={data[table.dataField]}
                      columns={getColumns(table, classes, data, externalLinkIcon, '/data', redirectTo, '', globalData.replaceEmptyValueWith)}
                      options={getOptions(table, classes)}
                    />
                  </MuiThemeProvider>
                </Grid>
              </Grid>
            </div>
          ) : ''}
        </div>

      </div>
    </>
  );
};

const styles = (theme) => ({

  link: {
    textDecoration: 'none',
    fontWeight: 'bold',
    color: '#900F89',
    '&:hover': {
      textDecoration: 'underline',
      textUnderlineOffset: '2.5px',
    },
  },
  card: {
    minHeight: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  container: {
    margin: 'auto',
    maxWidth: '1440px',
    paddingLeft: '36px',
    paddingRight: '36px',
  },
  paper: {
    textAlign: 'center',
  },
  fakeToolbar: {
    ...theme.mixins.toolbar,
  },
  root: {
    fontFamily: '"Lato Regular","Open Sans", sans-serif',
    fontSize: '9pt',
    letterSpacing: '0.025em',
    color: '#000',
    background: 'white',
  },
  header: {
    background: 'white',
    paddingLeft: '20px',
    paddingRight: '50px',
    borderBottom: '#9FD8F0 10px solid',
    height: '128px',
    paddingTop: '35px',
  },
  headerMainTitle: {
    fontFamily: 'Inter',
    letterSpacing: '0.01em',
    fontWeight: 'bold',
    color: '#0E6292',
    fontSize: '26px',
    position: 'absolute',
    marginTop: '16px',
    lineHeight: '25px',
    marginLeft: '2px',
  },

  headerTitle: {
    maxWidth: '1440px',
    margin: 'auto',
    float: 'left',
    marginLeft: '90px',
  },
  logo: {
    position: 'absolute',
    float: 'left',
    marginLeft: '-17px',
    width: '100px',
    filter: 'drop-shadow(-3px 2px 6px rgba(27,28,28,0.29))',
  },
  tableContainer: {
    background: 'white',
    paddingBottom: '50px',
  },
  tableDiv: {
    margin: 'auto',
  },
  externalLinkIcon: {
    width: '14.5px',
    verticalAlign: 'sub',
    marginLeft: '4px',
    paddingBottom: '2px',
  },
  linkSpan: {
    display: '-webkit-box',
  },
});

export default withStyles(styles, { withTheme: true })(Programs);
