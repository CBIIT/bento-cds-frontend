import React from 'react';
import { useQuery } from '@apollo/client';
// import { useDispatch } from 'react-redux';
import {
  Grid,
  withStyles,
} from '@material-ui/core';
import { Link } from 'react-router-dom';
// import { getOptions, getColumns, CustomActiveDonut } from 'bento-components';
import {
  getOptions, ToolTip,
} from 'bento-components';
import GridWithFooter from '../../components/GridWithFooter/GridView';
import StatsView from '../../components/Stats/StatsView';
import { Typography } from '../../components/Wrappers/Wrappers';
// import fileCountIcon from '../../assets/icons/Program_Detail.FileCount.svg';
import {
  header,
  subsections,
  table,
  tooltipContent,
  rightPanel,
  armHeaderLogo,
  GET_MY_FILE_OVERVIEW_QUERY,
  armIDField,
} from '../../bento/armDetailData';
import {
  singleCheckBox, setSideBarToLoading, setDashboardTableLoading,
} from '../dashboardTab/store/dashboardReducer';
// import Widget from '../../components/Widgets/WidgetView';
import PropertySubsection from '../../components/PropertySubsection/armDetailSubsection';
// import NumberOfThings from '../../components/NumberOfThings';
import Snackbar from '../../components/Snackbar';
// import colors from '../../utils/colors';
import CustomBreadcrumb from '../../components/Breadcrumb/BreadcrumbView';

// Main case detail component
const ArmDetail = ({ studyData, paramId, classes }) => {
  // const dispatch = useDispatch();

  // eslint-disable-next-line no-unused-vars
  const { loading, error, data } = useQuery(GET_MY_FILE_OVERVIEW_QUERY, {
    variables: { [armIDField]: paramId, first: 10 },
  });

  const [snackbarState, setsnackbarState] = React.useState({
    open: false,
    value: 0,
  });
  function openSnack(value1) {
    setsnackbarState({ open: true, value: value1 });
  }
  function closeSnack() {
    setsnackbarState({ open: false });
  }

  const redirectTo = () => {
    setSideBarToLoading();
    setDashboardTableLoading();
    singleCheckBox([{
      datafield: 'studies',
      groupName: 'Study',
      isChecked: true,
      name: studyData.study_name,
      section: 'Filter By Cases',
    }]);
  };

  const stat = {
    numberOfPrograms: 1,
    numberOfStudies: 1,
    numberOfSubjects: studyData.numberOfSubjects,
    numberOfSamples: studyData.numberOfSamples,
    numberOfDiseaseSites: studyData.numberOfDiseaseSites,
    numberOfFiles: studyData.numberOfFiles,
  };

  const breadCrumbJson = [
    {
      name: 'Home',
      to: '/home',
      isALink: true,
    },
    {
      name: 'All Studies',
      to: '/studies',
      isALink: true,
    },
    {
      name: studyData.phs_accession,
      isALink: false,
    },
  ];

  return (
    <>
      <Snackbar
        snackbarState={snackbarState}
        closeSnack={closeSnack}
        autoHideDuration={3000}
        classes={classes}
      />
      <StatsView data={stat} />
      <div className={classes.container}>
        <div className={classes.innerContainer}>
          <div className={classes.breadCrumb}>
            {' '}
            <CustomBreadcrumb data={breadCrumbJson} />
          </div>
          <div className={classes.header}>
            <div className={classes.logo}>
              <img
                className={classes.caseIcon}
                src={armHeaderLogo.src}
                alt="CDS arm detail header logo"
              />

            </div>
            <div className={classes.headerTitle}>
              <div className={classes.headerMainTitle} id="arm_detail_title">
                {`${header.label}:`}
                {studyData[header.dataField]
                  ? (
                    <span className={classes.headerMainTitleTwo}>
                      {' '}
                      {studyData[header.dataField]}
                    </span>
                  )
                  : (
                    <Typography variant="h5" color="error" size="sm">
                      {`"${header.dataField}" is not a valid property name`}
                    </Typography>
                  )}
              </div>
            </div>
            { /* Case Count */ }
            <Link
              className={classes.headerButtonLink}
              to={(location) => ({ ...location, pathname: '/data' })}
              onClick={() => redirectTo()}
            >
              <ToolTip title="View full Participant Listing in Data Dashboard page">
                <div className={classes.headerButton}>
                  <div className={classes.headerButtonLinkArea}>
                    <span className={classes.headerButtonLinkText}>Study Participants</span>

                    <span className={classes.headerButtonLinkNumber} id="arm_detail_header_file_count">
                      {studyData.numberOfSubjects}
                    </span>
                  </div>
                </div>
              </ToolTip>
            </Link>

          </div>

          <Grid container className={classes.detailContainer}>
            {/* Left panel */}
            <Grid item lg={7} sm={6} xs={12} className={[classes.detailPanel, classes.leftPanel]}>
              <div className={classes.innerPanel}>
                <Grid container spacing={2}>
                  {subsections.slice(0, 6).map((section, index) => (
                    <PropertySubsection key={index} section={section} data={studyData} />
                  ))}
                </Grid>
              </div>
            </Grid>
            {/* Left panel end */}
            {/* Right panel */}
            <Grid item lg={5} sm={6} xs={12} className={[classes.detailPanel, classes.rightPanel]}>
              {/* <div className={classes.innerPanel}> */}
              {/* Diagnosis donut */}
              {/* <div className={classes.widgetContainer}>
                  <Widget
                    title="Diagnosis"
                    color="#0296C9"
                    bodyClass={classes.fullHeightBody}
                    className={classes.card}
                    titleClass={classes.widgetTitle}
                    noPaddedTitle
                  >
                    <CustomActiveDonut
                      data={data.diagnoses}
                      width={208}
                      height={210}
                      innerRadius={50}
                      outerRadius={75}
                      cx="50%"
                      cy="50%"
                      fontSize="12px"
                      colors={colors}
                      titleLocation="bottom"
                      titleAlignment="center"
                    />
                  </Widget>
                </div> */}
              {/* File count */}
              {/* <NumberOfThings
                classes={classes}
                number={data.num_files}
                icon={fileCountIcon} title="NUMBER OF FILES" alt="Bento file count icon" /> */}
              {/* </div> */}
              <div style={{ paddingLeft: '7px' }} className={classes.innerPanel}>
                <Grid container spacing={2}>
                  {rightPanel.slice(0, 3).map((section, index) => (
                    <PropertySubsection
                      key={index}
                      section={section}
                      data={studyData}
                    />
                  ))}
                </Grid>
              </div>
            </Grid>
            {/* Right panel end */}
          </Grid>
        </div>
      </div>
      <div id="arm_detail_table" className={classes.tableContainer}>
        <div className={classes.tableDiv}>
          {table.display
            ? (
              <>
                <div className={classes.tableTitle} id="arm_detail_table_title">
                  <span className={classes.tableHeader}>{table.title}</span>
                </div>
                <Grid item xs={12}>
                  <Grid container spacing={4}>
                    <Grid item xs={12}>
                      <GridWithFooter
                        tableConfig={table}
                        data={(data && data.fileOverview) || []}
                        columns={table}
                        options={getOptions(table, classes)}
                        customOnRowsSelect={table.customOnRowsSelect}
                        openSnack={openSnack}
                        closeSnack={closeSnack}
                        disableRowSelection={table.disableRowSelection}
                        buttonText={table.buttonText}
                        saveButtonDefaultStyle={table.saveButtonDefaultStyle}
                        ActiveSaveButtonDefaultStyle={table.ActiveSaveButtonDefaultStyle}
                        DeactiveSaveButtonDefaultStyle={table.DeactiveSaveButtonDefaultStyle}
                        tooltipMessage={table.tooltipMessage}
                        tooltipContent={tooltipContent}
                        count={studyData.numberOfFiles}
                        queryCustomVaribles={{ [armIDField]: paramId }}
                        query={GET_MY_FILE_OVERVIEW_QUERY}
                      />
                    </Grid>
                    <Grid item xs={8}>
                      <Typography />
                    </Grid>
                  </Grid>
                </Grid>
              </>
            ) : null}
        </div>
      </div>
    </>
  );
};

const styles = (theme) => ({
  container: {
    backgroundColor: '#FFFFFF',
    padding: '0 32px',
  },
  innerContainer: {
    maxWidth: '1340px',
    margin: '0 auto',
    paddingTop: '8px',
    fontFamily: theme.custom.fontFamily,
    background: '#FFFF',
  },
  root: {
    fontFamily: theme.custom.fontFamily,
    fontSize: '9px',
    letterSpacing: '0.025em',
    color: '#000',
    background: '#f3f3f3',
  },
  noDisplay: {
    display: 'none',
  },
  header: {
    paddingRight: '12px',
    borderBottom: '#F0BDEE 10px solid',
    height: '80px',
    maxWidth: theme.custom.maxContentWidth,
    margin: 'auto',
  },
  caseIcon: {
    height: '94px',
  },
  headerTitle: {
    maxWidth: theme.custom.maxContentWidth,
    margin: 'auto',
    float: 'left',
    paddingLeft: '90px',
    width: 'calc(100% - 265px)',
  },
  headerMainTitle: {
    fontFamily: 'Lato',
    color: '#B431B0',
    fontSize: '26px',
    lineHeight: '24px',
    paddingLeft: '0px',
    paddingTop: '12px',
  },
  headerMainTitleTwo: {
    fontWeight: 'bold',
    letterSpacing: '0.025em',
  },
  logo: {
    position: 'absolute',
    float: 'left',
    marginTop: '-6px',
    filter: 'drop-shadow( 2px 2px 2px rgba(0, 0, 0, 0.2))',
  },
  headerButton: {
    float: 'right',
    width: '190px',
    height: '39px',
    marginTop: '20px',
    background: '#FFF',
    boxShadow: '0px 8px 15px rgba(0, 0, 0, 0.15)',
  },
  headerButtonLinkArea: {
    marginLeft: '16px',
    paddingTop: '4px',
  },
  headerButtonLinkText: {
    fontFamily: theme.custom.fontFamily,
    color: '#0E6292',
    fontSize: '10px',
    textTransform: 'uppercase',
    paddingRight: '2px',
    paddingLeft: '4px',
    fontWeight: 600,
    letterSpacing: '0px',
  },
  headerButtonLinkNumber: {
    fontFamily: theme.custom.fontFamily,
    borderBottom: 'solid #900F89 3px',
    color: '#900F89',
    lineHeight: '30px',
    paddingBottom: '2px',
    margin: '0 4px',
    fontSize: '14px',
    letterSpacing: '1px',
    fontWeight: 'bold',
  },
  headerButtonLink: {
    color: 'black',
    textDecoration: 'none',
    '&:visited': {
      color: 'black',
    },
  },
  detailContainer: {
    maxWidth: theme.custom.maxContentWidth,
    margin: 'auto',
    padding: '5px 0 10px 0px',
    fontFamily: theme.custom.fontFamily,
    letterSpacing: '0.014em',
    color: '#000000',
    size: '12px',
    lineHeight: '23px',
    // borderBottom: 'solid 3px #42779A',
  },
  detailPanel: {
    borderRight: 'solid 1px #81A6BA',
  },
  leftPanel: {
    paddingLeft: '0px',
  },
  rightPanel: {
    paddingLeft: '37px !important',
  },
  innerPanel: {
    height: '100%',
    minHeight: '400px',
    maxHeight: '700px',
    overflowY: 'auto',
    overflowX: 'hidden',
    paddingLeft: '20px',
    paddingRight: '40px',
    scrollbarColor: '#697270',
  },
  widgetContainer: {
    height: '255px',
    margin: '45px auto',
    '&:first-child': {
      marginTop: '21px',
    },
  },
  fileCountContainer: {
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '162px',
    height: '162px',
    backgroundColor: '#F3F3F3',
    borderRadius: '100px',
  },
  widgetTitle: {
    textTransform: 'uppercase',
    marginTop: '9px',
    color: '#0296C9',
    fontSize: '17px !important',
    fontFamily: theme.custom.fontFamily,
  },
  numberOfFiles: {
    textTransform: 'uppercase',
    marginBottom: '10px',
    color: '#0296C9',
    fontSize: '17px',
    fontFamily: theme.custom.fontFamily,
  },
  fileCountText: {
    paddingTop: '10px',
    margin: 'auto',
    textAlign: 'center',
    fontSize: '30px',
    fontWeight: '600',
    fontFamily: 'Oswald',
    color: '#7A297D',
    '& span': {
      borderBottom: 'solid 5px',
    },
  },
  fileIconContainer: {
    width: '60px',
    margin: '30px auto',
  },
  fileIcon: {
    width: '59px',
  },
  tableContainer: {
    background: '#F2F2F2',
    padding: '0 32px',
  },
  tableHeader: {
    paddingLeft: '20px',
  },
  tableDiv: {
    // maxWidth: theme.custom.maxContentWidth,
    margin: '0 auto auto auto',
    paddingTop: '30px',
    maxWidth: '1340px',
  },
  tableTitle: {
    textTransform: 'uppercase',
    fontFamily: 'Lato',
    fontSize: '18px',
    letterSpacing: '0.025em',
    color: '#AE6CAB',
    paddingBottom: '19px',
  },
  link: {
    color: '#DC762F',
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'underline',
    },
  },
  externalLinkIcon: {
    width: '14.5px',
    verticalAlign: 'sub',
    marginLeft: '4px',
    paddingBottom: '2px',
  },
  breadCrumb: {
    paddingTop: '16px',
    paddingBottom: '30px',
  },
});

export default withStyles(styles, { withTheme: true })(ArmDetail);
