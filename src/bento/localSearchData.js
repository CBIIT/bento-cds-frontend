import gql from 'graphql-tag';

// --------------- GraphQL query - Retrieve stats details --------------
export const GET_ALL_IDS = gql`{
  idsLists{
    subjectIds
    sampleIds
    fileIds
    fileNames
}
  }
  `;

export const GET_SUBJECT_IDS = gql`
  query search ($subject_ids: [String]){
    findSubjectIdsInList (subject_ids: $subject_ids) {
        subject_id
        phs_accession
    }
}
`;

export const GET_IDS_BY_TYPE = (type) => gql`{
  idsLists {
    ${type}
  }
}
`;

export const GET_SEARCH_NODES_BY_FACET = gql`
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

export const SUBJECT_OVERVIEW_QUERY = gql`
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

export const ageAtIndex = 10;
