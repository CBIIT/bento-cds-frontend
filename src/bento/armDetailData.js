import gql from 'graphql-tag';
import { FileOnRowsSelect } from '../utils/fileTable';

// --------------- Tooltip configuration --------------
export const tooltipContent = {
  src: 'https://raw.githubusercontent.com/CBIIT/datacommons-assets/main/bento/images/icons/svgs/programIcon.svg',
  alt: 'cds study logo',
};

// -------------- Case ID area configurations --------------
const header = {
  label: 'Study',
  dataField: 'study_acronym',
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
        label: 'Accession',
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
        label: 'Data type',
        dataField: 'data_types',
      },
      {
        label: 'External Resources',
        dataField: 'external_resources',
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
  filesField: 'fileOver',
  // Value must be one of the 'dataField's in "columns"
  defaultSortField: 'file_name',
  // 'asc' or 'desc'
  defaultSortDirection: 'asc',
  // Set 'selectableRows' to true to show the row selection
  selectableRows: true,
  tooltipMessage: 'Click button to add selected files.',
  helpMessage: 'Here help message',
  // Text to appear on Add to cart button
  buttonText: 'Add Selected Files',
  saveButtonDefaultStyle: {
    color: '#fff',
    backgroundColor: '#09A175',
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
      dataField: 'file_name',
      header: 'File Name',
    },
    {
      dataField: 'file_type',
      header: 'Format',
    },
    {
      dataField: 'experimental_strategy',
      header: 'Experimental Strategy',
    },
    {
      dataField: 'sample_id',
      header: 'Sample ID',
    },
    {
      dataField: 'subject_id',
      header: 'Paricipant ID',
    },
    {
      dataField: 'gender',
      header: 'Gender',
    },
    {
      dataField: 'gender',
      header: 'Disease Site',
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
    study_description
    numberOfSubjects
    numberOfSamples
    numberOfDiseaseSites
    numberOfFiles
}
 fileOverview(
    phs_accession: [$phs_accession]
){
  study_acronym
  phs_accession
  subject_id
  sample_id
  experimental_strategy
  gender
  site
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
