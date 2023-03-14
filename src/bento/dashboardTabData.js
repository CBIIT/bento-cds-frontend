/* eslint-disable */
import gql from 'graphql-tag';
import { customCasesTabDownloadCSV, customFilesTabDownloadCSV, customSamplesTabDownloadCSV } from './tableDownloadCSV';

// --------------- Tooltip configuration --------------
export const tooltipContent = {
  icon: 'https://raw.githubusercontent.com/google/material-design-icons/master/src/action/help/materialicons/24px.svg',
  alt: 'tooltipIcon',
  0: 'Select to add participant files.',
  1: 'Select to add sample files.',
  2: 'Select to add files.',
};

// --------------- Dahboard Table external link configuration --------------
// Ideal size for externalLinkIcon is 16x16 px
export const externalLinkIcon = {
  src: 'https://raw.githubusercontent.com/CBIIT/datacommons-assets/main/bento/images/icons/svgs/externalLinkIcon.svg',
  alt: 'External link icon',
};

// --------------- Tabs Table configuration --------------
export const tabContainers = [
  {

    name: 'Cases',
    dataField: 'dataCase',
    api: 'GET_CASES_OVERVIEW_QUERY',
    paginationAPIField: 'subjectOverview',
    count: 'numberOfSubjects',
    dataKey: 'subject_id',
    defaultSortField: 'subject_id',
    defaultSortDirection: 'asc',
    buttonText: 'Add Selected Files',
    saveButtonDefaultStyle: {
      color: '#fff',
      backgroundColor: '#0B4E75',
      opacity: '1',
      border: '0px',
      cursor: 'pointer',
    },
    ActiveSaveButtonDefaultStyle: {
      cursor: 'pointer',
      opacity: 'unset',
      border: 'unset',
    },
    DeactiveSaveButtonDefaultStyle: {
      opacity: '0.3',
      cursor: 'auto',
    },
    columns: [
      {
        dataField: 'subject_id',
        header: 'Participant ID',
        sort: 'asc',
        primary: true,
        display: true,
      },
      {
        dataField: 'study_acronym',
        header: 'Study Name',
        sort: 'asc',
        display: true,
      },
      {
        dataField: 'phs_accession',
        header: 'Accession ',
        link: '/study/{phs_accession}',
        sort: 'asc',
        display: true,
      },
      {
        dataField: 'gender',
        header: 'Gender',
        sort: 'asc',
        display: true,
      },
      {
        dataField: 'samples',
        header: 'Samples',
        sort: 'asc',
        display: true,
      },

    ],
    id: 'case_tab',
    onRowsSelect: 'type1',
    disableRowSelection: 'type1',
    tableID: 'case_tab_table',
    selectableRows: true,
    tableDownloadCSV: customCasesTabDownloadCSV,
    tabIndex: '0',
    downloadFileName: 'Bento_Dashboard_cases_download',
    headerPagination: true,
    footerPagination: true,
  },
  {
    name: 'Samples',
    dataField: 'dataSample',
    api: 'GET_SAMPLES_OVERVIEW_QUERY',
    count: 'numberOfSamples',
    paginationAPIField: 'sampleOverview',
    dataKey: 'sample_id',
    defaultSortField: 'sample_id',
    defaultSortDirection: 'asc',
    saveButtonDefaultStyle: {
      color: '#fff',
      backgroundColor: '#0B4E75',
      opacity: '1',
      border: '0px',
      cursor: 'pointer',
    },
    DeactiveSaveButtonDefaultStyle: {
      opacity: '0.3',
      cursor: 'auto',
    },
    ActiveSaveButtonDefaultStyle: {
      cursor: 'pointer',
      opacity: 'unset',
      border: 'unset',
    },

    columns: [
      {
        dataField: 'sample_id',
        header: 'Sample ID',
        sort: 'asc',
        primary: true,
        display: true,
      },
      {
        dataField: 'study_acronym',
        header: 'Study Name',
        sort: 'asc',
        display: true,
      },
      {
        dataField: 'phs_accession',
        header: 'Accession',
        link: '/study/{phs_accession}',
        sort: 'asc',
        display: true,
      },
      {
        dataField: 'subject_id',
        header: 'Participant id',
        sort: 'asc',
        display: false,
      },
      {
        dataField: 'is_tumor',
        header: 'Tumor',
        sort: 'asc',
        display: true,
      },
      {
        dataField: 'analyte_type',
        header: 'Analyte Type',
        sort: 'asc',
        display: true,
      },
    ],
    id: 'sample_tab',
    onRowsSelect: 'type3',
    disableRowSelection: 'type2',
    buttonText: 'Add Selected Files',
    tableID: 'sample_tab_table',
    selectableRows: true,
    tabIndex: '1',
    tableDownloadCSV: customSamplesTabDownloadCSV,
    downloadFileName: 'Bento_Dashboard_cases_download',
    headerPagination: true,
    footerPagination: true,
  },
  {
    name: 'Files',
    dataField: 'dataFile',
    api: 'GET_FILES_OVERVIEW_QUERY',
    paginationAPIField: 'fileOverview',
    defaultSortField: 'file_name',
    defaultSortDirection: 'asc',
    count: 'numberOfFiles',
    buttonText: 'Add Selected Files',
    dataKey: 'file_id',
    saveButtonDefaultStyle: {
      color: '#fff',
      backgroundColor: '#DC2FDA',
      opacity: '1',
      border: '0px',
      cursor: 'pointer',
    },
    DeactiveSaveButtonDefaultStyle: {
      opacity: '0.3',
      cursor: 'auto',
    },
    ActiveSaveButtonDefaultStyle: {
      cursor: 'pointer',
      opacity: 'unset',
      border: 'unset',
    },
    columns: [
      {
        dataField: 'file_id',
        header: 'File ID',
        sort: 'asc',
        display: false,
        primary: true,
      },
      {
        dataField: 'file_name',
        header: 'File Name',
        sort: 'asc',
        display: true,
      },
      {
        dataField: 'study_acronym',
        header: 'Study Name',
        sort: 'asc',
        display: true,
      },
      {
        dataField: 'phs_accession',
        header: 'Accession',
        link: '/study/{phs_accession}',
        sort: 'asc',
        display: true,
      },
      {
        dataField: 'subject_id',
        header: 'Participant Id',
        sort: 'asc',
        display: true,
      },
      {
        dataField: 'sample_id',
        header: 'Sample Id',
        sort: 'asc',
        display: true,
      },
      // {
      //   dataField: '', // This need to left empty if no data need to be displayed before file download icon
      //   header: 'Access',
      //   sort: 'asc',
      //   display: true,
      //   downloadDocument: true, // To indicate that column is document donwload
      //   documentDownloadProps: {
      //     // Max file size needs to bin Bytes to seperate two support file preview and download
      //     maxFileSize: 315,
      //     // Tool top text for Unauthenticated users
      //     toolTipTextUnauthenticated: 'Login to access this file',
      //     // Tool top text for file download
      //     toolTipTextFileDownload: 'Download a copy of this file',
      //     // Tool top text for file preview
      //     toolTipTextFilePreview: 'Because of its size and/or format, this file is unavailable for download and must be accessed via the My Files workflow',
      //     // datafield where file file column exists in the table
      //     fileSizeColumn: 'file_size',
      //     // datafield where file file id exists in the table which is used to get file location
      //     fileLocationColumn: 'file_id',
      //     // datafield where file format exists in the table
      //     fileFormatColumn: 'file_format',
      //     // datafield where file case id exists in the table which is used to get file information
      //     caseIdColumn: 'subject_id',
      //     // Unauthenticated lock icon
      //     iconUnauthenticated: 'https://raw.githubusercontent.com/CBIIT/datacommons-assets/main/bento/images/icons/svgs/Access_Lock.svg',
      //     // file download icon
      //     iconFileDownload: 'https://raw.githubusercontent.com/CBIIT/datacommons-assets/main/bento/images/icons/svgs/DocumentDownloadPDF.svg',
      //     // file preview icon
      //     iconFilePreview: 'https://raw.githubusercontent.com/CBIIT/datacommons-assets/main/bento/images/icons/svgs/DocumentDownloadCloud.svg',
      //     // file viewer icon JBrowse
      //     iconFileViewer: 'https://raw.githubusercontent.com/CBIIT/datacommons-assets/main/bento/images/icons/svgs/DocumentDownloadBAM.svg',
      //   },
      // },
      {
        dataField: 'file_type',
        header: 'File Type',
        sort: 'asc',
        display: true,
      },
      {
        dataField: 'file_size',
        header: 'File Size',
        sort: 'asc',
        display: false,
      },
    ],
    id: 'file_tab',
    onRowsSelect: 'type2',
    disableRowSelection: 'type3',
    tableID: 'file_tab_table',
    selectableRows: true,
    tabIndex: '2',
    tableDownloadCSV: customFilesTabDownloadCSV,
    downloadFileName: 'Bento_Dashboard_cases_download',
    headerPagination: true,
    footerPagination: true,
  },
];

// --------------- Tabs Header Data configuration --------------
export const tabs = [
  {
    id: 'case_tab',
    title: 'Participants',
    dataField: 'dataCase',
    count: 'numberOfSubjects',
  },
  {
    id: 'sample_tab',
    title: 'Samples',
    dataField: 'dataSample',
    count: 'numberOfSamples',
  },
  {
    id: 'file_tab',
    title: 'Files',
    dataField: 'dataFile',
    count: 'numberOfFiles',
  },
];

// --------------- Tabs Header Style configuration --------------
export const tabIndex = [
  {
    title: 'Cases',
    primaryColor: '#c3e8f7',
    secondaryColor: '#FFDFB8',
    selectedColor: '#000000',
  },
  {
    title: 'Samples',
    primaryColor: '#f2d5f1',
    secondaryColor: '#C9F1F1',
    selectedColor: '#000000',
  },
  {
    title: 'Files',
    primaryColor: '#fadfc7',
    secondaryColor: '#86D6F0',
    selectedColor: '#000000',
  },
];

export const DASHBOARD_QUERY_NEW = gql`
query searchSubjects(        
     
  $subject_ids: [String]
  $studies: [String]
  $file_types: [String]
  $genders: [String]
  $experimental_strategies: [String]
  $is_tumor: [String]
  $accesses: [String]
){
searchSubjects (           
  subject_ids: $subject_ids
  studies: $studies
  file_types: $file_types
  genders: $genders
  experimental_strategies: $experimental_strategies
  is_tumor: $is_tumor
  accesses: $accesses
) {
  numberOfStudies
  numberOfSubjects
  numberOfSamples
  numberOfFiles
  numberOfDiseaseSites

  subjectCountByExperimentalStrategy{
      group
      subjects
  }
  subjectCountByGender{
      group
      subjects
  }
  subjectCountByIsTumor{
      group
      subjects
  }
  subjectCountByAnalyteType{
      group
      subjects
  }

  filterSubjectCountByStudy{
      group
      subjects
  }
  filterSubjectCountByExperimentalStrategy{
      group
      subjects
  }
  filterSubjectCountByAccess{
      group
      subjects
  }
  filterSubjectCountByGender{
      group
      subjects
  }
  filterSubjectCountByIsTumor{
      group
      subjects
  }
  filterSubjectCountByFileType{
      group
      subjects
  }
}
}

`;

export const DASHBOARD_QUERY = gql`
query searchSubjects(        
     
  $subject_ids: [String]
  $studies: [String]
  $file_types: [String]
  $genders: [String]
  $experimental_strategies: [String]
  $is_tumor: [String]
  $accesses: [String]
){
searchSubjects (           
  subject_ids: $subject_ids
  studies: $studies
  file_types: $file_types
  genders: $genders
  experimental_strategies: $experimental_strategies
  is_tumor: $is_tumor
  accesses: $accesses
) {
  numberOfStudies
  numberOfSubjects
  numberOfSamples
  numberOfFiles
  numberOfDiseaseSites

  subjectCountByExperimentalStrategy{
      group
      subjects
  }
  subjectCountByGender{
      group
      subjects
  }
  subjectCountByIsTumor{
      group
      subjects
  }
  subjectCountByAnalyteType{
      group
      subjects
  }

  filterSubjectCountByStudy{
      group
      subjects
  }
  filterSubjectCountByExperimentalStrategy{
      group
      subjects
  }
  filterSubjectCountByAccess{
      group
      subjects
  }
  filterSubjectCountByGender{
      group
      subjects
  }
  filterSubjectCountByIsTumor{
      group
      subjects
  }
  filterSubjectCountByFileType{
      group
      subjects
  }
}
}
   `;

export const FILTER_GROUP_QUERY = gql`
  query groupCounts($subject_ids: [String]){
   armsByPrograms(subject_ids: $subject_ids) {
     program
     caseSize
     children {
         arm
         caseSize
         size
     }
 }
 subjectCountByDiagnoses (subject_ids: $subject_ids){
  group
  subjects
}
subjectCountByRecurrenceScore (subject_ids: $subject_ids){
  group
  subjects
}
subjectCountByTumorSize(subject_ids: $subject_ids) {
  group
  subjects
}
subjectCountByChemotherapyRegimen(subject_ids: $subject_ids) {
  group
  subjects
}
subjectCountByEndocrineTherapy (subject_ids: $subject_ids){
  group
  subjects
}
   
}
 `;

export const FILTER_QUERY = gql`
query search (          
  $programs: [String] ,
  $studies: [String] ,
  $diagnoses: [String] ,
  $rc_scores: [String] ,
  $tumor_sizes: [String] ,
  $chemo_regimen: [String] ,
  $tumor_grades: [String] ,
  $er_status: [String] ,
  $pr_status: [String] ,
  $endo_therapies: [String] ,
  $meno_status: [String] ,
  $tissue_type: [String],
  $composition: [String],
  $association: [String],
  $file_type: [String],
  $age_at_index: [Float]
){
  searchSubjects (          
      programs: $programs,
      studies: $studies,
      diagnoses: $diagnoses,
      rc_scores: $rc_scores,
      tumor_sizes: $tumor_sizes,
      chemo_regimen: $chemo_regimen,
      tumor_grades: $tumor_grades,
      er_status: $er_status,
      pr_status: $pr_status,
      endo_therapies: $endo_therapies,
      meno_status: $meno_status,
      tissue_type: $tissue_type,
      composition: $composition,
      association: $association,       
      file_type: $file_type,
      age_at_index: $age_at_index
  ) {
      numberOfPrograms
      numberOfStudies
      numberOfSubjects
      numberOfSamples
      numberOfLabProcedures
      numberOfFiles
      armsByPrograms {
          program
          caseSize
          children {
              arm
              caseSize
              size
          }

      }

  subjectCountByProgram {
          group
          subjects
      }
      subjectCountByStudy {
          group
          subjects
      }
      subjectCountByDiagnoses {
          group
          subjects
      }
      subjectCountByRecurrenceScore {
          group
          subjects
      }
      subjectCountByTumorSize {
          group
          subjects
      }
      subjectCountByChemotherapyRegimen {
          group
          subjects
      }
      subjectCountByEndocrineTherapy {
          group
          subjects
      }
      subjectCountByTumorGrade{
          group
          subjects
      }
      subjectCountByErStatus{
          group
          subjects
      }
      subjectCountByPrStatus{
          group
          subjects
      }
      subjectCountByMenopauseStatus{
          group
          subjects
      }
      subjectCountByFileType {
          group
          subjects
      }
      subjectCountByFileAssociation {
          group
          subjects
      }
      subjectCountByTissueComposition {
          group
          subjects
      }
      subjectCountByTissueType {
          group
          subjects
      }

      filterSubjectCountByProgram {
          group
          subjects
      }
      filterSubjectCountByStudy{
          group
          subjects
      }
      filterSubjectCountByDiagnoses{
          group
          subjects
      }
      filterSubjectCountByRecurrenceScore{
          group
          subjects
      }
      filterSubjectCountByTumorSize{
          group
          subjects
      }
      filterSubjectCountByTumorGrade{
          group
          subjects
      }
      filterSubjectCountByErStatus{
          group
          subjects
      }
      filterSubjectCountByPrStatus{
          group
          subjects
      }
      filterSubjectCountByChemotherapyRegimen{
          group
          subjects
      }
      filterSubjectCountByEndocrineTherapy{
          group
          subjects
      }
      filterSubjectCountByMenopauseStatus{
          group
          subjects
      }
      filterSubjectCountByTissueType{
          group
          subjects
      }
      filterSubjectCountByTissueComposition{
          group
          subjects
      }
      filterSubjectCountByFileAssociation{
          group
          subjects
      }
      filterSubjectCountByFileType{
          group
          subjects
      }
      filterSubjectCountByAge{
        lowerBound
        upperBound
        subjects
      }

  }
}
`;

export const GET_FILES_OVERVIEW_QUERY = gql`
query fileOverview(
  $subject_ids: [String],
  $sample_ids: [String],
  $file_ids: [String],
  $studies: [String],
  $file_types: [String],
  $genders: [String],
  $experimental_strategies: [String],
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
  file_types: $file_types,
  genders: $genders,
  experimental_strategies: $experimental_strategies,
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

  file_name
  file_type
  file_size
  file_id
  md5sum
}
}
`;

export const GET_SAMPLES_OVERVIEW_QUERY = gql`
query sampleOverview(
  $subject_ids: [String],
  $sample_ids: [String],
  $studies: [String],
  $file_types: [String],
  $genders: [String],
  $experimental_strategies: [String],
  $is_tumor: [String],
  $accesses: [String],
  $first: Int, 
  $offset: Int, 
  $order_by:  String
  $sort_direction: String 
){
sampleOverview(
  subject_ids: $subject_ids,
  sample_ids: $sample_ids,
  studies: $studies,
  file_types: $file_types,
  genders: $genders,
  experimental_strategies: $experimental_strategies,
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

  is_tumor
  analyte_type

  files
}
}
`;

export const GET_CASES_OVERVIEW_QUERY = gql`
query subjectOverview(
  $subject_ids: [String],
  $studies: [String],
  $file_types: [String],
  $genders: [String],
  $experimental_strategies: [String],
  $is_tumor: [String],
  $accesses: [String],
  $first: Int, 
  $offset: Int, 
  $order_by:  String,
  $sort_direction: String 
){
subjectOverview(
  subject_ids: $subject_ids,
  studies: $studies,
  file_types: $file_types,
  genders: $genders,
  experimental_strategies: $experimental_strategies,
  is_tumor: $is_tumor,
  accesses: $accesses,
  first: $first, 
  offset: $offset, 
  order_by: $order_by,
  sort_direction: $sort_direction
  
  ) {
  subject_id
  study_acronym
  phs_accession
  gender
  site
  samples
  files
  
}
}
`;

export const GET_ALL_FILEIDS_CASESTAB_FOR_SELECT_ALL = gql`
query search (          
  $subject_ids: [String],
){
  fileIDsFromList (          
      subject_ids: $subject_ids,
  ) 
}
  `;

export const GET_ALL_FILEIDS_SAMPLESTAB_FOR_SELECT_ALL = gql`
query search (          
  $sample_ids: [String],
){
  fileIDsFromList (          
    sample_ids: $sample_ids,
  ) 
}
  `;

export const GET_ALL_FILEIDS_FILESTAB_FOR_SELECT_ALL = gql`
query search (          
  $file_ids: [String],
){
  fileIDsFromList (          
      file_ids: $file_ids
  ) 
  }
  `;

export const GET_ALL_FILEIDS_FROM_CASESTAB_FOR_ADD_ALL_CART = gql`
query subjectOverview(
  $subject_ids: [String],
  $studies: [String],
  $file_types: [String],
  $genders: [String],
  $experimental_strategies: [String],
  $is_tumor: [String],
  $accesses: [String],
  $first: Int, 
  $offset: Int, 
  $order_by:  String,
  $sort_direction: String 
){
subjectOverview(
  subject_ids: $subject_ids,
  studies: $studies,
  file_types: $file_types,
  genders: $genders,
  experimental_strategies: $experimental_strategies,
  is_tumor: $is_tumor,
  accesses: $accesses,
  first: $first, 
  offset: $offset, 
  order_by: $order_by,
  sort_direction: $sort_direction
  
  ) {
  files
}
}
    `;

export const GET_ALL_FILEIDS_FROM_SAMPLETAB_FOR_ADD_ALL_CART = gql`
query sampleOverview(
  $subject_ids: [String],
  $sample_ids: [String],
  $studies: [String],
  $file_types: [String],
  $genders: [String],
  $experimental_strategies: [String],
  $is_tumor: [String],
  $accesses: [String],
  $first: Int, 
  $offset: Int, 
  $order_by:  String
  $sort_direction: String 
){
sampleOverview(
  subject_ids: $subject_ids,
  sample_ids: $sample_ids,
  studies: $studies,
  file_types: $file_types,
  genders: $genders,
  experimental_strategies: $experimental_strategies,
  is_tumor: $is_tumor,
  accesses: $accesses,
  first: $first, 
  offset: $offset, 
  order_by: $order_by,
  sort_direction: $sort_direction
){
  files
}
}
        `;

export const GET_ALL_FILEIDS_FROM_FILESTAB_FOR_ADD_ALL_CART = gql`
query fileOverview(
  $subject_ids: [String],
  $sample_ids: [String],
  $file_ids: [String],
  $studies: [String],
  $file_types: [String],
  $genders: [String],
  $experimental_strategies: [String],
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
  file_types: $file_types,
  genders: $genders,
  experimental_strategies: $experimental_strategies,
  is_tumor: $is_tumor,
  accesses: $accesses,
  first: $first, 
  offset: $offset, 
  order_by: $order_by,
  sort_direction: $sort_direction
){
  file_id
}
}
            `;

// --------------- GraphQL query - Retrieve files tab details --------------
export const GET_FILES_NAME_QUERY = gql`
query fileOverview($file_ids: [String], $offset: Int = 0, $first: Int = 100000, $order_by:String ="file_name"){
  fileOverview(file_ids: $file_ids, offset: $offset,first: $first, order_by: $order_by) {
    file_name
  }
}
  `;

export const GET_FILE_IDS_FROM_FILE_NAME = gql`
  query (
      $file_name: [String],
      $offset: Int,
      $first: Int,
      $order_by: String
  )
  {
      fileIdsFromFileNameDesc(
          file_name:$file_name, 
          offset:$offset,
          first:$first,
          order_by:$order_by
      )
      {
          file_id
      }
  }`;
  