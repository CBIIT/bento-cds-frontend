import gql from 'graphql-tag';
import { cellTypes } from '@bento-core/table';

export const tooltipContent = {
  src: 'https://raw.githubusercontent.com/google/material-design-icons/master/src/action/help/materialicons/24px.svg',
  alt: 'tooltipIcon',
  arrow: true,
  placement: 'top-end',
  sample: 'Click button to add selected files associated with the selected sample(s).',
  files: 'Click button to add selected files.',
  study_data: 'Click button to add selected files.',
};


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
  name: 'study_data',
  dataKey: 'file_name',
  display: true,
  // Table title
  title: 'STUDY DATA',
  // Field name for table data, need to be updated only when using a different GraphQL query
  dataField: 'fileOverview',
  // Value must be one of the 'field' in columns
  defaultSortField: 'file_name',
  // 'asc' or 'desc'
  defaultSortDirection: 'asc',
  // Set 'selectableRows' to true to show the row selection
  selectableRows: true,
  buttonText: 'Add Selected Files',
  addFilesRequestVariableKey: 'file_names',
  addFilesResponseKeys: ['fileIDsFromList'],
  // A maximum of 10 columns are allowed
  columns: [
    {
      cellType: cellTypes.CHECKBOX,
      display: true,
      role: cellTypes.CHECKBOX,
    },
    {
      dataField: 'file_id',
      header: 'File Id',
      primary: true,
      display: false,
    },
    {
      dataField: 'file_name',
      header: 'File Name',
      tooltipText: 'Sort by File Name',
      display: true,
    },
    {
      dataField: 'file_type',
      header: 'Format',
      tooltipText: 'Sort by File Format',
      display: true,
    },
    {
      dataField: 'sample_id',
      header: 'Sample ID',
      tooltipText: 'Sort by Sample ID',
      display: true,

    },
    {
      dataField: 'subject_id',
      header: 'Participant ID',
      tooltipText: 'Sort by Participant ID',
      display: true,
    },
    {
      dataField: 'gender',
      header: 'Gender',
      tooltipText: 'Sort by Gender',
      display: true,
    },
    {
      dataField: 'analyte_type',
      header: 'Analyte Type',
      tooltipText: 'Sort by Analyte Type',
      display: true,
    },
    {
      dataField: 'is_tumor',
      header: 'Tumor Status',
      tooltipText: 'Sort by Tumor Status',
      display: true,
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

  fileOverview(
    phs_accession: [$phs_accession],
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