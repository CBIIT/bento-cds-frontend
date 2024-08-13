import gql from 'graphql-tag';
import { cellTypes } from '@bento-core/table';
import { STATIC_CONTENT } from '../assets/staticContent';

// --------------- Page title configuration --------------
const pageTitle = {
  label: 'Program:',
  dataField: 'program',
};

const pageSubTitle = {
  dataField: 'program_name',
};

const breadCrumb = {
  label: 'All Programs',
  link: '/programs',
};

// --------------- Aggregated count configuration --------------
const aggregateCount = {
  labelText: 'Participants',
  dataField: 'num_participants',
  link: '/data',
  display: false,
};

// --------------- Icons configuration --------------
// Ideal size for programDetailIcon is 107x107 px
// Ideal size for externalLinkIcon is 16x16 px
const programDetailIcon = {
  src: STATIC_CONTENT.icons.PROGRAM_ICON_IMAGE,
  alt: 'CDS program logo',
};

const externalLinkIcon = {
  src: STATIC_CONTENT.icons.EXTERNAL_LINK_ICON_SVG,
  alt: 'External link icon',
};

// --------------- Left Pannel configuration --------------
// A maximum of 6 leftPanelattributes are allowed
const leftPanel = {
  attributes: [
    {
      dataField: 'program',
      label: 'Program',
    },
    {
      dataField: 'program_name',
      label: 'Program Name',
    },
    // {
    //   dataField: 'program_id',
    //   label: 'Program Id',
    // },
    {
      dataField: 'program_short_description',
      label: 'Program Description',
    },
    {
      dataField: 'institution_name',
      label: 'Institution',
    },
    {
      dataField: 'program_url',
      label: 'Program Website',
      externalLink: true,
      actualLink: 'program_url',

    },
  ],
};

// --------------- Right Pannel configuration --------------
// Ideal size for fileIconSrc is 66x53 px
const rightPanel = {
  widget: [
    {
      dataField: 'study_participants',
      label: 'Studies',
      display: false,
    },
  ],
  participants: [
    {
      dataField: 'num_participants',
      label: 'Number of Participants',
      fileIconSrc: STATIC_CONTENT.icons.PROGRAM_DETAIL_PARTICIPANT_COUNT_ICON_SVG,
      fileIconAlt: 'Number of participants icon',
      display: true,
    },
  ],
  files: [
    {
      dataField: 'num_files',
      label: 'Number of files',
      fileIconSrc: STATIC_CONTENT.icons.PROGRAM_DETAIL_FILE_COUNT_ICON_SVG,
      fileIconAlt: 'Number of files icon',
      display: true,
    },
  ],
};

// --------------- Table Custom Types configuration --------------
export const customTypes = {
  DASHBOARD_LINK_FROM_LIST: 'dashboardLinkFromList',
  NUMBER_FORMAT_VIEW: 'numberFormatView'
}

// --------------- Table configuration --------------

const table = {
  // Set 'display' to false to hide the table entirely
  name: 'studies',
  queryKey: 'programDetail',
  dataKey: 'accession',
  tableID: 'studies_table',
  display: true,
  // Table title
  title: 'STUDIES',
  // Field name for table data, need to be updated only when using a different GraphQL query
  dataField: 'studies',
  // Value must be one of the 'field' in columns
  defaultSortField: 'study_name',
  // 'asc' or 'desc'
  defaultSortDirection: 'asc',
  // Set 'selectableRows' to true to show the row selection
  selectableRows: false,
  // A maximum of 10 columns are allowed
  columns: [
    {
      dataField: 'accession',
      header: 'Study',
      tooltipText: 'Sort by Study',
      cellType: cellTypes.LINK,
      linkAttr: {
        rootPath: '/study',
        pathParams: ['accession']
      },
      display: true,
    },
    {
      dataField: 'study_version',
      header: 'Study Version',
      tooltipText: 'Sort by Study Version',
      cellType: cellTypes.CUSTOM_ELEM,
      customType: customTypes.DASHBOARD_LINK_FROM_LIST,
      facet: 'phs_accession',
      facetValue: 'accession',
      display: true,
    },
    {
      dataField: 'study_name',
      header: 'Study Name',
      tooltipText: 'Sort by Study Name',
      display: true,
    },
    {
      dataField: 'study_data_types',
      header: 'Data Types',
      tooltipText: 'Sort by Data Types',
      display: true,
    },
    {
      dataField: 'study_access',
      header: 'Study Access',
      tooltipText: 'Sort by Study Access',
      display: true,
    },
    {
      dataField: 'num_participants',
      header: 'Number of Participants',
      tooltipText: 'Sort by Number of Participants',
      display: true,
      cellType: cellTypes.CUSTOM_ELEM,
    },
    {
      dataField: 'num_files',
      header: 'Number of Files',
      tooltipText: 'Sort by Number of Files',
      display: true,
      cellType: cellTypes.CUSTOM_ELEM,
    },
  ],
};

// --------------- GraphQL query - Retrieve program details --------------
const GET_PROGRAM_DETAIL_DATA_QUERY = gql`
query programDetailQuery($program_name: String!){
  programDetail(program_name:$program_name){
      program
      program_name
      program_url
      program_short_description
      num_studies
      num_participants
      num_files
      num_samples
      num_disease_sites
      study_participants{
          group
          subjects
      }
      studies{
          accession
          study_access
          study_version
          study_data_types
          study_name
          study_description
          short_description
          num_participants
          num_samples
          num_files
      }
  }
  
}`;

export {
  pageTitle,
  pageSubTitle,
  aggregateCount,
  programDetailIcon,
  leftPanel,
  rightPanel,
  externalLinkIcon,
  breadCrumb,
  GET_PROGRAM_DETAIL_DATA_QUERY,
  table,
};
