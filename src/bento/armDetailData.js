import gql from 'graphql-tag';
import { FileOnRowsSelect } from '../utils/fileTable';

// --------------- Header configuration --------------
export const armHeaderLogo = {
  src: 'https://raw.githubusercontent.com/CBIIT/datacommons-assets/main/cds/icons/studiesIcon.png',
  alt: 'cds study logo',
};

// --------------- Tooltip configuration --------------
export const tooltipContent = {
  src: 'https://raw.githubusercontent.com/CBIIT/datacommons-assets/main/cds/icons/infoTooltip.svg',
  alt: 'tooltip icon',
};

// -------------- Case ID area configurations --------------
const header = {
  label: 'Study',
  dataField: 'study_name',
};

// --------------- Data panel configuration --------------
const subsections = [
  // Each object here represents a subsection in the panel
  // A maximum of 6 subsections are allowed
  {
    properties: [
      // Each object here represents a set of label:value pair of a property
      // A maximum of 10 properties are allowed
      {
        label: 'Study Accession',
        dataField: 'phs_accession',
        // link property specify URL value should link to
        // space holder "{study_acronym}" will be replaced by
        // actual value in the property program_id
        // link: '/arm/{study_acronym}',
        // labelLink property specify URL label should link to
        // labelLink: '/programs',
        // external links must have URL scheme part such as "https://"
      },
      {
        label: 'Study Description',
        dataField: 'study_description',
      },
    ],
  },
];

// Ideal size for externalLinkIcon is 16x16 px
export const externalLinkIcon = {
  src: 'https://raw.githubusercontent.com/CBIIT/datacommons-assets/main/bento/images/icons/svgs/externalLinkIcon.svg',
  alt: 'External link icon',
};

const rightPanel = [
  // Each object here represents a subsection in the panel
  // A maximum of 3 subsections are allowed
  {
    // sectionDesc: 'Treatment Related Info',
    properties: [
      // A maximum of 10 properties are allowed
      {
        label: 'Number of Participants',
        dataField: 'numberOfSubjects',
      },
      {
        label: 'Number of Files',
        dataField: 'numberOfFiles',
      },
      {
        label: 'Data types',
        dataField: 'data_types',
      },
      {
        label: 'External Resources',
        dataField: 'study_external_url',
        link: '{study_external_url}',
        // labelLink: true,
      },
    ],
  },
];

// --------------- File table configuration --------------
const table = {
  // Set 'display' to false to hide the table entirely
  display: true,
  // Table title
  title: 'STUDY DATA',
  // Field name for files data, need to be updated only when using a different GraphQL query
  filesField: 'fileOverview',
  // Value must be one of the 'dataField's in "columns"
  defaultSortField: 'file_name',
  // 'asc' or 'desc'
  defaultSortDirection: 'asc',
  // Set 'selectableRows' to true to show the row selection
  headerPagination: true,
  selectableRows: true,
  tooltipMessage: 'Click button to add selected files.',
  helpMessage: 'Here help message',
  // Text to appear on Add to cart button
  buttonText: 'Add Selected Files',
  saveButtonDefaultStyle: {
    color: '#fff',
    backgroundColor: '#0B4E75',
    opacity: '1',
    border: '0px',
    cursor: 'pointer',
  },
  ActiveSaveButtonDefaultStyle: {
    disabled: 'true',
    opacity: '0.3',
    cursor: 'auto',
  },
  DeactiveSaveButtonDefaultStyle: {
    cursor: 'pointer',
    opacity: 'unset',
    border: 'unset',
  },
  columns: [
    {
      dataField: 'file_id',
      header: 'File Id',
      primary: true,
      display: false,
    },
    {
      dataField: 'file_name',
      header: 'File Name',
    },
    {
      dataField: 'file_type',
      header: 'Format',
    },
    {
      dataField: 'sample_id',
      header: 'Sample ID',
    },
    {
      dataField: 'subject_id',
      header: 'Participant ID',
    },
    {
      dataField: 'gender',
      header: 'Gender',
    },
    {
      dataField: 'analyte_type',
      header: 'Analyte Type',
    },
    {
      dataField: 'is_tumor',
      header: 'Tumor Status',
    },
  ],
  // Util Functions
  // Custom function on selct checkbox is selected.
  customOnRowsSelect: FileOnRowsSelect,
};

// --------------- GraphQL query configuration --------------

// query name, also used as root of returned data
const dataRoot = 'studyDetail';
// Primary ID field used to query a case
const armIDField = 'phs_accession';
// GraphQL query to retrieve detailed info for a case
const GET_ARM_DETAIL_DATA_QUERY = gql`
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

// export const GET_MY_FILE_OVERVIEW_QUERY = gql`
// query fileOverview(
//   $phs_accession: String
//   $first: Int,
// ){
// fileOverview(
//   first: $first,
//   phs_accession: [$phs_accession]
// ){
//   study_acronym
//   phs_accession
//   subject_id
//   sample_id
//   experimental_strategy
//   gender
//   site
//   analyte_type
//   is_tumor
//   file_name
//   file_type
//   file_size
//   file_id
//   md5sum
// }
// }`;

export const GET_MY_FILE_OVERVIEW_QUERY = gql`
query fileOverview(
  $subject_ids: [String],
  $sample_ids: [String],
  $file_ids: [String],
  $studies: [String],
  $phs_accession:String,
  $file_types: [String],
  $genders: [String],
  $is_tumor: [String],
  $accesses: [String],
  $first: Int, 
  $offset: Int, 
  $order_by:  String
  $sort_direction: String 
){
fileOverview(
  subject_ids: $subject_ids,
  sample_ids: $sample_ids,
  file_ids: $file_ids
  studies: $studies,
  phs_accession: [$phs_accession],
  file_types: $file_types,
  genders: $genders,
  is_tumor: $is_tumor,
  accesses: $accesses,
  first: $first, 
  offset: $offset, 
  order_by: $order_by,
  sort_direction: $sort_direction
){
  study_acronym
  phs_accession
  subject_id
  sample_id
  gender
  analyte_type
  is_tumor
  file_name
  file_type
  file_size
  file_id
  md5sum
}
}
`;

export {
  header,
  dataRoot,
  armIDField,
  subsections,
  rightPanel,
  table,
  GET_ARM_DETAIL_DATA_QUERY,
};
