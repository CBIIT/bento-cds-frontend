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
    Wrapper
  } from '@bento-core/paginated-table';
import clsx from 'clsx';
import {
  pageTitle, table, externalLinkIcon,
  studyDetailIcon, breadCrumb, aggregateCount,
  pageSubTitle, leftPanel, rightPanel, GET_MY_FILE_OVERVIEW_QUERY
} from '../../bento/studyDetailData';
import StatsView from '../../components/Stats/StatsView';
import CustomBreadcrumb from '../../components/Breadcrumb/BreadcrumbView';
import { onClearAllAndSelectFacetValue } from '../dashTemplate/sideBar/BentoFilterUtils';
import { themeConfig, wrapperThemConfig } from './tableConfig/Theme';
import { footerConfig } from './tableConfig/Wrapper';


const initTblState = (initailState) => ({
    ...initailState,
    title: table.name,
    query: GET_MY_FILE_OVERVIEW_QUERY,
    paginationAPIField: table.dataField,
    columns: table.columns,
    selectedRows: [],
    tableMsg: table.tableMsg,
    sortBy: table.defaultSortField,
    sortOrder: table.defaultSortDirection,
    rowsPerPage: 10,
    dataKey: table.dataKey,
    page: 0,
    extendedViewConfig: {
      pagination: true,
    },
  })

const StudyView = ({ classes, data, theme }) => {
  const studyData = data.studyDetail;


  
  const stat = {
    numberOfPrograms: 1,
    numberOfStudies: 1,
    numberOfSubjects: studyData.numberOfSubjects !== undefined ? studyData.numberOfSubjects : 'undefined',
    numberOfSamples: studyData.numberOfSamples !== undefined ? studyData.numberOfSamples : 'undefined',
    numberOfDiseaseSites: studyData.numberOfDiseaseSites !== undefined ? studyData.numberOfDiseaseSites : 'undefined',
    numberOfFiles: studyData.numberOfFiles !== undefined ? studyData.numberOfFiles : 'undefined',
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
      name: studyData.phs_accession,
      isALink: false,
    },
  ];

  const updatedAttributesData = manipulateLinks(leftPanel.attributes);
  const updatedAttributesDataRight = manipulateLinks(rightPanel.attributes);


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
              src={studyDetailIcon.src}
              alt={studyDetailIcon.alt}
            />

          </div>
          <div className={classes.headerTitle}>
            <div className={classes.headerMainTitle} id="study_detail_title">
              <span>
                {' '}
                {pageTitle.label}
                <span>
                  {' '}
                  {' '}
                  {studyData[pageTitle.dataField]}
                </span>
              </span>
            </div>
            <div className={clsx(classes.headerMSubTitle, classes.headerSubTitleCate)}>
              <span id="study_detail_subtile">
                {' '}
                {studyData[pageSubTitle.dataField]}
              </span>

            </div>
          </div>

          {aggregateCount.display ? (
                <div className={classes.headerButton}>
                <span className={classes.headerButtonLinkSpan}>
                    <Link
                    className={classes.headerButtonLink}
                    to={(location) => ({ ...location, pathname: `${aggregateCount.link}` })}
                    onClick={()=>onClearAllAndSelectFacetValue('studies', studyData.study_name)}
                    >
                    {' '}
                    <span className={classes.headerButtonLinkText}>{aggregateCount.labelText}</span>
                    {aggregateCount.displayCount?
                    <><span className={classes.headerButtonColumn}>{': '}</span>
                    <span className={classes.headerButtonLinkNumber} id="study_detail_header_file_count">
                      {studyData[aggregateCount.dataField]}
                    </span></>
                    : ''}
                    </Link>
                </span>
                </div>
          ) : ''}
        </div>

        <div className={classes.detailContainer}>

          <Grid container spacing={5}>
            <Grid item lg={7} sm={6} xs={12} container className={classes.outerContainer}>
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
                                  to={`${attribute.actualLink}${studyData[updatedAttributesData[attribute.actualLinkId].dataField]}`}
                                >
                                  {studyData[attribute.dataField]}
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
                                    href={`${attribute.actualLink}${studyData[updatedAttributesData[attribute.actualLinkId].dataField]}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={classes.link}
                                  >
                                    {studyData[attribute.dataField]}
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
                                  <a href={`${studyData[attribute.dataField]}`} rel="noopener noreferrer">{attribute.label}</a>
                                </span>
                              </div>
                            )
                            : attribute.externalLinkToLabel
                              ? (
                                <div>
                                  <span
                                    className={classes.detailContainerHeaderLink}
                                  >
                                    <a href={`${studyData[attribute.dataField]}`} target="_blank" rel="noopener noreferrer">{attribute.label}</a>
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
                                    id={`study_detail_left_section_title_${index + 1}`}
                                  >
                                    {attribute.label}
                                  </span>
                                  <div>
                                    <span className={classes.content} id={`study_detail_left_section_description_${index + 1}`}>
                                      {' '}
                                      {studyData[attribute.dataField]}
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
              className = {classes.outerContainer}
            >
              <Grid container spacing={16} direction="row" className={classes.detailContainerRight}>
                {//Mirror the right panel attributes to the left panel
                }
                {updatedAttributesDataRight.slice(0, 6).map((attribute, index) => (
                    <Grid item xs={12} className={classes.rightAttributes}>
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
                                                        to={`${attribute.actualLink}${studyData[updatedAttributesDataRight[attribute.actualLinkId].dataField]}`}
                                                    >
                                                        {studyData[attribute.dataField]}
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
                                                href={`${studyData[attribute.actualLink]}`}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className={classes.link}
                                              >
                                                {studyData[attribute.dataField]}
                                              </a>
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
                                                <a href={`${studyData[attribute.dataField]}`} rel="noopener noreferrer">{attribute.label}</a>
                                            </span>
                                        </div>
                                    )
                                : attribute.externalLinkToLabel
                                    ? (
                                        <div>
                                            <span
                                                className={classes.detailContainerHeaderLink}
                                            >
                                                <a href={`${studyData[attribute.dataField]}`} target="_blank" rel="noopener noreferrer">{attribute.label}</a>
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
                                            id={`study_detail_right_section_title_${index + 1}`}
                                        >   
                                            {attribute.label}
                                        </span>
                                        <div>
                                            <span className={classes.content} id={`study_detail_right_section_description_${index + 1}`}>
                                                {' '}
                                                {studyData[attribute.dataField]}
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

          </Grid>
        </div>
      </div>
      { table.display ? (
        <div id="table_study_detail" className={classes.tableContainer}>

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
                                themeConfig={themeConfig}
                                tblRows={data[table.dataField]}
                                totalRowCount={studyData.numberOfFiles}
                                activeTab={true}
                                queryVariables={{
                                  phs_accession: studyData.phs_accession,
                                }}
                            />
                            <Wrapper
                                wrapConfig={footerConfig}
                                customTheme={wrapperThemConfig}
                                classes={classes}
                                section={table.name}
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
    color: '#DC762F',
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'underline',
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
    fontSize: '14px',
    fontFamily: theme.custom.fontFamily,
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
    borderBottom: '#F0BDEE 10px solid',
    height: '80px',
    maxWidth: '1340px',
    margin: 'auto',
  },
  headerTitle: {
    margin: 'auto',
    float: 'left',
    marginLeft: '85px',
    marginTop: '10px',
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
    fontFamily: 'Lato',
    letterSpacing: '0.025em',
    color: '#B431B0 ',
    fontSize: '26px',
    lineHeight: '24px',
    paddingLeft: '0px',

  },
  headerSubTitleCate: {
    color: '#00B0BD',
    fontWeight: '300',
    fontFamily: 'Poppins',
    textTransform: 'uppercase',
    letterSpacing: '0.023em',
    fontSize: '15px',
    overflow: 'hidden',
    lineHeight: '24px',
    paddingLeft: '2px',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    paddingRight: '200px',
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
    backgroundColor: '#FFF',
    marginLeft: '85px',
    paddingTop: '19px',
  },
  headerButton: {
    float: 'right',
    width: '180px',
    height: '39px',
    marginTop: '20px',
    background: '#FFF',
    boxShadow: '0px 8px 15px rgba(0, 0, 0, 0.15)',
  },
  headerButtonLinkSpan: {
    marginLeft: '14px',
    marginTop: '8px',
    display: 'block',
    boxSizing: 'border-box',
    whiteSpace: 'nowrap',
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
  headerButtonColumn: {
    color: '#000000',
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
  logo: {
    position: 'absolute',
    float: 'left',
    marginLeft: '-23px',
    marginTop: '-21px',
    width: '107px',
    filter: 'drop-shadow(-3px 2px 6px rgba(27,28,28,0.29))',
  },
  detailContainer: {
    maxWidth: '1340px',
    margin: 'auto',
    marginBlockEnd: '24px',
    paddingTop: '24px',
    paddingLeft: '5px',
    fontFamily: theme.custom.fontFamily,
    letterSpacing: '0.014em',
    color: '#000000',
    size: '12px',
    lineHeight: '23px',
    height: '525px',

  },
  detailContainerHeader: {
    textTransform: 'uppercase',
    fontFamily: 'Lato',
    fontSize: '17px',
    letterSpacing: '0.025em',
    color: '#AE6CAB',
  },
  detailContainerHeaderLink: {
    fontFamily: 'Raleway',
    fontSize: '14px',
    letterSpacing: '0.025em',
    color: '#0077E3',
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
  outerContainer: {
    padding: '3px 20px 20px 20px !important',
  },
  detailContainerRight: {
    display: 'block',
    padding: '5px  5px 36px !important',
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
  rightAttributes: {
    padding: '16px',
  },        

  tableContainer: {
    background: '#f3f3f3',
  },
  tableHeader: {
    paddingLeft: '30px',
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
    fontFamily: 'Lato',
    fontSize: '17px',
    letterSpacing: '0.025em',
    color: '#AE6CAB',
    paddingBottom: '20px',
  },
  fileContainer: {
    paddingTop: '4px',
  },
  fileContent: {
    backgroundColor: '#F3F3F3',
    borderRadius: '50%',
    height: '162px',
    width: '162px',
    paddingLeft: '48px',
    marginLeft: '36%',
    marginTop: '25px',
  },
  fileIcon: {
    '& img': {
      width: '163%',
      padding: '21px 120px 0px 0px',
    },
  },
  fileCount: {
    lineHeight: '31.7px',
    fontSize: '30px',
    color: '#7A297D',
    fontWeight: '600',
    borderBottom: '#7A297D solid 5px',
    fontFamily: 'Oswald',
    width: 'max-content',
    padding: '15px 0px 12px 0px',
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

export default withStyles(styles, { withTheme: true })(StudyView);