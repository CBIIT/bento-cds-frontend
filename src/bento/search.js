import gql from 'graphql-tag';

// --------------- Icons configuration --------------
// Ideal size for programListingIcon is 100x100 px
// Ideal size for externalLinkIcon is 16x16 px
export const programListingIcon = {
  src: 'https://raw.githubusercontent.com/CBIIT/datacommons-assets/main/bento/images/icons/svgs/programIcon.svg',
  alt: 'CDS program logo',
};

export const SEARCH = gql`
query globalSearch($input: String){
    globalSearch(input: $input) {
        studies {
            study_code
        }
        subjects {
            subject_id
        }
        samples {
            sample_id
        }
        samples {
            sample_id
        }
        files {
            file_id
        }
        model {
            node_name
        }
        about_page {
            text
        }
    }
}
`;

export const SEARCH_PAGE_RESULT_PROGRAM = gql`
query globalSearch($input: String, $first: Int, $offset: Int){
    globalSearch(
        input: $input
        first: $first
        offset: $offset
    ) {
        programs {
            type
            program_id
            program_name
            program_code
        }
}
}
`;

export const SEARCH_PAGE_RESULT_STUDIES = gql`
query globalSearch($input: String, $first: Int, $offset: Int){
    globalSearch(
        input: $input
        first: $first
        offset: $offset
    ) {
        studies {
            type
            phs_accession
            study_name
            study_code
        }
}
}
`;

export const SEARCH_PAGE_RESULT_SUBJECTS = gql`
query globalSearch($input: String, $first: Int, $offset: Int){
    globalSearch(
        input: $input
        first: $first
        offset: $offset
    ) {
        subjects {
            type
            subject_id
            study
            site
        }
}
}
`;

export const SEARCH_PAGE_RESULT_SAMPLES = gql`
query globalSearch($input: String, $first: Int, $offset: Int){
    globalSearch(
        input: $input
        first: $first
        offset: $offset
    ) {
        samples {
            type
            subject_id
            sample_id
            is_tumor
            analyte_type
        }
}
}
`;

export const SEARCH_PAGE_RESULT_FILES = gql`
query globalSearch($input: String, $first: Int, $offset: Int){
    globalSearch(
        input: $input
        first: $first
        offset: $offset
    ) {
        files {
            type
            subject_id
            sample_id
            file_id
            file_name
            file_type
        }
}
}
`;

export const SEARCH_PAGE_RESULT_MODEL = gql`
query globalSearch($input: String, $first: Int, $offset: Int){
    globalSearch(
        input: $input
        first: $first
        offset: $offset
    ) {
        model {
            type
            node_name
            property_name
            property_description
            property_required
            property_type
            value
            highlight
        }
}
}
`;

export const SEARCH_PAGE_RESULT_ABOUT = gql`
query globalSearch($input: String, $first: Int, $offset: Int){
    globalSearch(
        input: $input
        first: $first
        offset: $offset
    ) {

        about_page {
            type
            text
            page
            title
        }
}
}
`;

export const SEARCH_PAGE_RESULTS = gql`
query globalSearch($input: String, $first: Int, $offset: Int){
    globalSearch(
        input: $input
        first: $first
        offset: $offset
    ) {
        study_count
        subject_count
        sample_count
        file_count
        model_count
        about_count
}
}
`;
