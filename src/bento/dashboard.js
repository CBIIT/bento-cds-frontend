import { sortType, InputTypes } from '@bento-core/facet-filter';

const DEMOGRAPHICS = 'Demographics'; 
const STUDY = 'Study';
const SAMPLES = 'Samples';
const SEQUENCING = 'Sequencing'; 
const IMAGING = 'Imaging';
const DIAGNOSIS = 'Diagnosis';
const FILES = 'Files';

// --------------- Facet resetIcon link configuration --------------
// Ideal size for resetIcon is 16x16 px
export const resetIcon = {
  src: 'https://raw.githubusercontent.com/CBIIT/datacommons-assets/main/bento/images/icons/svgs/Clear-icon.svg',
  alt: 'Reset icon',
  size: '12 px',
};

// --------------- Dashboard Sidebar Sections styling --------------
export const facetSectionVariables = {
  Demographics: {
    isExpanded: true,
    hasSearch: true,
  },
  Study: {
    isExpanded: true,
  },
  Samples: {
    isExpanded: true,
  },
  Sequencing: {
    isExpanded: true,
  },
  Imaging: {
    isExpanded: true,
  },
  Diagnosis: {
    isExpanded: true,
  },
  Files: {
    isExpanded: true,
  },
  Extra: {
    isExpanded: true,
  },
};

export const facetsConfig = [
  // DEMOGRAPHICS
  {
    section: DEMOGRAPHICS,
    label: "Gender",
    apiPath: "filterSubjectCountByGender",
    apiForFiltering: "filterSubjectCountByGender",
    datafield: "genders",
    field: "group",
    type: InputTypes.CHECKBOX,
    sort_type: sortType.ALPHABET,
    show: true,
  },
  // STUDY
  {
    section: STUDY,
    label: "Study Name",
    apiPath: "filterSubjectCountByStudy",
    apiForFiltering: "filterSubjectCountByStudy",
    datafield: "studies",
    field: "group",
    type: InputTypes.CHECKBOX,
    sort_type: sortType.ALPHABET,
    show: true,
  },
  {
    section: STUDY,
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
    section: STUDY,
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
    section: STUDY,
    label: "Experimental Strategy",
    apiPath: "filterSubjectCountByExperimentalStrategy",
    apiForFiltering: "filterSubjectCountByExperimentalStrategy",
    datafield: "experimental_strategies",
    field: "group",
    type: InputTypes.CHECKBOX,
    sort_type: sortType.ALPHABET,
    show: true,
  },
  {
    section: STUDY,
    label: "Num of Study Participants",
    apiPath: "filterSubjectCountByNumberOfStudyParticipants",
    apiForFiltering: "filterSubjectCountByNumberOfStudyParticipants",
    datafield: "number_of_study_participants",
    ApiLowerBoundName: "lowerBound",
    ApiUpperBoundName: "upperBound",
    show: true,
    slider: true,
    type: InputTypes.SLIDER,
    sort_type: sortType.NONE,
    minLowerBound: 0,
    maxUpperBound: 25445,
    quantifier: "Study Participants",
  },
  //SAMPLES
  {
    section: SAMPLES,
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
    section: SAMPLES,
    label: "sample type",
    apiPath: "filterSubjectCountBySampleType",
    apiForFiltering: "filterSubjectCountBySampleType",
    datafield: "sample_types",
    field: "group",
    type: InputTypes.CHECKBOX,
    sort_type: sortType.ALPHABET,
    show: true,
  },
  {
    section: SAMPLES,
    label: "Num of study Samples",
    apiPath: "filterSubjectCountByNumberOfStudySamples",
    apiForFiltering: "filterSubjectCountByNumberOfStudySamples",
    datafield: "number_of_study_samples",
    ApiLowerBoundName: "lowerBound",
    ApiUpperBoundName: "upperBound",
    show: true,
    slider: true,
    type: InputTypes.SLIDER,
    sort_type: sortType.NONE,
    minLowerBound: 0,
    maxUpperBound: 40872,
    quantifier: "Study Samples",
  },
  // SEQUENCING
  {
    section: SEQUENCING,
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
    section: SEQUENCING,
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
    section: SEQUENCING,
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
    section: SEQUENCING,
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
    section: SEQUENCING,
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
    section: SEQUENCING,
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
    section: SEQUENCING,
    label: "reference genome assembly",
    apiPath: "filterSubjectCountByReferenceGenomeAssembly",
    apiForFiltering: "filterSubjectCountByReferenceGenomeAssembly",
    datafield: "reference_genome_assemblies",
    field: "group",
    type: InputTypes.CHECKBOX,
    sort_type: sortType.ALPHABET,
    show: true,
  },
  // IMAGING
  {
    section: IMAGING,
    label: "image modality",
    apiPath: "filterSubjectCountByImageModality",
    apiForFiltering: "filterSubjectCountByImageModality",
    datafield: "image_modality",
    field: "group",
    type: InputTypes.CHECKBOX,
    sort_type: sortType.ALPHABET,
    show: true,
  },
  // DIAGNOSIS
  {
    section: DIAGNOSIS,
    label: "PRIMARY DIAGNOSIS",
    apiPath: "filterSubjectCountByPrimaryDiagnosis",
    apiForFiltering: "filterSubjectCountByPrimaryDiagnosis",
    datafield: "primary_diagnoses",
    field: "group",
    type: InputTypes.CHECKBOX,
    sort_type: sortType.ALPHABET,
    show: true,
  },
  // FILES
  {
    section: FILES,
    label: "File Type",
    apiPath: "filterSubjectCountByFileType",
    apiForFiltering: "filterSubjectCountByFileType",
    datafield: "file_types",
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
    dataName: 'donutCountByExperimentalStrategy',
    sliceTitle: 'Files',
  },
  {
    type: 'donut',
    title: 'Gender',
    dataName: 'donutCountByGender',
    sliceTitle: 'Participants',
  },
  {
    type: 'donut',
    title: 'File Type',
    dataName: 'donutCountByFileType',
    sliceTitle: 'Files',
  },
  {
    type: 'donut',
    title: 'Study Data Types',
    dataName: 'donutCountByStudyDataTypes',
    sliceTitle: 'Files',
  },
  {
    type: 'donut',
    title: 'Image Modality',
    dataName: 'donutCountByImageModality',
    sliceTitle: 'Files',
  },
  {
    type: 'donut',
    title: 'Sample Type',
    dataName: 'donutCountBySampleType',
    sliceTitle: 'Samples',
  },
];
