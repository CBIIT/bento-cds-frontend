import React from 'react';
import {
  Grid,
  withStyles,
} from '@material-ui/core';
import { Link } from 'react-router-dom';
import {
  manipulateLinks
} from '@bento-core/util';
import { 
  TableContextProvider,
  TableView,
} from '@bento-core/paginated-table';
import clsx from 'clsx';
import {
  pageTitle, table, externalLinkIcon,
  programDetailIcon, breadCrumb, aggregateCount,
  pageSubTitle, leftPanel, rightPanel,
} from '../../bento/programDetailData';
import StatsView from '../../components/Stats/StatsView';
import { Typography } from '../../components/Wrappers/Wrappers';
import CustomBreadcrumb from '../../components/Breadcrumb/BreadcrumbView';
import colors from '../../utils/colors';
import { WidgetGenerator } from '@bento-core/widgets';
import { onClearAllAndSelectFacetValue } from '../dashTemplate/sideBar/BentoFilterUtils';
import { themeConfig } from './tableConfig/Theme';

const initTblState = (initailState) => ({
  ...initailState,
  title: table.name,
  columns: table.columns,
  selectedRows: [],
  tableMsg: table.tableMsg,
  sortBy: table.defaultSortField,
  sortOrder: table.defaultSortDirection,
  rowsPerPage: 10,
  dataKey: table.dataKey,
  page: 0,
})

const ProgramView = ({ classes, data, theme }) => {
  const programData = data.programDetail;

  const widgetGeneratorConfig = {
    theme,
    DonutConfig: {
      colors,
      styles: {
        cellPadding: 0,
        textOverflowLength: 20,
      },
    },
  };

  const { Widget } = WidgetGenerator(widgetGeneratorConfig);

  const stat = {
    numberOfPrograms: 1,
    numberOfStudies: programData.num_studies !== undefined ? programData.num_studies : 'undefined',
    numberOfSubjects: programData.num_participants !== undefined ? programData.num_participants : 'undefined',
    numberOfSamples: programData.num_samples !== undefined ? programData.num_samples : 'undefined',
    numberOfFiles: programData.num_files !== undefined ? programData.num_files : 'undefined',
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
            <div className={clsx(classes.headerMSubTitle, classes.headerSubTitleCate)}>
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
                  onClick={()=>onClearAllAndSelectFacetValue('programs', programData.program_acronym)}
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
                                    href={`${attribute.actualLink}`}
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
                                  <a href={`${programData[attribute.dataField]}`} rel="noopener noreferrer">{attribute.label}</a>
                                </span>
                              </div>
                            )
                            : attribute.externalLinkToLabel
                              ? (
                                <div>
                                  <span
                                    className={classes.detailContainerHeaderLink}
                                  >
                                    <a href={`${programData[attribute.dataField]}`} target="_blank" rel="noopener noreferrer">{attribute.label}</a>
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
                      header={(
                        <Typography
                          colorBrightness="main"
                          size="md"
                          weight="normal"
                          family="Nunito"
                          color={theme.palette.dodgeBlue.main}
                          className={classes.widgetTitle}
                        >
                          {rightPanel.widget[0].label}
                        </Typography>
                      )}
                      bodyClass={classes.fullHeightBody}
                      className={classes.card}
                      customBackGround
                      noPaddedTitle
                      data={programData[rightPanel.widget[0].dataField] || []}
                      chartType="donut"
                      chartTitleLocation="bottom"
                      chartTitleAlignment="center"
                    />
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
                      <div className={classes.fileContent}>
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
                      <div className={classes.fileContent}>
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
            <TableContextProvider>
              <Grid item xs={12}>
                <Grid container spacing={8}>
                  <Grid item xs={12} id={table.tableID}>
                    <TableView
                        initState={initTblState}
                        server={false}
                        themeConfig={themeConfig}
                        tblRows={data[table.queryKey][table.dataField]}
                        totalRowCount={data[table.queryKey][table.dataField].length}
                        activeTab={true}
                      />
                  </Grid>
                </Grid>
              </Grid>
            </TableContextProvider>
          </div>
        </div>
      ) : ''}
    </>
  );
};

const styles = (theme) => ({
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
    paddingTop: '50px',
    fontFamily: theme.custom.fontFamily,
    paddingLeft: '32px',
    paddingRight: '32px',
    background: '#FFFF',
    paddingBottom: '16px',
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
    backgroundColor: '#FFF',
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
    backgroundColor: '#F3F3F3',
    borderRadius: '50%',
    height: '162px',
    width: '162px',
    marginLeft: '36%',
    marginTop: '25px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  fileIcon: {
    '& img': {
      width: '40%',
      padding: '0px 0px 0px 0px',
      margin: '0px 0px 0px 49px',
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
  },
  fileCount: {
    lineHeight: '31.7px',
    fontSize: '30px',
    color: '#D86B01',
    fontWeight: '600',
    borderBottom: '#D86B01 solid 4px',
    fontFamily: 'Oswald',
    width: 'max-content',
  },
  paddingTop32: {
    paddingTop: '36px !important',
  },
  marginTopN37: {
    marginTop: '15px',
  },
  tableCell1: {
    paddingLeft: '25px',
    width: '200px',
  },
  tableCell2: {
    width: '370px',
  },
  tableCell3: {
    width: '370px',
  },
  tableCell4: {
    width: '160px',
  },
  tableCell5: {
    width: '160px',
  },
  externalLinkIcon: {
    width: '16px',
    verticalAlign: 'sub',
    marginLeft: '4px',
  },
});

export default withStyles(styles, { withTheme: true })(ProgramView);
