import React from 'react';
import {
  Grid,
  withStyles,
} from '@material-ui/core';
import { Link } from 'react-router-dom';
import {
  CustomDataTable,
  cn,
  manipulateLinks,
  getOptions,
  getColumns,
  CustomActiveDonut,
} from 'bento-components';
import globalData from '../../bento/siteWideConfig';
import {
  pageTitle, table, externalLinkIcon,
  programDetailIcon, breadCrumb, aggregateCount,
  pageSubTitle, leftPanel, rightPanel,
} from '../../bento/programDetailData';
import StatsView from '../../components/Stats/StatsView';
import { Typography } from '../../components/Wrappers/Wrappers';
import {
  singleCheckBox, setSideBarToLoading, setDashboardTableLoading,
} from '../dashboardTab/store/dashboardReducer';
import CustomBreadcrumb from '../../components/Breadcrumb/BreadcrumbView';
import Widget from '../../components/Widgets/WidgetView';
import colors from '../../utils/colors';

const ProgramDetailView = ({ classes, data, theme }) => {
  const programData = data.programDetail;

  const redirectTo = () => {
    setSideBarToLoading();
    setDashboardTableLoading();
    singleCheckBox([{
      datafield: 'programs',
      groupName: 'Program',
      isChecked: true,
      name: programData.program_acronym,
      section: 'Filter By Cases',
    }]);
  };

  const redirectToArm = (programArm) => {
    setSideBarToLoading();
    setDashboardTableLoading();
    singleCheckBox([{
      datafield: 'studies',
      groupName: 'Arm',
      isChecked: true,
      name: `${programArm.rowData[0]}: ${programArm.rowData[1]}`,
      section: 'Filter By Cases',
    }]);
  };

  const stat = {
    numberOfPrograms: 1,
    numberOfStudies: programData.num_studies !== undefined ? programData.num_studies : 'undefined',
    numberOfSubjects: programData.num_participants !== undefined ? programData.num_participants : 'undefined',
    numberOfSamples: programData.num_samples !== undefined ? programData.num_samples : 'undefined',
    numberOfLabProcedures: programData.num_lab_procedures !== undefined ? programData.num_lab_procedures : 'undefined',
    numberOfFiles: programData.num_files !== undefined ? programData.num_files : 'undefined',
    numberOfDiseaseSites: programData.num_disease_sites !== undefined ? programData.num_disease_sites : 'undefined',

  };

  const breadCrumbJson = [
    {
      name: 'Home',
      to: '/home',
      isALink: true,
    },
    {
      name: `${breadCrumb.label}`,
      to: `${breadCrumb.link}`,
      isALink: true,
    },
    {
      name: programData.program,
      isALink: false,
    },
  ];

  const updatedAttributesData = manipulateLinks(leftPanel.attributes);

  return (
    <>
      <StatsView data={stat} />
      <div className={classes.breadCrumb}>
        <CustomBreadcrumb data={breadCrumbJson} />
      </div>
      <div className={classes.container}>
        <div className={classes.header}>
          <div className={classes.logo}>
            <img
              src={programDetailIcon.src}
              alt={programDetailIcon.alt}
            />

          </div>
          <div className={classes.headerTitle}>
            <div className={classes.headerMainTitle} id="program_detail_title">
              <span>
                {' '}
                {pageTitle.label}
                <span>
                  {' '}
                  {' '}
                  {programData[pageTitle.dataField]}
                </span>
              </span>
            </div>
            <div className={cn(classes.headerMSubTitle, classes.headerSubTitleCate)}>
              <span id="program_detail_subtile">
                {' '}
                {programData[pageSubTitle.dataField]}
              </span>

            </div>
          </div>

          {aggregateCount.display ? (
            <div className={classes.headerButton}>
              <span className={classes.headerButtonLinkSpan}>
                <Link
                  className={classes.headerButtonLink}
                  to={(location) => ({ ...location, pathname: `${aggregateCount.link}` })}
                  onClick={() => redirectTo()}
                >
                  {' '}
                  <span className={classes.headerButtonLinkText}>{aggregateCount.labelText}</span>
                  <span className={classes.headerButtonColumn}>{': '}</span>
                  <span className={classes.headerButtonLinkNumber} id="program_detail_header_file_count">

                    {programData[aggregateCount.dataField]}

                  </span>
                </Link>
              </span>
            </div>
          ) : ''}
        </div>

        <div className={classes.detailContainer}>

          <Grid container spacing={5}>
            <Grid item lg={7} sm={6} xs={12} container>
              <Grid container spacing={4} direction="row" className={classes.detailContainerLeft}>
                {updatedAttributesData.slice(0, 6).map((attribute, index) => (
                  <Grid item xs={12}>
                    <div>
                      {
                      attribute.internalLink
                        ? (
                          <div>
                            <span className={classes.detailContainerHeader}>{attribute.label}</span>
                            <div>
                              <span className={classes.content}>
                                {' '}
                                <Link
                                  className={classes.link}
                                  to={`${attribute.actualLink}${programData[updatedAttributesData[attribute.actualLinkId].dataField]}`}
                                >
                                  {programData[attribute.dataField]}
                                </Link>
                                {' '}
                              </span>
                            </div>
                          </div>
                        )
                        : attribute.externalLink
                          ? (
                            <div>
                              <span
                                className={classes.detailContainerHeader}
                              >
                                {attribute.label}
                              </span>
                              <div>
                                <span className={classes.content}>
                                  {' '}
                                  <a
                                    href={programData[attribute.dataField]}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={classes.link}
                                  >
                                    {programData[attribute.dataField]}
                                  </a>
                                  <img
                                    src={externalLinkIcon.src}
                                    alt={externalLinkIcon.alt}
                                    className={classes.externalLinkIcon}
                                  />
                                  {' '}
                                </span>
                              </div>
                            </div>
                          )
                          : attribute.internalLinkToLabel
                            ? (
                              <div>
                                <span
                                  className={classes.detailContainerHeaderLink}
                                >
                                  <Link className={classes.link} href={`${programData[attribute.dataField]}`} rel="noopener noreferrer">{attribute.label}</Link>
                                </span>
                              </div>
                            )
                            : attribute.externalLinkToLabel
                              ? (
                                <div>
                                  <span
                                    className={classes.detailContainerHeaderLink}
                                  >
                                    <Link className={classes.link} href={`${programData[attribute.dataField]}`} target="_blank" rel="noopener noreferrer">{attribute.label}</Link>
                                    <img
                                      src={externalLinkIcon.src}
                                      alt={externalLinkIcon.alt}
                                      className={classes.externalLinkIcon}
                                    />
                                  </span>
                                </div>
                              )
                              : (
                                <div>
                                  <span
                                    className={classes.detailContainerHeader}
                                    id={`program_detail_left_section_title_${index + 1}`}
                                  >
                                    {attribute.label}
                                  </span>
                                  <div>
                                    <span className={classes.content} id={`program_detail_left_section_description_${index + 1}`}>
                                      {' '}
                                      {programData[attribute.dataField]}
                                      {' '}
                                    </span>
                                  </div>
                                </div>
                              )
}
                    </div>
                  </Grid>
                ))}

              </Grid>
            </Grid>

            <Grid
              item
              lg={5}
              sm={6}
              xs={12}
            >
              <Grid container spacing={16} direction="row" className={classes.detailContainerRight}>
                { rightPanel.widget[0].display ? (
                  <Grid
                    item
                    xs={12}
                    className={classes.marginTopN37}
                  >
                    <Widget
                      title={rightPanel.widget[0].label}
                      upperTitle
                      bodyClass={classes.fullHeightBody}
                      className={classes.card}
                      color={theme.palette.dodgeBlue.main}
                      titleClass={classes.widgetTitle}
                      noPaddedTitle
                    >
                      <CustomActiveDonut
                        data={programData[rightPanel.widget[0].dataField] || []}
                        titleText="Participants"
                        width={400}
                        height={225}
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
                  </Grid>
                ) : ''}
                { rightPanel.participants[0].display ? (
                  <Grid item xs={12}>
                    <div className={classes.fileContainer}>
                      <span
                        className={classes.detailContainerHeader}
                      >
                        {rightPanel.participants[0].label}
                      </span>
                      <Widget
                        title=""
                        upperTitle
                        bodyClass={classes.fullHeightBody}
                        className={classes.card}
                        color={theme.palette.dodgeBlue.main}
                        titleClass={classes.widgetTitle}
                        noPaddedTitle
                      >
                        <div className={classes.fileContent}>
                          <div className={classes.blockCenter}>
                            <div className={classes.fileIcon}>
                              <img
                                src={rightPanel.participants[0].fileIconSrc}
                                alt={rightPanel.participants[0].fileIconAlt}
                              />
                            </div>
                            <div className={classes.participantsCount} id="program_detail_participants_count">
                              {programData[rightPanel.participants[0].dataField]}
                            </div>
                          </div>
                        </div>
                      </Widget>
                    </div>
                  </Grid>
                ) : ''}
                { rightPanel.files[0].display ? (
                  <Grid item xs={12}>
                    <div className={classes.fileContainer}>
                      <span
                        className={classes.detailContainerHeader}
                      >
                        {rightPanel.files[0].label}
                      </span>
                      <Widget
                        title=""
                        upperTitle
                        bodyClass={classes.fullHeightBody}
                        className={classes.card}
                        color={theme.palette.dodgeBlue.main}
                        titleClass={classes.widgetTitle}
                        noPaddedTitle
                      >
                        <div className={classes.fileContent}>
                          <div className={classes.blockCenter}>
                            <div className={classes.fileIcon}>
                              <img
                                src={rightPanel.files[0].fileIconSrc}
                                alt={rightPanel.files[0].fileIconAlt}
                              />
                            </div>
                            <div className={classes.fileCount} id="program_detail_file_count">
                              {programData[rightPanel.files[0].dataField]}
                            </div>
                          </div>
                        </div>
                      </Widget>
                    </div>
                  </Grid>
                ) : ''}
              </Grid>
            </Grid>

          </Grid>
        </div>
      </div>
      { table.display ? (
        <div id="table_program_detail" className={classes.tableContainer}>

          <div className={classes.tableDiv}>
            <div className={classes.tableTitle}>
              <span className={classes.tableHeader}>{table.title}</span>
            </div>
            <Grid item xs={12}>
              <Grid container spacing={8}>
                <Grid item xs={12}>
                  <Typography>
                    <CustomDataTable
                      data={data.programDetail[table.dataField]}
                      columns={getColumns(table, classes, data, externalLinkIcon, '/data', redirectToArm, '', globalData.replaceEmptyValueWith)}
                      options={getOptions(table, classes)}
                    />
                  </Typography>
                </Grid>
                <Grid item xs={8}>
                  <Typography />
                </Grid>
              </Grid>
            </Grid>
          </div>
        </div>
      ) : ''}
    </>
  );
};

const styles = (theme) => ({
  a: {
    color: 'red',
  },
  firstColumn: {
    maxWidth: '45%',
  },
  secondColumn: {
    maxWidth: '30%',
  },
  thirdColumn: {
    maxWidth: '25%',
  },
  widgetTitle: {
    color: '#0296c9',
    textTransform: 'uppercase',
    fontFamily: 'Lato !important',
    fontWeight: '500 !important',
    fontSize: '17px !important',
    letterSpacing: '0.025em',
  },
  borderLeft: {
    borderLeft: '#81A6BA 1px solid',
    paddingLeft: '25px !important',
  },
  link: {
    textDecoration: 'none',
    fontWeight: 'bold',
    color: '#900F89',
    '&:hover': {
      textDecoration: 'underline',
      textUnderlineOffset: '2.5px',
    },
  },
  paddingLeft8: {
    paddingLeft: '8px',
  },
  paddingBottm17: {
    paddingBottm: '17px',
  },
  container: {
    paddingTop: '32px',
    fontFamily: 'Nunito',
    paddingLeft: '52px',
    paddingRight: '52px',
    background: '#FFFF',
  },
  content: {
    fontSize: '15px',
    fontFamily: 'Nunito',
    lineHeight: '14px',
  },
  warning: {
    color: theme.palette.warning.main,
  },
  paper: {
    textAlign: 'center',
  },
  fakeToolbar: {
    ...theme.mixins.toolbar,
  },
  root: {
    fontFamily: theme.custom.fontFamily,
    fontSize: '9px',
    letterSpacing: '0.025em',
    color: '#000',
    background: '#f3f3f3',
  },
  header: {
    paddingLeft: '21px',
    paddingRight: '35px',
    borderBottom: '#9FD8F0 10px solid',
    height: '80px',
    maxWidth: '1340px',
    margin: 'auto',
  },
  headerTitle: {
    margin: 'auto',
    float: 'left',
    marginLeft: '90px',
    marginTop: '12px',
    width: 'calc(100% - 265px)',
  },
  headerMainTitle: {
    '& > span': {
      fontWeight: '300',
      letterSpacing: '0.017em',
    },

    '& > span > span': {
      fontWeight: 'bold',
      letterSpacing: '0.025em',
    },
    fontFamily: 'Inter',
    letterSpacing: '0.025em',
    color: '#0E6292 ',
    fontSize: '26px',
    lineHeight: '24px',
    paddingLeft: '0px',

  },
  headerSubTitleCate: {
    color: '#0B4E75',
    fontWeight: '300',
    fontFamily: 'Nunito',
    textTransform: 'uppercase',
    letterSpacing: '0.023em',
    fontSize: '16px',
    overflow: 'hidden',
    lineHeight: '24px',
    paddingLeft: '2px',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    // paddingRight: '200px',
  },
  headerSubTitleContent: {
    color: '#000000',
    fontWeight: 'bold',
    fontFamily: theme.custom.fontFamilyRaleway,
    textTransform: 'uppercase',
    letterSpacing: '0.023em',
    fontSize: '14px',

  },
  headerMSubTitle: {
    paddingTop: '3px',
  },
  breadCrumb: {
    // height: '11px',
    // letterSpacing: 10px;
    // line-height: 29px;
    padding: '16px 52px 0px 52px',
  },
  headerButton: {
    fontFamily: theme.custom.fontFamily,
    float: 'right',
    marginTop: '15px',
    width: '182px',
    height: '33px',
    background: '#F6F4F4',
    textAlign: 'center',
    marginRight: '-20px',

  },
  headerButtonLinkSpan: {
    fontFamily: theme.custom.fontFamily,
    height: '50px',
    background: '#F5F3EE',
    width: '200px',
    fontSize: '8pt',
  },
  headerButtonLinkText: {
    fontFamily: theme.custom.fontFamily,
    color: '#7747FF',
    fontSize: '8pt',
    textTransform: 'uppercase',
  },
  headerButtonColumn: {
    color: '#000000',
  },
  headerButtonLinkNumber: {
    color: '#000000',
    fontFamily: theme.custom.fontFamily,
    borderBottom: 'solid #6690AC',
    lineHeight: '30px',
    paddingBottom: '3px',
    margin: '0 4px',
    fontSize: '8pt',
  },
  logo: {
    position: 'absolute',
    float: 'left',
    marginLeft: '-23px',
    marginTop: '-12px',
    width: '107px',
    filter: 'drop-shadow(-3px 2px 6px rgba(27,28,28,0.29))',
  },
  detailContainer: {
    maxWidth: '1340px',
    margin: 'auto',
    paddingTop: '8px',
    paddingLeft: '5px',
    fontFamily: theme.custom.fontFamily,
    letterSpacing: '0.014em',
    color: '#000000',
    size: '12px',
    lineHeight: '23px',
    height: '516px',

  },
  detailContainerHeader: {
    textTransform: 'uppercase',
    fontFamily: 'Inter',
    fontSize: '17px',
    letterSpacing: '0.025em',
    color: '#0296C9',
  },
  detailContainerHeaderLink: {
    fontFamily: 'Lato',
    fontSize: '14px',
    letterSpacing: '0.025em',
    color: '#900F89',
  },
  detailContainerBottom: {
    borderTop: '#81a6b9 1px solid',
    marginTop: '13px',
    padding: ' 35px 0 63px 2px !important',
  },
  detailContainerLeft: {
    display: 'block',
    padding: '5px  20px 5px 32px !important',
    minHeight: '500px',
    maxHeight: '500px',
    overflowY: 'auto',
    overflowX: 'hidden',
    width: '103.9%',
    margin: '0px -8px -5px -21px',
  },
  borderRight: {
    borderRight: '#81a6b9 1px solid',
  },
  detailContainerRight: {
    padding: '5px 36px 5px 36px !important',
    minHeight: '500px',
    maxHeight: '500px',
    overflowY: 'auto',
    overflowX: 'hidden',
    height: '500px',
    width: '105%',
    borderLeft: '1px solid #81A6BA',
    borderRight: '1px solid #81A6BA',
    marginLeft: '-26px',
  },

  tableContainer: {
    background: '#f3f3f3',
  },
  tableHeader: {
    paddingLeft: '0px',
  },
  paddingTop12: {
    paddingTop: '12px',
  },
  tableDiv: {
    maxWidth: '1340px',
    margin: 'auto',
    paddingTop: '50px',
    paddingLeft: '0px',
  },

  headerButtonLink: {
    textDecoration: 'none',
    lineHeight: '14px',
    fontSize: '12px',
    fontWeight: 'bold',
    color: '#c32c2e',
    '&:hover': {
      textDecoration: 'underline',
      textUnderlineOffset: '2.5px',
    },
  },
  button: {
    borderRadius: '22px',
    padding: '0 22px',
    width: '150px',
    height: '35px',
    lineHeight: '14px',
    fontSize: '10px',
    color: '#ffffff',
    textTransform: 'uppercase',
    backgroundColor: '#ff8a00',
    fontFamily: theme.custom.fontFamily,
    '&:hover': {
      backgroundColor: '#ff8a00',
    },
  },
  detailContainerItems: {
    paddingTop: '7px',
    paddingLeft: '7px',
  },
  detailContainerItem: {
    paddingTop: '15px !important',
  },
  title: {
    color: '#0296c9',
    fontFamily: theme.custom.fontFamily,
    fontSize: '12px',
    letterSpacing: '0.017em',
    fontWeight: '600',
    textTransform: 'uppercase',
  },
  tableTitle: {
    textTransform: 'uppercase',
    fontFamily: 'Inter',
    fontSize: '17px',
    letterSpacing: '0.025em',
    color: '#0296c9',
    paddingBottom: '20px',
  },
  fileContainer: {
    paddingTop: '15px',
  },
  fileContent: {
    marginTop: '24px',
    backgroundColor: '#F3F3F3',
    borderRadius: '50%',
    height: '162px',
    width: '162px',
  },
  blockCenter: {
    width: '42%',
    margin: '0 auto',
  },
  fileIcon: {
    '& img': {
      width: '60px',
      height: '60px',
      marginTop: '30px',
      marginLeft: '4px',
    },
  },
  participantsCount: {
    lineHeight: '31.7px',
    fontSize: '30px',
    color: '#0B7562',
    fontWeight: '600',
    borderBottom: '#0B7562 solid 4px',
    fontFamily: 'Oswald',
    width: 'max-content',
    margin: '0 auto',
    paddingBottom: '8px',
  },
  fileCount: {
    lineHeight: '31.7px',
    fontSize: '30px',
    color: '#D86B01',
    fontWeight: '600',
    borderBottom: '#D86B01 solid 4px',
    fontFamily: 'Oswald',
    width: 'max-content',
    margin: '0 auto',
    paddingBottom: '8px',
  },
  paddingTop32: {
    paddingTop: '36px !important',
  },
  marginTopN37: {
    marginTop: '15px',
  },
  tableCell1: {
    // paddingLeft: '25px',
    width: '200px',
  },
  tableCell2: {
    // width: '370px',
  },
  tableCell3: {
    // width: '370px',
  },
  tableCell4: {
    width: '160px',
  },
  tableCell5: {
    width: '160px',
  },
  externalLinkIcon: {
    width: '14px',
    verticalAlign: 'sub',
    marginLeft: '4px',
  },
});

export default withStyles(styles, { withTheme: true })(ProgramDetailView);
