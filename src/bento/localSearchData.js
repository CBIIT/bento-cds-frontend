import gql from 'graphql-tag';

// --------------- GraphQL query - Retrieve stats details --------------

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
