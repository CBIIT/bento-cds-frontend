import gql from 'graphql-tag';

// --------------- Icons configuration --------------
// Ideal size for armListingIcon is 100x100 px
// Ideal size for externalLinkIcon is 16x16 px
const armListingIcon = {
  src: 'https://raw.githubusercontent.com/CBIIT/datacommons-assets/main/cds/icons/studiesIcon.png',
  alt: 'CDS Arm logo',
};

const externalLinkIcon = {
  src: 'https://raw.githubusercontent.com/CBIIT/datacommons-assets/main/bento/images/icons/svgs/externalLinkIcon.svg',
  alt: 'External link icon',
};

// --------------- Table configuration --------------
const table = {
  // Set 'display' to false to hide the table entirely
  display: true,
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
      link: '/study/{phs_accession}',
    },
    {
      dataField: 'study_name',
      header: 'Study Name',
    },
    {
      dataField: 'data_type',
      header: 'Data Types',
    },
    {
      dataField: 'numberOfSubjects',
      header: 'Number of Participants',
    },
    {
      dataField: 'numberOfFiles',
      header: 'Number of Files',
    },
  ],
};

// --------------- GraphQL query - Retrieve program info --------------
const GET_STUDIES_DATA_QUERY = gql`{
  studyList  {
    study_name
    phs_accession
    numberOfSubjects
    numberOfFiles
    data_type
}
}
 `;

export {
  armListingIcon,
  externalLinkIcon,
  table,
  GET_STUDIES_DATA_QUERY,
};
