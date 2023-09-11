import gql from 'graphql-tag';
import { cellTypes } from '@bento-core/table';

// --------------- Icons configuration --------------
// Ideal size for programListingIcon is 100x100 px
// Ideal size for externalLinkIcon is 16x16 px
const studyListingIcon = {
  src: 'https://raw.githubusercontent.com/CBIIT/datacommons-assets/main/cds/icons/studiesIcon.png',
  alt: 'CDS Study logo',
};

const externalLinkIcon = {
  src: 'https://raw.githubusercontent.com/CBIIT/datacommons-assets/main/bento/images/icons/svgs/externalLinkIcon.svg',
  alt: 'External link icon',
};

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
      header: 'Accession',
      tooltipText: 'Sort by Accession',
      cellType: cellTypes.LINK,
      linkAttr: {
        rootPath: '/study',
        pathParams: ['phs_accession']
      },
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
    },
    {
      dataField: 'numberOfFiles',
      header: 'Number of Files',
      tooltipText: 'Sort by Number of Files',
      display: true,
    },
  ],
};

// --------------- GraphQL query - Retrieve program info --------------
const GET_STUDIES_DATA_QUERY = gql`{
  studyList  {
    study_name
    phs_accession
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