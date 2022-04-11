import gql from 'graphql-tag';
import { customMyFilesTabDownloadCSV } from './tableDownloadCSV';

export const navBarCartData = {
  cartLabel: 'Cart',
  cartLink: '/fileCentricCart',
  cartIcon: 'https://raw.githubusercontent.com/CBIIT/datacommons-assets/main/bento/images/icons/svgs/Icon-Cart-Navbar.svg',
  cartIconAlt: 'cart_logo',
};

// --------------- Files limit configuration --------------
export const alertMessage = 'The cart is limited to 1000 files. Please narrow the search criteria or remove some files from the cart to add more.';
export const maximumNumberOfFilesAllowedInTheCart = 1000;

export const myFilesPageData = {
  mainTitle: 'Cart >',
  subTitle: 'Selected Files',
  downButtonText: 'DOWNLOAD MANIFEST',
  headerIconSrc: 'https://raw.githubusercontent.com/CBIIT/datacommons-assets/main/bento/images/icons/svgs/Icon-Cart-Workflow.svg',
  headerIconAlt: 'Bento MyFiles header logo',
  manifestFileName: 'BENTO File Manifest',
  tooltipIcon: 'https://raw.githubusercontent.com/google/material-design-icons/master/src/action/help/materialicons/24px.svg',
  tooltipAlt: 'tooltip icon',
  tooltipMessage: 'To access and analyze files: select and remove unwanted files,  click the “Download Manifest” button, and upload the resulting Manifest file to your Seven Bridges Genomics account.',
  textareaPlaceholder: 'Please add a description for the CSV file you are about to download.',
  errorMessage: 'An error has occurred in loading CART',
  popUpWindow: {
    showNumberOfFileBeRemoved: true,
    messagePart1: 'Remove ',
    messagePart2: 'All files (',
    messagePart3: ') ',
    messagePart4: 'From Cart',
    okButtonText: 'Ok',
    cancelButtonText: 'Cancel',
  },
};

export const manifestData = {
  keysToInclude: ['subject_id', 'file_name', 'file_id', 'md5sum'],
  header: ['Case ID', 'File Name', 'File ID', 'Md5sum', 'User Comments'],
};

// --------------- File table configuration --------------

export const table = {
  dataField: 'fileOverview',
  // Value must be one of the 'dataField's in "columns"
  defaultSortField: 'file_name',
  // 'asc' or 'desc'
  defaultSortDirection: 'asc',
  paginationAPIField: 'fileOverview',
  tableDownloadCSV: customMyFilesTabDownloadCSV,

  columns: [
    {
      dataField: 'file_name',
      header: 'File Name',
      sort: 'asc',
      primary: true,
      display: true,
    },
    {
      dataField: 'file_id',
      header: 'File ID',
      sort: 'asc',
      display: false,
    },
    {
      dataField: 'study_acronym',
      header: 'Study Acronym',
      sort: 'asc',
      display: true,
    },
    {
      dataField: 'phs_accession',
      header: 'PHS Accession',
      sort: 'asc',
      display: true,
    },
    {
      dataField: 'subject_id',
      header: 'Subject Id',
      sort: 'asc',
      display: true,
    },
    {
      dataField: 'sample_id',
      header: 'Sample Id',
      sort: 'asc',
      display: true,
    },
    {
      dataField: 'file_type',
      header: 'File Type',
      sort: 'asc',
      link: '/program/{program_id}',
      display: true,
    },
    {
      dataField: 'file_size',
      header: 'File Size',
      sort: 'asc',
      display: false,
    },
    {
      dataField: 'md5sum',
      header: 'Md5Sum',
      display: false,
    },
  ],
};

// --------------- GraphQL query - Retrieve selected cases info --------------
export const GET_MY_CART_DATA_QUERY = gql`
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
}`;
