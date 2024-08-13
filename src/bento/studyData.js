import gql from 'graphql-tag';
import { cellTypes } from '@bento-core/table';
import { STATIC_CONTENT } from '../assets/staticContent';

// --------------- Icons configuration --------------
// Ideal size for programListingIcon is 100x100 px
// Ideal size for externalLinkIcon is 16x16 px
const studyListingIcon = {
  src: STATIC_CONTENT.icons.STUDIES_ICON_IMAGE,
  alt: 'CDS Study logo',
};

const externalLinkIcon = {
  src: STATIC_CONTENT.icons.EXTERNAL_LINK_ICON_SVG,
  alt: 'External link icon',
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
  display: true,
  dataKey: 'study_name',
  tableID: 'studies_table',
  // Table title
  title: 'Studies',
  // Field name for table data, need to be updated only when using a different GraphQL query
  dataField: 'studyList',
  // Value must be one of the 'field' in columns
  defaultSortField: 'study_name',
  // 'asc' or 'desc'
  defaultSortDirection: 'asc',
  // Set 'selectableRows' to true to show the row selection
  selectableRows: false,
  // A maximum of 10 columns are allowed
  columns: [
    {
      dataField: 'phs_accession',
      header: 'Study',
      tooltipText: 'Sort by Study',
      cellType: cellTypes.LINK,
      linkAttr: {
        rootPath: '/study',
        pathParams: ['phs_accession']
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
      facetValue: 'phs_accession',
      display: true,
    },
    {
      dataField: 'study_name',
      header: 'Study Name',
      tooltipText: 'Sort by Study Name',
      display: true,
    },
    {
      dataField: 'data_type',
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
      dataField: 'numberOfSubjects',
      header: 'Number of Participants',
      tooltipText: 'Sort by Number of Participants',
      display: true,
      cellType: cellTypes.CUSTOM_ELEM,
    },
    {
      dataField: 'numberOfFiles',
      header: 'Number of Files',
      tooltipText: 'Sort by Number of Files',
      display: true,
      cellType: cellTypes.CUSTOM_ELEM,
    },
  ],
};

// --------------- GraphQL query - Retrieve program info --------------
const GET_STUDIES_DATA_QUERY = gql`{
  studyList  {
    study_name
    phs_accession
    study_version
    study_access
    numberOfSubjects
    numberOfFiles
    data_type
  }
}
 `;

export {
  studyListingIcon,
  externalLinkIcon,
  table,
  GET_STUDIES_DATA_QUERY,
};