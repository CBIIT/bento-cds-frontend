/* eslint-disable */
import gql from 'graphql-tag';
import { cellTypes } from '@bento-core/table';
import { customCasesTabDownloadCSV, customFilesTabDownloadCSV, customSamplesTabDownloadCSV } from './tableDownloadCSV';
import { dataFormatTypes } from '@bento-core/table';

// --------------- Tooltip configuration --------------
export const tooltipContent = {
  icon: 'https://raw.githubusercontent.com/google/material-design-icons/master/src/action/help/materialicons/24px.svg',
  alt: 'tooltipIcon',
  0: 'Click button to add selected files associated with the selected case(s).',
  1: 'Click button to add selected files associated with the selected sample(s).',
  2: 'Click button to add selected files.',
  Participants: 'Select to add participant files.',
  Samples: 'Select to add sample files.',
  Files: 'Select to add files.',
  arrow: true,
  styles: {
    border: '#03A383 1px solid',
  }
};

// --------------- Dahboard Table external link configuration --------------
// Ideal size for externalLinkIcon is 16x16 px
export const externalLinkIcon = {
  src: 'https://raw.githubusercontent.com/CBIIT/datacommons-assets/main/bento/images/icons/svgs/externalLinkIcon.svg',
  alt: 'External link icon',
};

// --------------- Tabs Index Mapping --------------
export const tabIndexMap = {
  'participants': 0,
  'samples': 1,
  'files': 2,
};

// --------------- Tabs Header Data configuration --------------
export const tabs = [
  {
    id: 'case_tab',
    title: 'Cases',
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
    primaryColor: '#D6F2EA',
    secondaryColor: '#FFDFB8',
    selectedColor: '#10A075',
  },
  {
    title: 'Samples',
    primaryColor: '#CFEDF9',
    secondaryColor: '#C9F1F1',
    selectedColor: '#0DAFEC',
  },
  {
    title: 'Files',
    primaryColor: '#F7D7F7',
    secondaryColor: '#86D6F0',
    selectedColor: '#C92EC7',
  },
];

export const DASHBOARD_QUERY = gql`
query searchSubjects(
  $subject_ids: [String],
  $accesses:[String],
  $acl:[String],
  $experimental_strategies:[String],
  $file_types:[String],
  $genders:[String],
  $instrument_models:[String],
  $is_tumor:[String],
  $library_layouts:[String],
  $library_selections:[String],
  $library_sources:[String],
  $library_strategies:[String],
  $number_of_study_participants:[Float],
  $number_of_study_samples:[Float],
  $phs_accession:[String],
  $platforms:[String],
  $primary_diagnoses:[String],
  $reference_genome_assemblies:[String],
  $site:[String],
  $studies:[String],
  $study_data_types:[String]
){
  searchSubjects(
      subject_ids: $subject_ids,
      accesses:$accesses,
      acl:$acl,
      experimental_strategies:$experimental_strategies,
      file_types:$file_types,
      genders:$genders,
      instrument_models:$instrument_models,
      is_tumor:$is_tumor,
      library_layouts:$library_layouts,
      library_selections:$library_selections,
      library_sources:$library_sources,
      library_strategies:$library_strategies,
      number_of_study_participants:$number_of_study_participants,
      number_of_study_samples:$number_of_study_samples,
      phs_accession:$phs_accession,
      platforms:$platforms,
      primary_diagnoses:$primary_diagnoses,
      reference_genome_assemblies:$reference_genome_assemblies,
      site:$site,
      studies:$studies,
      study_data_types:$study_data_types
  ){
      numberOfStudies
      numberOfSubjects
      numberOfSamples
      numberOfFiles
      numberOfDiseaseSites
      subjectCountByStudy{
          group
          subjects
      }
      subjectCountByExperimentalStrategy{
          group
          subjects
      }
      subjectCountByAccess{
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
      subjectCountByFileType{
          group
          subjects
      }
      subjectCountByDiseaseSite{
          group
          subjects
      }
      subjectCountByLibraryStrategy{
          group
          subjects
      }
      subjectCountByLibrarySource{
          group
          subjects
      }
      subjectCountByLibrarySelection{
          group
          subjects
      }
      subjectCountByLibraryLayout{
          group
          subjects
      }
      subjectCountByPlatform{
          group
          subjects
      }
      subjectCountByInstrumentModel{
          group
          subjects
      }
      subjectCountByReferenceGenomeAssembly{
          group
          subjects
      }
      subjectCountByPrimaryDiagnosis{
          group
          subjects
      }
      subjectCountByPhsAccession{
          group
          subjects
      }
      subjectCountByStudyDataType{
          group
          subjects
      }
      subjectCountByAcl{
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
      filterSubjectCountByAnalyteType{
          group
          subjects
      }
      filterSubjectCountByDiseaseSite{
          group
          subjects
      }
      filterSubjectCountByLibraryStrategy{
          group
          subjects
      }
      filterSubjectCountByLibrarySource{
          group
          subjects
      }
      filterSubjectCountByLibrarySelection{
          group
          subjects
      }
      filterSubjectCountByLibraryLayout{
          group
          subjects
      }
      filterSubjectCountByPlatform{
          group
          subjects
      }
      filterSubjectCountByInstrumentModel{
          group
          subjects
      }
      filterSubjectCountByReferenceGenomeAssembly{
          group
          subjects
      }
      filterSubjectCountByPrimaryDiagnosis{
          group
          subjects
      }
      filterSubjectCountByPhsAccession{
          group
          subjects
      }
      filterSubjectCountByStudyDataType{
          group
          subjects
      }
      filterSubjectCountByNumberOfStudyParticipants{
          lowerBound
          upperBound
          subjects
      }
      filterSubjectCountByNumberOfStudySamples{
          lowerBound
          upperBound
          subjects
      }
  }
}
`;

// --------------- GraphQL query - Fetch data for individual tabs --------------

export const GET_CASES_OVERVIEW_QUERY = gql`
query subjectOverview(
  $subject_ids: [String],
  $accesses:[String],
  $acl:[String],
  $experimental_strategies:[String],
  $file_types:[String],
  $genders:[String],
  $instrument_models:[String],
  $is_tumor:[String],
  $library_layouts:[String],
  $library_selections:[String],
  $library_sources:[String],
  $library_strategies:[String],
  $number_of_study_participants:[Float],
  $number_of_study_samples:[Float],
  $phs_accession:[String],
  $platforms:[String],
  $primary_diagnoses:[String],
  $reference_genome_assemblies:[String],
  $site:[String],
  $studies:[String],
  $study_data_types:[String],

  $order_by: String,
  $sort_direction: String,
  $first: Int,
  $offset: Int
){
  subjectOverview(
      subject_ids: $subject_ids,
      accesses:$accesses,
      acl:$acl,
      experimental_strategies:$experimental_strategies,
      file_types:$file_types,
      genders:$genders,
      instrument_models:$instrument_models,
      is_tumor:$is_tumor,
      library_layouts:$library_layouts,
      library_selections:$library_selections,
      library_sources:$library_sources,
      library_strategies:$library_strategies,
      number_of_study_participants:$number_of_study_participants,
      number_of_study_samples:$number_of_study_samples,
      phs_accession:$phs_accession,
      platforms:$platforms,
      primary_diagnoses:$primary_diagnoses,
      reference_genome_assemblies:$reference_genome_assemblies,
      site:$site,
      studies:$studies,
      study_data_types:$study_data_types,

      order_by:$order_by,
      sort_direction:$sort_direction,
      first:$first,
      offset:$offset
  ){
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

export const GET_FILES_OVERVIEW_QUERY = gql`
query fileOverview(
  $subject_ids: [String],
  $sample_ids: [String],
  $accesses:[String],
  $acl:[String],
  $experimental_strategies:[String],
  $file_types:[String],
  $genders:[String],
  $instrument_models:[String],
  $is_tumor:[String],
  $library_layouts:[String],
  $library_selections:[String],
  $library_sources:[String],
  $library_strategies:[String],
  $number_of_study_participants:[Float],
  $number_of_study_samples:[Float],
  $phs_accession:[String],
  $platforms:[String],
  $primary_diagnoses:[String],
  $reference_genome_assemblies:[String],
  $site:[String],
  $studies:[String],
  $study_data_types:[String],

  $order_by: String,
  $sort_direction: String,
  $first: Int,
  $offset: Int
){
  fileOverview(
      subject_ids: $subject_ids,
      sample_ids: $sample_ids,
      accesses:$accesses,
      acl:$acl,
      experimental_strategies:$experimental_strategies,
      file_types:$file_types,
      genders:$genders,
      instrument_models:$instrument_models,
      is_tumor:$is_tumor,
      library_layouts:$library_layouts,
      library_selections:$library_selections,
      library_sources:$library_sources,
      library_strategies:$library_strategies,
      number_of_study_participants:$number_of_study_participants,
      number_of_study_samples:$number_of_study_samples,
      phs_accession:$phs_accession,
      platforms:$platforms,
      primary_diagnoses:$primary_diagnoses,
      reference_genome_assemblies:$reference_genome_assemblies,
      site:$site,
      studies:$studies,
      study_data_types:$study_data_types,

      order_by:$order_by,
      sort_direction:$sort_direction,
      first:$first,
      offset:$offset
  ){
      study_acronym
      phs_accession
      subject_id
      sample_id
      experimental_strategy
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

export const GET_SAMPLES_OVERVIEW_QUERY = gql`
query sampleOverview(
  $subject_ids: [String],
  $sample_ids: [String],
  $accesses:[String],
  $acl:[String],
  $experimental_strategies:[String],
  $file_types:[String],
  $genders:[String],
  $instrument_models:[String],
  $is_tumor:[String],
  $library_layouts:[String],
  $library_selections:[String],
  $library_sources:[String],
  $library_strategies:[String],
  $number_of_study_participants:[Float],
  $number_of_study_samples:[Float],
  $phs_accession:[String],
  $platforms:[String],
  $primary_diagnoses:[String],
  $reference_genome_assemblies:[String],
  $site:[String],
  $studies:[String],
  $study_data_types:[String],
  $order_by: String,
  $sort_direction: String,
  $first: Int,
  $offset: Int
){
  sampleOverview(
      subject_ids: $subject_ids,
      sample_ids: $sample_ids,
      accesses:$accesses,
      acl:$acl,
      experimental_strategies:$experimental_strategies,
      file_types:$file_types,
      genders:$genders,
      instrument_models:$instrument_models,
      is_tumor:$is_tumor,
      library_layouts:$library_layouts,
      library_selections:$library_selections,
      library_sources:$library_sources,
      library_strategies:$library_strategies,
      number_of_study_participants:$number_of_study_participants,
      number_of_study_samples:$number_of_study_samples,
      phs_accession:$phs_accession,
      platforms:$platforms,
      primary_diagnoses:$primary_diagnoses,
      reference_genome_assemblies:$reference_genome_assemblies,
      site:$site,
      studies:$studies,
      study_data_types:$study_data_types,

      order_by:$order_by,
      sort_direction:$sort_direction,
      first:$first,
      offset:$offset
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

// --------------- GraphQL query - select all check box --------------

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
  $file_names: [String] 
){
  fileIDsFromList (          
      file_names: $file_names
  ) 
}
  `;

// --------------- GraphQL query - Add All to Cart Button --------------

export const GET_ALL_FILEIDS_FROM_CASESTAB_FOR_ADD_ALL_CART = gql`
query subjectOverview(
  $subject_ids: [String],
  $accesses:[String],
  $acl:[String],
  $experimental_strategies:[String],
  $file_types:[String],
  $genders:[String],
  $instrument_models:[String],
  $is_tumor:[String],
  $library_layouts:[String],
  $library_selections:[String],
  $library_sources:[String],
  $library_strategies:[String],
  $number_of_study_participants:[Float],
  $number_of_study_samples:[Float],
  $phs_accession:[String],
  $platforms:[String],
  $primary_diagnoses:[String],
  $reference_genome_assemblies:[String],
  $site:[String],
  $studies:[String],
  $study_data_types:[String],

  $order_by: String,
  $sort_direction: String,
  $first: Int,
  $offset: Int
){
subjectOverview(
      subject_ids: $subject_ids,
      accesses:$accesses,
      acl:$acl,
      experimental_strategies:$experimental_strategies,
      file_types:$file_types,
      genders:$genders,
      instrument_models:$instrument_models,
      is_tumor:$is_tumor,
      library_layouts:$library_layouts,
      library_selections:$library_selections,
      library_sources:$library_sources,
      library_strategies:$library_strategies,
      number_of_study_participants:$number_of_study_participants,
      number_of_study_samples:$number_of_study_samples,
      phs_accession:$phs_accession,
      platforms:$platforms,
      primary_diagnoses:$primary_diagnoses,
      reference_genome_assemblies:$reference_genome_assemblies,
      site:$site,
      studies:$studies,
      study_data_types:$study_data_types,

      order_by:$order_by,
      sort_direction:$sort_direction,
      first:$first,
      offset:$offset
  
  ) {
  files
}
}
    `;

export const GET_ALL_FILEIDS_FROM_SAMPLETAB_FOR_ADD_ALL_CART = gql`
query sampleOverview(
  $subject_ids: [String],
  $sample_ids: [String],
  $accesses:[String],
  $acl:[String],
  $experimental_strategies:[String],
  $file_types:[String],
  $genders:[String],
  $instrument_models:[String],
  $is_tumor:[String],
  $library_layouts:[String],
  $library_selections:[String],
  $library_sources:[String],
  $library_strategies:[String],
  $number_of_study_participants:[Float],
  $number_of_study_samples:[Float],
  $phs_accession:[String],
  $platforms:[String],
  $primary_diagnoses:[String],
  $reference_genome_assemblies:[String],
  $site:[String],
  $studies:[String],
  $study_data_types:[String],

  $order_by: String,
  $sort_direction: String,
  $first: Int,
  $offset: Int
){
  sampleOverview(
      subject_ids: $subject_ids,
      sample_ids: $sample_ids,
      accesses:$accesses,
      acl:$acl,
      experimental_strategies:$experimental_strategies,
      file_types:$file_types,
      genders:$genders,
      instrument_models:$instrument_models,
      is_tumor:$is_tumor,
      library_layouts:$library_layouts,
      library_selections:$library_selections,
      library_sources:$library_sources,
      library_strategies:$library_strategies,
      number_of_study_participants:$number_of_study_participants,
      number_of_study_samples:$number_of_study_samples,
      phs_accession:$phs_accession,
      platforms:$platforms,
      primary_diagnoses:$primary_diagnoses,
      reference_genome_assemblies:$reference_genome_assemblies,
      site:$site,
      studies:$studies,
      study_data_types:$study_data_types,

      order_by:$order_by,
      sort_direction:$sort_direction,
      first:$first,
      offset:$offset
  ){
      files
  }
}

        `;

export const GET_ALL_FILEIDS_FROM_FILESTAB_FOR_ADD_ALL_CART = gql`
query fileOverview(
  $subject_ids: [String],
  $sample_ids: [String],
  $accesses:[String],
  $acl:[String],
  $experimental_strategies:[String],
  $file_types:[String],
  $genders:[String],
  $instrument_models:[String],
  $is_tumor:[String],
  $library_layouts:[String],
  $library_selections:[String],
  $library_sources:[String],
  $library_strategies:[String],
  $number_of_study_participants:[Float],
  $number_of_study_samples:[Float],
  $phs_accession:[String],
  $platforms:[String],
  $primary_diagnoses:[String],
  $reference_genome_assemblies:[String],
  $site:[String],
  $studies:[String],
  $study_data_types:[String],

  $order_by: String,
  $sort_direction: String,
  $first: Int,
  $offset: Int
){
  fileOverview(
      subject_ids: $subject_ids,
      sample_ids: $sample_ids,
      accesses:$accesses,
      acl:$acl,
      experimental_strategies:$experimental_strategies,
      file_types:$file_types,
      genders:$genders,
      instrument_models:$instrument_models,
      is_tumor:$is_tumor,
      library_layouts:$library_layouts,
      library_selections:$library_selections,
      library_sources:$library_sources,
      library_strategies:$library_strategies,
      number_of_study_participants:$number_of_study_participants,
      number_of_study_samples:$number_of_study_samples,
      phs_accession:$phs_accession,
      platforms:$platforms,
      primary_diagnoses:$primary_diagnoses,
      reference_genome_assemblies:$reference_genome_assemblies,
      site:$site,
      studies:$studies,
      study_data_types:$study_data_types,

      order_by:$order_by,
      sort_direction:$sort_direction,
      first:$first,
      offset:$offset
  ){
      file_id
  }
}

            `;

// --------------- Tabs Table configuration --------------
export const tabContainers = [
  {
    name: 'Participants',
    dataField: 'dataCase',
    api: GET_CASES_OVERVIEW_QUERY,
    paginationAPIField: 'subjectOverview',
    count: 'numberOfSubjects',
    dataKey: 'subject_id',
    defaultSortField: 'subject_id',
    defaultSortDirection: 'asc',
    buttonText: 'Add Selected Files',
    tableID: 'case_tab_table',
    extendedViewConfig: {
      pagination: true,
      manageViewColumns: true,
      download: {
        downloadCsv: 'Download Table Content As CSV',
        downloadFileName: 'CDS_participant_Download',
      },
    },
    columns: [
      {
        cellType: cellTypes.CHECKBOX,
        display: true,
        role: cellTypes.CHECKBOX,
      },
      {
        dataField: 'subject_id',
        header: 'Participant ID',
        display: true,
        tooltipText: 'sort',
      },
      {
        dataField: 'study_acronym',
        header: 'Study Name',
        display: true,
        tooltipText: 'sort',
        role: cellTypes.DISPLAY,
      },
      {
        dataField: 'phs_accession',
        header: 'Accession',
        cellType: cellTypes.LINK,
        linkAttr : {
          rootPath: '/study',
          pathParams: ['phs_accession'],
          // i.e: link: '/study/{phs_accession}',
        },
        display: true,
        tooltipText: 'sort',
        role: cellTypes.DISPLAY,
      },
      {
        dataField: 'gender',
        header: 'Gender',
        display: true,
        tooltipText: 'sort',
        role: cellTypes.DISPLAY,
      },
      {
        dataField: 'samples',
        header: 'Samples',
        display: true,
        tooltipText: 'sort',
        role: cellTypes.DISPLAY,
      },
    ],
    id: 'case_tab',
    tableID: 'case_tab_table',
    tableDownloadCSV: customCasesTabDownloadCSV,
    tabIndex: '0',
    downloadFileName: 'Bento_Dashboard_cases_download',
    tableMsg: {
      noMatch: 'No Matching Records Found',
    },
    addFilesRequestVariableKey: 'subject_ids',
    addFilesResponseKeys: ['fileIDsFromList'],
    addAllFilesResponseKeys: ['subjectOverview', 'files'],
    addAllFileQuery: GET_ALL_FILEIDS_FROM_CASESTAB_FOR_ADD_ALL_CART,
    addSelectedFilesQuery: GET_ALL_FILEIDS_CASESTAB_FOR_SELECT_ALL,
  },
  {
    name: 'Samples',
    dataField: 'dataSample',
    api: GET_SAMPLES_OVERVIEW_QUERY,
    count: 'numberOfSamples',
    paginationAPIField: 'sampleOverview',
    dataKey: 'sample_id',
    defaultSortField: 'sample_id',
    defaultSortDirection: 'asc',
    tableID: 'sample_tab_table',
    extendedViewConfig: {
      pagination: true,
      manageViewColumns: true,
      download: {
        downloadCsv: 'Download Table Content As CSV',
        downloadFileName: 'CDS_sample_Download',
      },
    },
    saveButtonDefaultStyle: {
      color: '#fff',
      backgroundColor: '#00AEEF',
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
        cellType: cellTypes.CHECKBOX,
        display: true,
        role: cellTypes.CHECKBOX,
      },
      {
        dataField: 'sample_id',
        header: 'Sample ID',
        display: true,
        tooltipText: 'sort',
      },
      {
        dataField: 'subject_id',
        header: 'Participant ID',
        display: true,
        tooltipText: 'sort',
      },
      {
        dataField: 'study_acronym',
        header: 'Study Name',
        tooltipText: 'sort',
        display: true,
        role: cellTypes.DISPLAY,
      },
      {
        dataField: 'phs_accession',
        header: 'Accession',
        cellType: cellTypes.LINK,
        linkAttr : {
          rootPath: '/study',
          pathParams: ['phs_accession'],
        },
        display: true,
        tooltipText: 'sort',
        role: cellTypes.DISPLAY,
      },
      {
        dataField: 'is_tumor',
        header: 'Tumor',
        display: true,
        tooltipText: 'sort',
        role: cellTypes.DISPLAY,
      },
      {
        dataField: 'analyte_type',
        header: 'Analyte Type',
        display: true,
        tooltipText: 'sort',
        role: cellTypes.DISPLAY,
      },
    ],
    id: 'sample_tab',
    tableID: 'sample_tab_table',
    tabIndex: '1',
    tableDownloadCSV: customSamplesTabDownloadCSV,
    downloadFileName: 'Bento_Dashboard_cases_download',
    tableMsg: {
      noMatch: 'No Matching Records Found',
    },
    addFilesRequestVariableKey: 'sample_ids',
    addFilesResponseKeys: ['fileIDsFromList'],
    addAllFilesResponseKeys: ['sampleOverview', 'files'],
    addAllFileQuery: GET_ALL_FILEIDS_FROM_SAMPLETAB_FOR_ADD_ALL_CART,
    addSelectedFilesQuery: GET_ALL_FILEIDS_SAMPLESTAB_FOR_SELECT_ALL,
  },
  {
    name: 'Files',
    dataField: 'dataFile',
    api: GET_FILES_OVERVIEW_QUERY,
    paginationAPIField: 'fileOverview',
    defaultSortField: 'file_name',
    defaultSortDirection: 'asc',
    count: 'numberOfFiles',
    dataKey: 'file_name',
    tableID: 'file_tab_table',
    extendedViewConfig: {
      pagination: true,
      manageViewColumns: true,
      download: {
        downloadCsv: 'Download Table Content As CSV',
        downloadFileName: 'CDS_file_Download',
      },
    },
    columns: [
      {
        cellType: cellTypes.CHECKBOX,
        display: true,
        role: cellTypes.CHECKBOX,
      },
      {
        dataField: 'file_id',
        header: 'File ID',
        display: false,
        tooltipText: 'sort',
      },
      {
        dataField: 'file_name',
        header: 'File Name',
        display: true,
        tooltipText: 'sort',
        role: cellTypes.DISPLAY,
      },
      {
        dataField: 'study_acronym',
        header: 'Study Name',
        display: true,
        tooltipText: 'sort',
        role: cellTypes.DISPLAY,
      },
      {
        dataField: 'phs_accession',
        header: 'Accession',
        cellType: cellTypes.LINK,
        linkAttr : {
          rootPath: '/study',
          pathParams: ['phs_accession'],
          // i.e: link: '/study/{phs_accession}',
        },
        display: true,
        tooltipText: 'sort',
        role: cellTypes.DISPLAY,
      },
      {
        dataField: 'subject_id',
        header: 'Participant Id',
        display: true,
        tooltipText: 'sort',
        role: cellTypes.DISPLAY,
      },
      {
        dataField: 'sample_id',
        header: 'Sample Id',
        display: true,
        tooltipText: 'sort',
        role: cellTypes.DISPLAY,
        cellType: cellTypes.FORMAT_DATA,
      },
      // {
      //   dataField: 'acl', // This need to left empty if no data need to be displayed before file download icon
      //   header: 'Access',
      //   display: true,
      //   cellType: cellTypes.CUSTOM_ELEM,
      //   downloadDocument: true, // To indicate that column is document donwload
      //   documentDownloadProps: {
      //     // Max file size needs to bin Bytes to seperate two support file preview and download
      //     maxFileSize: 315,
      //     // Tool top text for Unauthenticated users
      //     toolTipTextUnauthenticated: 'Controlled access file',
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
      //   tooltipText: 'sort',
      //   role: cellTypes.DISPLAY,
      // },
      {
        dataField: 'file_type',
        header: 'File Type',
        sort: 'asc',
        display: true,
        tooltipText: 'sort',
        role: cellTypes.DISPLAY,
      },
      {
        dataField: 'file_size',
        header: 'File Size',
        display: false,
        tooltipText: 'sort',
        role: cellTypes.DISPLAY,
      },
    ],
    id: 'file_tab',
    tableID: 'file_tab_table',
    selectableRows: true,
    tableDownloadCSV: customFilesTabDownloadCSV,
    downloadFileName: 'Bento_Dashboard_cases_download',
    tableMsg: {
      noMatch: 'No Matching Records Found',
    },
    addFilesRequestVariableKey: 'file_names',
    addFilesResponseKeys: ['fileIDsFromList'],
    addAllFilesResponseKeys: ['fileOverview', 'file_id'],
    addAllFileQuery: GET_ALL_FILEIDS_FROM_FILESTAB_FOR_ADD_ALL_CART,
    addSelectedFilesQuery: GET_ALL_FILEIDS_FILESTAB_FOR_SELECT_ALL,
  },
];

  