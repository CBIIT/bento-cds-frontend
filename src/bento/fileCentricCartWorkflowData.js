import React from "react";
import gql from 'graphql-tag';
import { cellTypes, dataFormatTypes } from '@bento-core/table';
import { types, btnTypes } from '@bento-core/paginated-table';
import { customMyFilesTabDownloadCSV, MY_CART_MANIFEST_QUERY} from './tableDownloadCSV';
import CartMessage from '../pages/cart/customComponent/cartMessage';
import ReadMe from '../pages/cart/customComponent/readme/readmeButton';
import ExportButton from "../pages/cart/customComponent/exportButton/exportButtonController";

export const navBarCartData = {
  cartLabel: 'Cart',
  cartLink: '/fileCentricCart',
  cartIcon: 'https://raw.githubusercontent.com/CBIIT/datacommons-assets/main/bento/images/icons/svgs/Icon-Cart-Navbar.svg',
  cartIconAlt: 'cart_logo',
};

// --------------- Files limit configuration --------------
export const alertMessage = 'The cart is limited to 1000 files. Please narrow the search criteria or remove some files from the cart to add more.';
export const maximumNumberOfFilesAllowedInTheCart = 1000;

// --------------- Tooltip configuration --------------
export const tooltipContent = {
  icon: 'https://raw.githubusercontent.com/google/material-design-icons/master/src/action/help/materialicons/24px.svg',
  alt: 'tooltipIcon',
  clsName: 'tooltip_icon',
  myFiles: 'To access and analyze files: select and remove unwanted files,  click the “Download Manifest” button, and upload the resulting Manifest file to your Seven Bridges Genomics account.',
  arrow: true,
  styles: {
    border: '#03A383 1px solid',
  },
};

//BENTO-2455 Configuration set for Bento 4.0.
export const myFilesPageData = {
  manifestFileName: 'CDS File Manifest',
  tooltipIcon: 'https://raw.githubusercontent.com/google/material-design-icons/master/src/action/help/materialicons/24px.svg',
  tooltipAlt: 'tooltip icon',
  tooltipMessage: 'To access and analyze files: select and remove unwanted files,  click the “Download Manifest” button, and upload the resulting Manifest file to your Seven Bridges Genomics account.',
  errorMessage: 'An error has occurred in loading CART',
  layout: [
    {
      container: 'outer_layout',
      size: 'xl',
      clsName: 'container_outer_layout',
      items: [
        {
          clsName: 'cart_icon',
          type: types.ICON,
          src: 'https://raw.githubusercontent.com/CBIIT/datacommons-assets/main/cds/icons/cartIcon.png',
          alt: 'Bento MyFiles header logo',
        },
        {
          clsName: 'cart_header_text',
          text: 'Cart >',
          type: types.TEXT,
        },
        {
          clsName: 'cart_sel_files_text',
          text: 'Selected Files',
          type: types.TEXT,
        },
      ],
    },
    {
    container: 'buttons',
    size: 'xl',
    clsName: 'container_header',
    items: [
      {
        type: types.CUSTOM_ELEM,
        customViewElem: (props) => <ReadMe {...props}/>
      },
      {
        type: types.CUSTOM_ELEM,
        customViewElem: (props) => <ExportButton {...props}/>
      },
      {
        title: 'DOWNLOAD MANIFEST',
        clsName: 'download_manifest',
        type: types.BUTTON,
        role: btnTypes.DOWNLOAD_MANIFEST,
        btnType: btnTypes.DOWNLOAD_MANIFEST,
        tooltipCofig: tooltipContent,
      }],
  },
  {
    container: 'paginatedTable',
    paginatedTable: true,
  },
  {
    container: 'cart_message',
    size: 'xl',
    clsName: 'cart_message_outer',
    items: [
      {
        type: types.CUSTOM_ELEM,
        customViewElem: ()=><CartMessage/>, 
      }],
  },
  {
    container: 'buttons',
    size: 'xl',
    clsName: 'container_footer',
    items: [
      {
        clsName: 'manifest_comments',
        type: types.TEXT_INPUT,
        placeholder: 'Optional: Please add a description for the CSV file you are about to download.',
      }],
  }]
};


export const manifestData = {
  keysToInclude: ['file_id', 'file_name', 'subject_id', 'md5sum', 'associated_file', 'associated_drs_uri', 'associated_md5sum', 'study_acronym', 'phs_accession', 'sample_id', 'accesses', 'file_type', 'gender', 'race', 'primary_diagnosis', 'is_tumor', 'analyte_type', 'organ_or_tissue', 'study_data_type', 'library_strategy', 'image_modality', 'experimental_strategy', 'library_layouts', 'license', 'file_size'],
  header: ['drs_uri', 'name', 'Participant ID', 'Md5sum', 'Associated File', 'Associated File DRS URI', 'Associated File md5sum', 'Study Name', 'Accession', 'Sample Id', 'Study Access', 'File Type', 'Gender', 'Race', 'Primary Diagnosis', 'Sample Tumor Status', 'Analyte Type', 'Organ or Tissue', 'Study Data Type', 'Library Strategy', ' Image Modality', 'Experimental Strategy', 'Library Layouts', 'License', 'File Size (in bytes)', 'User Comments'],
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
  filesInList: fileOverview(
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

// --------------- File table configuration --------------

export const table = {
  dataField: 'filesInList',
  // Value must be one of the 'dataField's in "columns"
  defaultSortField: 'file_name',
  // 'asc' or 'desc'
  api: GET_MY_CART_DATA_QUERY,
  manifestAPI: MY_CART_MANIFEST_QUERY,
  defaultSortDirection: 'asc',
  paginationAPIField: 'filesInList',
  tableDownloadCSV: customMyFilesTabDownloadCSV,
  headerPagination: true,
  columns: [
    {
      dataField: 'file_name',
      header: 'File Name',
      display: true,
      tooltipText: 'sort',
    },
    {
      dataField: 'file_id',
      header: 'File ID',
      display: false,
      appendString:'drs://nci-crdc.datacommons.io/', 
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
      cellType: cellTypes.CUSTOM_ELEM,
    },
    {
      dataField: 'sample_id',
      header: 'Sample Id',
      display: true,
      tooltipText: 'sort',
      role: cellTypes.DISPLAY,
      cellType: cellTypes.CUSTOM_ELEM,
    },
    {
      dataField: 'accesses',
      header: 'Study Access',
      display: true,
      tooltipText: 'sort',
      role: cellTypes.DISPLAY,
    },
    {
      dataField: 'file_type',
      header: 'File Type',
      display: true,
      tooltipText: 'sort',
      role: cellTypes.DISPLAY,
    },
    {
      dataField: 'gender',
      header: 'Gender',
      display: false,
      tooltipText: 'sort',
      role: cellTypes.DISPLAY,
      cellType: cellTypes.CUSTOM_ELEM,
    },
    {
      dataField: 'race',
      header: 'Race',
      display: false,
      tooltipText: 'sort',
      role: cellTypes.DISPLAY,
      cellType: cellTypes.CUSTOM_ELEM,
    },
    {
      dataField: 'primary_diagnoses',
      header: 'Primary Diagnosis',
      display: false,
      tooltipText: 'sort',
      role: cellTypes.DISPLAY,
      cellType: cellTypes.CUSTOM_ELEM,
    },
    {
      dataField: 'is_tumor',
      header: 'Sample Tumor Status',
      display: false,
      tooltipText: 'sort',
      role: cellTypes.DISPLAY,
      cellType: cellTypes.CUSTOM_ELEM,
    },
    {
      dataField: 'analyte_type',
      header: 'Analyte Type',
      display: false,
      tooltipText: 'sort',
      role: cellTypes.DISPLAY,
      cellType: cellTypes.CUSTOM_ELEM,
    },
    {
      dataField: 'organ_or_tissue',
      header: 'Organ or Tissue',
      display: false,
      tooltipText: 'sort',
      role: cellTypes.DISPLAY,
    },
    {
      dataField: 'study_data_type',
      header: 'Study Data Type',
      display: false,
      tooltipText: 'sort',
      role: cellTypes.DISPLAY,
    },
    {
      dataField: 'library_strategy',
      header: 'Library Strategy',
      display: false,
      tooltipText: 'sort',
      role: cellTypes.DISPLAY,
      cellType: cellTypes.CUSTOM_ELEM,
    },
    {
      dataField: 'image_modality',
      header: 'Image Modality',
      display: false,
      tooltipText: 'sort',
      role: cellTypes.DISPLAY,
    },
    {
      dataField: 'experimental_strategy',
      header: 'Experimental Strategy',
      display: false,
      tooltipText: 'sort',
      role: cellTypes.DISPLAY,
      cellType: cellTypes.CUSTOM_ELEM,
    },
    {
      dataField: 'library_layouts',
      header: 'Library Layouts',
      display: false,
      tooltipText: 'sort',
      role: cellTypes.DISPLAY,
      cellType: cellTypes.CUSTOM_ELEM,
    },
    {
      dataField: 'license',
      header: 'License',
      display: false,
      tooltipText: 'sort',
      role: cellTypes.DISPLAY,
    },
    {
      dataField: 'file_size',
      header: 'File Size',
      // set formatBytes to true to display file size (in bytes) in a more human readable format
      display: false,
      dataFormatType: dataFormatTypes.FORMAT_BYTES,
      cellType: cellTypes.FORMAT_DATA,
      role: cellTypes.DISPLAY,
      tooltipText: 'sort',
    },
    {
      dataField: 'md5sum',
      header: 'Md5Sum',
      display: false,
      tooltipText: 'sort',
      role: cellTypes.DISPLAY,
    },
    {
      dataField: 'remove',
      cellType: cellTypes.DELETE,
      header: 'Remove',
      headerType: cellTypes.DELETE,
      display: true,
      role: cellTypes.DISPLAY
    },
  ],
  tableMsg: {
    noMatch: 'No Matching Records Found',
  },
};

