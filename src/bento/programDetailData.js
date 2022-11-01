import gql from 'graphql-tag';

// --------------- Page title configuration --------------
const pageTitle = {
  label: 'Program :',
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
  src: 'https://raw.githubusercontent.com/CBIIT/datacommons-assets/main/cds/icons/programIcon.png',
  alt: 'CDS program logo',
};

const externalLinkIcon = {
  src: 'https://raw.githubusercontent.com/CBIIT/datacommons-assets/main/cds/icons/externalLinkIcon.svg',
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
      label: 'External Link to Program',
      externalLinkToLabel: true,
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
      fileIconSrc: 'https://raw.githubusercontent.com/CBIIT/datacommons-assets/main/cds/icons/ProgramDetail.ParticipantCount.svg',
      fileIconAlt: 'Number of participants icon',
      display: true,
    },
  ],
  files: [
    {
      dataField: 'num_files',
      label: 'Number of files',
      fileIconSrc: 'https://raw.githubusercontent.com/CBIIT/datacommons-assets/main/cds/icons/ProgramDetailFileCount.svg',
      fileIconAlt: 'Number of files icon',
      display: true,
    },
  ],
};

// --------------- Table configuration --------------
const table = {
  // Set 'display' to false to hide the table entirely
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
      link: '/study/{accession}',
    },
    {
      dataField: 'study_name',
      header: 'Study Name',
    },
    {
      dataField: 'study_description',
      header: 'Study Description',
    },
    {
      dataField: 'experimental_strategy_and_data_subtypes',
      header: 'Experimental Strategy',
    },
    {
      dataField: 'num_samples',
      header: 'Number Of Samples',
    },
    {
      dataField: 'num_participants',
      header: 'Number Of Participants',
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
          study_name
          study_description
          short_description
          experimental_strategy_and_data_subtypes
          num_participants
          num_samples
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
