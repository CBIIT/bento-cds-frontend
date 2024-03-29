import gql from 'graphql-tag';

export const searchEnabled = true;

export const filterTabTitleText = 'Filter';
export const searchTabTitleText = 'Search';

// --------------- Dashboard Sidebar Filters configuration --------------
// A maximum of 12 facetSearchData are allowed
export const facetSearchData = [
  {
    label: 'Study', field: 'group', api: 'filterSubjectCountByStudy', apiForFiltering: 'filterSubjectCountByStudy', datafield: 'studies', section: 'Cases', show: true,
  },
  {
    label: 'Experimental Strategy', field: 'group', api: 'subjectCountByExperimentalStrategy', apiForFiltering: 'filterSubjectCountByExperimentalStrategy', datafield: 'experimental_strategies', section: 'Cases', show: true,
  },
  {
    label: 'Sample Tumor Status', field: 'group', api: 'filterSubjectCountByIsTumor', apiForFiltering: 'filterSubjectCountByIsTumor', datafield: 'is_tumor', section: 'Cases', show: true,
  },
  {
    label: 'Gender', field: 'group', api: 'filterSubjectCountByGender', apiForFiltering: 'filterSubjectCountByGender', datafield: 'genders', section: 'Cases', show: true,
  },
  {
    label: 'File Type', field: 'group', api: 'filterSubjectCountByFileType', apiForFiltering: 'filterSubjectCountByFileType', datafield: 'file_types', section: 'Cases', show: true,
  },
  {
    label: 'PHS Accession ', field: 'group', api: 'filterSubjectCountByPhsAccession', apiForFiltering: 'filterSubjectCountByPhsAccession', datafield: 'phs_accession', section: 'Cases', show: true,
  },
  {
    label: 'Num of Study Participants', api: 'filterSubjectCountByNumberOfStudyParticipants', apiForFiltering: 'filterSubjectCountByNumberOfStudyParticipants', datafield: 'number_of_study_participants', section: 'Cases', show: true, slider: true, quantifier: 'Study Participants',
  },
  {
    label: 'Num of study Samples', api: 'filterSubjectCountByNumberOfStudySamples', apiForFiltering: 'filterSubjectCountByNumberOfStudySamples', datafield: 'number_of_study_samples', section: 'Cases', show: true, slider: true, quantifier: 'Study Samples',
  },
  {
    label: 'study data types ', field: 'group', api: 'filterSubjectCountByStudyDataType', apiForFiltering: 'filterSubjectCountByStudyDataType', datafield: 'study_data_types', section: 'Cases', show: true,
  },
  {
    label: 'library strategy', field: 'group', api: 'filterSubjectCountByLibraryStrategy', apiForFiltering: 'filterSubjectCountByLibraryStrategy', datafield: 'library_strategies', section: 'Cases', show: true,
  },
  {
    label: 'library source', field: 'group', api: 'filterSubjectCountByLibrarySource', apiForFiltering: 'filterSubjectCountByLibrarySource', datafield: 'library_sources', section: 'Cases', show: true,
  },
  {
    label: 'library selection', field: 'group', api: 'filterSubjectCountByLibrarySelection', apiForFiltering: 'filterSubjectCountByLibrarySelection', datafield: 'library_selections', section: 'Cases', show: true,
  },
  {
    label: 'library layout', field: 'group', api: 'filterSubjectCountByLibraryLayout', apiForFiltering: 'filterSubjectCountByLibraryLayout', datafield: 'library_layouts', section: 'Cases', show: true,
  },
  {
    label: 'platform', field: 'group', api: 'filterSubjectCountByPlatform', apiForFiltering: 'filterSubjectCountByPlatform', datafield: 'platforms', section: 'Cases', show: true,
  },
  {
    label: 'instrument model', field: 'group', api: 'filterSubjectCountByInstrumentModel', apiForFiltering: 'filterSubjectCountByInstrumentModel', datafield: 'instrument_models', section: 'Cases', show: true,
  },
  {
    label: 'reference genome assembly', field: 'group', api: 'filterSubjectCountByReferenceGenomeAssembly', apiForFiltering: 'filterSubjectCountByReferenceGenomeAssembly', datafield: 'reference_genome_assemblies', section: 'Cases', show: true,
  },
  {
    label: 'PRIMARY DIAGNOSIS', field: 'group', api: 'filterSubjectCountByPrimaryDiagnosis', apiForFiltering: 'filterSubjectCountByPrimaryDiagnosis', datafield: 'primary_diagnoses', section: 'Cases', show: true,
  },
];

// --------------- Dashboard Sidebar Sections styling --------------
export const facetSectionVariables = {
  Cases: {
    color: '#0E6292',
    backgroundColor: '#C3E8F7',
    checkBoxColorsOne: '#C3E8F7',
    checkBoxColorsTwo: '#C3E8F7',
    height: '5px',
    isExpanded: true,
  },
  Samples: {
    color: '#10BEFF',
    backgroundColor: '#C3EAF5',
    checkBoxColorsOne: '#C9EBF7',
    checkBoxColorsTwo: '#E8F8FE',
    height: '5px',
    isExpanded: true,
  },
  Files: {
    color: '#E636E4',
    backgroundColor: '#F5C3F1',
    checkBoxColorsOne: '#FBE3FB',
    checkBoxColorsTwo: '#FFF2FF',
    height: '5px',
    isExpanded: true,
  },
};

// --------------- Dashboard Facet Local Find Configuration --------------

export const facetSectionFindApi = {
  Cases: {
    api: 'subjectIds',
  },
  Samples: {
    api: 'sampleIds',
  },
  Files: {
    api: 'fileIds',
  },
};

export const search = {
  fileIds: {
    color: '#E636E4',
    checkBoxColorsOne: '#FBE3FB',
    checkBoxColorsTwo: '#FFF2FF',
    height: '5px',
    isExpanded: false,
  },
  subjectIds: {
    color: '#0E6292',
    checkBoxColorsOne: '#E8F7DC',
    checkBoxColorsTwo: '#F5FDEE',
    height: '5px',
    isExpanded: false,
  },
  sampleIds: {
    color: '#10BEFF',
    checkBoxColorsOne: '#C9EBF7',
    checkBoxColorsTwo: '#E8F8FE',
    height: '5px',
    isExpanded: false,
  },
  fileNames: {
    color: '#E636E4',
    checkBoxColorsOne: '#FBE3FB',
    checkBoxColorsTwo: '#FFF2FF',
    height: '5px',
    isExpanded: false,
  },
};

// --------------- Default Dashboard Sidebar Sections styling --------------
export const defaultFacetSectionVariables = {
  color: '#000000',
  checkBoxColorsOne: '#E8F7DC',
  checkBoxColorsTwo: '#F5FDEE',
  height: '5px',
  isExpanded: false,
};

export const defaultSearch = {
  color: '#000000',
  checkBoxColorsOne: '#E8F7DC',
  checkBoxColorsTwo: '#F5FDEE',
  height: '5px',
  isExpanded: false,
};

// --------------- Dashboard ActiveFiltersQuery configuration --------------
export const displayActiveFiltersQuery = true;

// --------------- Dashboard Widgets configuration --------------
// A maximum of 6 widgets are allowed
export const widgetsData = [
  {
    type: 'donut',
    label: 'Experimental Strategy',
    dataName: 'subjectCountByExperimentalStrategy',
    datatable_field: 'experimental_strategies',
    titleText: 'Files',
    show: true,
  },
  {
    type: 'donut',
    label: 'Gender',
    dataName: 'subjectCountByGender',
    datatable_field: 'genders',
    titleText: 'Files',
    show: true,
  },
  {
    type: 'donut',
    label: 'File Type',
    dataName: 'subjectCountByFileType',
    datatable_field: 'file_types',
    titleText: 'Files',
    show: true,
  },
  {
    type: 'donut',
    label: 'Study Data Types',
    dataName: 'subjectCountByStudyDataType',
    datatable_field: 'study_data_types',
    titleText: 'Files',
    show: true,
  },
];

// --------------- Dahboard Table external link configuration --------------
// Ideal size for externalLinkIcon is 16x16 px
export const externalLinkIcon = {
  src: 'https://raw.githubusercontent.com/CBIIT/datacommons-assets/main/bento/images/icons/svgs/externalLinkIcon.svg',
  alt: 'External link icon',
};

// --------------- Facet resetIcon link configuration --------------
// Ideal size for resetIcon is 16x16 px
export const resetIcon = {
  src: 'https://raw.githubusercontent.com/CBIIT/datacommons-assets/main/bento/images/icons/svgs/Clear-icon.svg',
  alt: 'Reset icon',
  size: '12 px',
};
export const resetIconFilter = {
  src: 'https://raw.githubusercontent.com/CBIIT/datacommons-assets/main/bento/images/icons/svgs/Clear-icon.svg',
  alt: 'Reset icon',
  size: '12 px',
};

// --------------- Dashboard Table configuration --------------
export const dashboardTable = {
  tableTitle: 'Cases',
  tableData: [
    // A maximum of 10 columns (tableData) are allowed
    {
      dataField: 'subject_id',
      header: 'Participant ID',
      sort: 'asc',
      link: '/case/{subject_id}',
      primary: true,
      display: true,
    },
    {
      dataField: 'program',
      header: 'Program Code',
      sort: 'asc',
      link: '/program/{program_id}',
      display: true,
    },
    {
      dataField: 'program_id',
      header: 'Program ID',
      sort: 'asc',
      display: false,
    },
    {
      dataField: 'study_acronym',
      header: 'Arm',
      sort: 'asc',
      link: '/arm/{study_acronym}',
      display: true,
    },
    {
      dataField: 'diagnosis',
      header: 'Diagnosis',
      sort: 'asc',
      display: true,
    },
    {
      dataField: 'recurrence_score',
      header: 'Recurrence Score',
      sort: 'asc',
      display: true,
    },
    {
      dataField: 'tumor_size',
      header: 'Tumor Size (cm)',
      sort: 'asc',
      display: true,
    },
    {
      dataField: 'er_status',
      header: 'ER Status',
      sort: 'asc',
      display: true,
    },
    {
      dataField: 'pr_status',
      header: 'PR Status',
      sort: 'asc',
      display: true,
    },
    {
      dataField: 'age_at_index',
      header: 'Age (years)',
      sort: 'asc',
      display: true,
    },
    {
      dataField: 'survival_time',
      header: 'Survival (days)',
      sort: 'asc',
      display: true,
    },
  ],
};

// --------------- Sorting related labels configuration --------------
export const sortLabels = {
  sortAlphabetically: 'Sort alphabetically',
  sortByCount: 'Sort by counts',
  showMore: '...expand to see all selections',
};

export const showCheckboxCount = 5;

// --------------- Dashboard Query configuration --------------
export const GET_DASHBOARD_DATA_QUERY = gql`{
  numberOfPrograms
  numberOfStudies
  numberOfSubjects
  numberOfSamples
  numberOfLabProcedures
  numberOfFiles
    subjectCountByStudy{
        group
        subjects
      }
    subjectCountByDiagnoses{
        group
        subjects
      }
    subjectCountByRecurrenceScore{
        group
        subjects
      }
    subjectCountByTumorSize{
        group
        subjects
      }
    subjectCountByChemotherapyRegimen{
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
  subjectCountByChemotherapyRegimen{
        group
        subjects
      }
      subjectCountByEndocrineTherapy{
    group
    subjects
  }
  subjectCountByFileType{
    group
    subjects
}
subjectCountByFileAssociation {
    group
    subjects
}
subjectCountByTissueComposition{
    group
    subjects
}
filterSubjectCountByAge{
  lowerBound
  upperBound
  subjects
}
subjectCountByTissueType{
    group
    subjects
}
    armsByPrograms {
        program
        caseSize
        children {
            arm
            caseSize
            size
        }
    }
    subjectOverViewPaged(first: 100) {
      subject_id
      program_id
      study_info
      samples
      program
      study_acronym
      diagnosis
      recurrence_score
      tumor_size
      tumor_grade
      er_status
      pr_status
      chemotherapy
      endocrine_therapy
      menopause_status
      age_at_index
      survival_time
      lab_procedures
      files{
        file_id
      }
  }
  }`;

// --------------- Dashboard Query configuration --------------
export const GET_DASHBOARD_TABLE_DATA_QUERY = gql`{
  subjectOverViewPaged(first: 1000000) {
      subject_id
      program_id
      study_info
      samples
      program
      study_acronym
      diagnosis
      recurrence_score
      tumor_size
      tumor_grade
      er_status
      pr_status
      chemotherapy
      endocrine_therapy
      menopause_status
      age_at_index
      survival_time
      lab_procedures
      files{
        file_id
      }
  }
  }`;
