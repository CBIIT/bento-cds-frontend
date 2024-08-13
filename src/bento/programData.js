import gql from 'graphql-tag';
import { cellTypes } from '@bento-core/table';
import { STATIC_CONTENT } from '../assets/staticContent';

// --------------- Icons configuration --------------
// Ideal size for programListingIcon is 100x100 px
// Ideal size for externalLinkIcon is 16x16 px
const programListingIcon = {
  src: STATIC_CONTENT.icons.PROGRAM_ICON_IMAGE,
  alt: 'CDS program logo',
};

const externalLinkIcon = {
  src: STATIC_CONTENT.icons.EXTERNAL_LINK_ICON_SVG,
  alt: 'External link icon',
};

// --------------- Table configuration --------------
const table = {
  // Set 'display' to false to hide the table entirely
  name: 'programs',
  display: true,
  dataKey: 'acronym',
  tableID: 'programs_table',
  // Table title
  title: 'Programs',
  // Field name for table data, need to be updated only when using a different GraphQL query
  dataField: 'programList',
  // Value must be one of the 'field' in columns
  defaultSortField: 'acronym',
  // 'asc' or 'desc'
  defaultSortDirection: 'asc',
  // Set 'selectableRows' to true to show the row selection
  selectableRows: false,
  // A maximum of 10 columns are allowed
  columns: [
    {
      dataField: 'acronym',
      header: 'Program Alias',
      tooltipText: 'Sort by Program Alias',
      cellType: cellTypes.LINK,
      linkAttr: {
        rootPath: '/program',
        pathParams: ['name']
      },
      display: true,
    },
    {
      dataField: 'name',
      header: 'Program Name',
      tooltipText: 'Sort by Program Name',
      display: true,
    },
    {
      dataField: 'num_studies',
      header: 'Number of Studies',
      tooltipText: 'Sort by Number of Studies',
      display: true,
    },
  ],
};

// --------------- GraphQL query - Retrieve program info --------------
const GET_PROGRAMS_DATA_QUERY = gql`{
  programList{
    acronym
    name
    website
    num_studies
  }
}
 `;

export {
  programListingIcon,
  externalLinkIcon,
  table,
  GET_PROGRAMS_DATA_QUERY,
};
