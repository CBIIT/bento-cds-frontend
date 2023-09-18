import gql from 'graphql-tag';

// --------------- Page title configuration --------------
const pageTitle = {
  label: 'Study :',
  dataField: 'study_name',
};

const pageSubTitle = {
  //dataField: 'study_name',
};

const breadCrumb = {
  label: 'All Studies',
  link: '/studies',
};

// --------------- Aggregated count configuration --------------
const aggregateCount = {
  labelText: 'Study Participants',
  dataField: 'numberOfSubjects',
  link: '/explore',
  display: true,
};

// --------------- Icons configuration --------------
// Ideal size for studyDetailIcon is 107x107 px
// Ideal size for externalLinkIcon is 16x16 px
const studyDetailIcon = {
  src: 'https://raw.githubusercontent.com/CBIIT/datacommons-assets/main/cds/icons/studiesIcon.png',
  alt: 'CDS study logo',
};

const externalLinkIcon = {
  src: 'https://raw.githubusercontent.com/CBIIT/datacommons-assets/main/bento/images/icons/svgs/externalLinkIcon.svg',
  alt: 'External link icon',
};

// --------------- Left Pannel configuration --------------
// A maximum of 6 leftPanelattributes are allowed
const leftPanel = {
  attributes: [
    {
      dataField: 'phs_accession',
      label: 'Study Accession',
    },
    {
      dataField: 'study_description',
      label: 'Study Description',
    },
  ],
};

// --------------- Right Pannel configuration --------------
// Ideal size for fileIconSrc is 66x53 px
const rightPanel = {
  attributes: [
    {
      dataField: 'numberOfSubjects',
      label: 'Number Of Participants',
    },
    {
      dataField: 'numberOfFiles',
      label: 'Number Of Files',
    },
    {
      dataField: 'data_types',
      label: 'Data Types',
    },
    {
      dataField: 'study_external_url',
      label: 'External Resources',
      externalLink: true,
      actualLink: 'study_external_url',
    }
  ],
};

// --------------- Table configuration --------------
const table = {
  // Set 'display' to false to hide the table entirely
  display: true,
  // Table title
  title: 'ARMS',
  // Field name for table data, need to be updated only when using a different GraphQL query
  dataField: 'studies',
  // Value must be one of the 'field' in columns
  defaultSortField: 'study_acronym',
  // 'asc' or 'desc'
  defaultSortDirection: 'asc',
  // Set 'selectableRows' to true to show the row selection
  selectableRows: false,
  // A maximum of 10 columns are allowed
  columns: [
    {
      dataField: 'study_acronym',
      header: 'Arm',
      link: '/arm/{study_acronym}'
    },
    {
      dataField: 'study_name',
      header: 'Arm Name',
    },
    {
      dataField: 'study_full_description',
      header: 'Arm Description',
    },
    {
      dataField: 'study_type',
      header: 'Arm Type',
    },
    {
      dataField: 'num_subjects',
      header: 'Associated Cases',
    },
  ],
};

// --------------- GraphQL query - Retrieve study details --------------
const GET_PROGRAM_DETAIL_DATA_QUERY = gql`
query studyDetail($phs_accession: String) {
  studyDetail(phs_accession: $phs_accession) {
    study_name
    phs_accession
    study_acronym
    study_external_url
    data_types
    study_description
    numberOfSubjects
    numberOfSamples
    numberOfDiseaseSites
    numberOfFiles
  }
}
`;

export {
  pageTitle,
  pageSubTitle,
  aggregateCount,
  studyDetailIcon,
  leftPanel,
  rightPanel,
  externalLinkIcon,
  breadCrumb,
  GET_PROGRAM_DETAIL_DATA_QUERY,
  table,
};