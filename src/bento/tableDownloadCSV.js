import gql from 'graphql-tag';

export const GET_CASES_TAB = gql`
query subjectOverViewPaged($subject_ids: [String], $offset: Int = 0, $first: Int = 1000, $order_by:String =""){
  subjectOverViewPaged(subject_ids: $subject_ids, first: $first, offset: $offset, order_by: $order_by) {
      subject_id
      program
      program_id
      study_acronym
      study_short_description
      study_info
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
      files {
            file_id
      }
      lab_procedures
  }
}
`;

export const customCasesTabDownloadCSV = {
  keysToInclude: ['subject_id', 'program', 'program_id', 'study_acronym', 'diagnosis', 'tumor_size', 'er_status', 'pr_status', 'age_at_index', 'survival_time'],
  header: ['Case ID', 'Program Code', 'Program ID', 'Arm', 'Diagnosis', 'Tumor Size', 'ER Status', 'PR Status', 'Age', 'Survival'],
  query: GET_CASES_TAB,
  apiVariable: 'subjectOverViewPaged',
  fileName: 'tableDownload',
  defaultFullTableDownload: false,
};

export const GET_SAMPLES_TAB = gql`
query sampleOverview($sample_ids: [String], $offset: Int = 0, $first: Int = 1000, $order_by:String =""){
  sampleOverview(sample_ids: $sample_ids, offset: $offset,first: $first, order_by: $order_by) {
    sample_id
    subject_id
    program
    program_id
    arm
    diagnosis
    tissue_type
    tissue_composition
    sample_anatomic_site
    sample_procurement_method
    platform
    files 
}
}
`;

export const customSamplesTabDownloadCSV = {
  keysToInclude: ['sample_id', 'subject_id', 'program', 'arm', 'diagnosis', 'tissue_type', 'tissue_composition', 'sample_anatomic_site', 'sample_procurement_method', 'platform'],
  header: ['Sample ID', 'Case Id', 'Program Code', 'Arm', 'Diagnosis', 'Tissue Type', 'Tissue Composition', 'Sample Anatomic Site', 'Sample Procurement Method', 'Platform'],
  query: GET_SAMPLES_TAB,
  apiVariable: 'sampleOverview',
  fileName: 'tableDownload',
  defaultFullTableDownload: false,
};

export const GET_FILES_TAB = gql`
query fileOverview($file_ids: [String], $offset: Int = 0, $first: Int = 10, $order_by:String ="file_name"){
  fileOverview(file_ids: $file_ids, offset: $offset,first: $first, order_by: $order_by) {
    file_id
    file_name
    association
    file_description
    file_format
    file_size
    program
    program_id
    arm
    subject_id
    sample_id
    diagnosis
  }
}
`;

export const customFilesTabDownloadCSV = {
  keysToInclude: ['file_name', 'association', 'file_description', 'file_format', 'file_size', 'program', 'arm', 'subject_id', 'sample_id', 'diagnosis'],
  header: ['File Name', 'Association', 'Description', 'File Format', 'Size', 'Program Code', 'Arm', 'Case Id', 'Sample ID', 'Diagnosis'],
  query: GET_FILES_TAB,
  apiVariable: 'fileOverview',
  fileName: 'tableDownload',
  defaultFullTableDownload: false,
};

export const MY_CART_MANIFEST_QUERY = gql`
query filesInList($file_ids: [String], $offset: Int = 0, $first: Int = 1000, $order_by:String ="") {
    filesInList(file_ids: $file_ids, offset: $offset,first: $first, order_by: $order_by) {
      file_name
      file_size
      file_id
      file_type
      md5sum
      experimental_strategy
      study_acronym
      phs_accession
      study_data_type
      accesses
      image_modality
      organ_or_tissue
      license
    
      library_layouts
      library_strategy
      
      subject_id
      gender
      race
      primary_diagnoses
            
      sample_id
      analyte_type
      is_tumor
    }
}`;

export const customMyFilesTabDownloadCSV = {
  keysToInclude: ['subject_id', 'file_name', 'file_id', 'md5sum'],
  header: ['Participant ID', 'File Name', 'File ID', 'Md5sum', 'User Comments'],
  query: MY_CART_MANIFEST_QUERY,
  apiVariable: 'filesInList',
  fileName: 'BENTO File Manifest',
  defaultFullTableDownload: false,
};
