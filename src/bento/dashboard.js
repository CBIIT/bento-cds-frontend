import { sortType, InputTypes } from '@bento-core/facet-filter';

const CASES = 'Cases';

// --------------- Facet resetIcon link configuration --------------
// Ideal size for resetIcon is 16x16 px
export const resetIcon = {
  src: 'https://raw.githubusercontent.com/CBIIT/datacommons-assets/main/bento/images/icons/svgs/Clear-icon.svg',
  alt: 'Reset icon',
  size: '12 px',
};

// --------------- Dashboard Sidebar Sections styling --------------
export const facetSectionVariables = {
  Cases: {
    isExpanded: true,
    hasSearch: true,
  },
  Samples: {
    isExpanded: true,
  },
  Files: {
    isExpanded: true,
  },
};

export const facetsConfig = [
  {
    section: CASES,
    label: "Study",
    apiPath: "filterSubjectCountByStudy",
    apiForFiltering: "filterSubjectCountByStudy",
    datafield: "studies",
    field: "group",
    type: InputTypes.CHECKBOX,
    sort_type: sortType.ALPHABET,
    show: true,
  },
  {
    section: CASES,
    label: "Experimental Strategy",
    apiPath: "subjectCountByExperimentalStrategy",
    apiForFiltering: "filterSubjectCountByExperimentalStrategy",
    datafield: "experimental_strategies",
    field: "group",
    type: InputTypes.CHECKBOX,
    sort_type: sortType.ALPHABET,
    show: true,
  },
  {
    section: CASES,
    label: "Sample Tumor Status",
    apiPath: "filterSubjectCountByIsTumor",
    apiForFiltering: "filterSubjectCountByIsTumor",
    datafield: "is_tumor",
    field: "group",
    type: InputTypes.CHECKBOX,
    sort_type: sortType.ALPHABET,
    show: true,
  },
  {
    section: CASES,
    label: "Gender",
    apiPath: "filterSubjectCountByGender",
    apiForFiltering: "filterSubjectCountByGender",
    datafield: "genders",
    field: "group",
    type: InputTypes.CHECKBOX,
    sort_type: sortType.ALPHABET,
    show: true,
  },
  {
    section: CASES,
    label: "File Type",
    apiPath: "filterSubjectCountByFileType",
    apiForFiltering: "filterSubjectCountByFileType",
    datafield: "file_types",
    field: "group",
    type: InputTypes.CHECKBOX,
    sort_type: sortType.ALPHABET,
    show: true,
  },
  {
    section: CASES,
    label: "PHS Accession",
    apiPath: "filterSubjectCountByPhsAccession",
    apiForFiltering: "filterSubjectCountByPhsAccession",
    datafield: "phs_accession",
    field: "group",
    type: InputTypes.CHECKBOX,
    sort_type: sortType.ALPHABET,
    show: true,
  },
  {
    section: CASES,
    label: "Num of Study Participants",
    apiPath: "filterSubjectCountByNumberOfStudyParticipants",
    apiForFiltering: "filterSubjectCountByNumberOfStudyParticipants",
    datafield: "number_of_study_participants",
    ApiLowerBoundName: "lowerBound",
    ApiUpperBoundName: "upperBound",
    show: true,
    slider: true,
    type: InputTypes.SLIDER,
    sort_type: "none",
    minLowerBound: 0,
    maxUpperBound: 25445,
    quantifier: "X",
  },
  {
    section: CASES,
    label: "Num of study Samples",
    apiPath: "filterSubjectCountByNumberOfStudySamples",
    apiForFiltering: "filterSubjectCountByNumberOfStudySamples",
    datafield: "number_of_study_samples",
    ApiLowerBoundName: "lowerBound",
    ApiUpperBoundName: "upperBound",
    show: true,
    slider: true,
    type: InputTypes.SLIDER,
    sort_type: "none",
    minLowerBound: 0,
    maxUpperBound: 40872,
    quantifier: "X",
  },
  {
    section: CASES,
    label: "study data types",
    apiPath: "filterSubjectCountByStudyDataType",
    apiForFiltering: "filterSubjectCountByStudyDataType",
    datafield: "study_data_types",
    field: "group",
    type: InputTypes.CHECKBOX,
    sort_type: sortType.ALPHABET,
    show: true,
  },
  {
    section: CASES,
    label: "library strategy",
    apiPath: "filterSubjectCountByLibraryStrategy",
    apiForFiltering: "filterSubjectCountByLibraryStrategy",
    datafield: "library_strategies",
    field: "group",
    type: InputTypes.CHECKBOX,
    sort_type: sortType.ALPHABET,
    show: true,
  },
  {
    section: CASES,
    label: "library source",
    apiPath: "filterSubjectCountByLibrarySource",
    apiForFiltering: "filterSubjectCountByLibrarySource",
    datafield: "library_sources",
    field: "group",
    type: InputTypes.CHECKBOX,
    sort_type: sortType.ALPHABET,
    show: true,
  },
  {
    section: CASES,
    label: "library selection",
    apiPath: "filterSubjectCountByLibrarySelection",
    apiForFiltering: "filterSubjectCountByLibrarySelection",
    datafield: "library_selections",
    field: "group",
    type: InputTypes.CHECKBOX,
    sort_type: sortType.ALPHABET,
    show: true,
  },
  {
    section: CASES,
    label: "library layout",
    apiPath: "filterSubjectCountByLibraryLayout",
    apiForFiltering: "filterSubjectCountByLibraryLayout",
    datafield: "library_layouts",
    field: "group",
    type: InputTypes.CHECKBOX,
    sort_type: sortType.ALPHABET,
    show: true,
  },
  {
    section: CASES,
    label: "platform",
    apiPath: "filterSubjectCountByPlatform",
    apiForFiltering: "filterSubjectCountByPlatform",
    datafield: "platforms",
    field: "group",
    type: InputTypes.CHECKBOX,
    sort_type: sortType.ALPHABET,
    show: true,
  },
  {
    section: CASES,
    label: "instrument model",
    apiPath: "filterSubjectCountByInstrumentModel",
    apiForFiltering: "filterSubjectCountByInstrumentModel",
    datafield: "instrument_models",
    field: "group",
    type: InputTypes.CHECKBOX,
    sort_type: sortType.ALPHABET,
    show: true,
  },
  {
    section: CASES,
    label: "reference genome assembly",
    apiPath: "filterSubjectCountByReferenceGenomeAssembly",
    apiForFiltering: "filterSubjectCountByReferenceGenomeAssembly",
    datafield: "reference_genome_assemblies",
    field: "group",
    type: InputTypes.CHECKBOX,
    sort_type: sortType.ALPHABET,
    show: true,
  },
  {
    section: CASES,
    label: "PRIMARY DIAGNOSIS",
    apiPath: "filterSubjectCountByPrimaryDiagnosis",
    apiForFiltering: "filterSubjectCountByPrimaryDiagnosis",
    datafield: "primary_diagnoses",
    field: "group",
    type: InputTypes.CHECKBOX,
    sort_type: sortType.ALPHABET,
    show: true,
  },
];

// --------------- Dashboard Widgets configuration --------------
// Sunburst chart color scheme
export const SUNBURST_COLORS_LEVEL_1 = [
  '#7dc242',
  '#274fa5',
  '#79287c',
  '#f78f48',
  '#057ebd',
];

export const SUNBURST_COLORS_LEVEL_2 = [
  '#057ebd',
  '#f78f48',
  '#79287c',
  '#0e3151',
  '#057ebd',
  '#7dc242',
];

// A maximum of 6 widgets are allowed
// for donuts only the following are required: type, title, dataName
//
// type: 'sunburst' | 'donut'
// title: string
// dataName: string
// datatable_level1_field: string
// datatable_level1_colors: string[]
// datatable_level2_field: string
// datatable_level2_colors: string[]
// sliceTitle: string (optional)
export const widgetConfig = [
  {
    type: 'donut',
    title: 'Experimental Strategy',
    dataName: 'subjectCountByExperimentalStrategy',
  },
  {
    type: 'donut',
    title: 'Gender',
    dataName: 'subjectCountByGender',
  },
  {
    type: 'donut',
    title: 'File Type',
    dataName: 'subjectCountByFileType',
  },
  {
    type: 'donut',
    title: 'Study Data Types',
    dataName: 'subjectCountByStudyDataType',
  },
];
