import React from 'react';
import { cellTypes, headerTypes } from '@bento-core/table';
import { Link as RouterLink } from 'react-router-dom';
import { Typography, Link } from '@material-ui/core';
import { customTypes } from '../../../bento/studyData';

export const CustomCellView = () => (<></>);

export const CustomHeaderCellView = () => (<></>);

const DashboardLinkFromList = ({ dataField, facet, facetValue, ...rest }) => {
  if (!dataField || !facet || !facetValue || !rest[dataField] || !rest[dataField].length) {
    return <></>;
  }

  const items = rest[dataField].split(",");

  const encodeFacetQuery = (facet, value) => encodeURIComponent(JSON.stringify({ [facet]: [value] }));
  return (
    <>
      {items.map((item, idx) =>
        idx === 0 ? (
          <Link
            component={RouterLink}
            to={(location) => ({ ...location, pathname: `/data/${encodeFacetQuery(facet, rest[facetValue])}` })}
            className={cellTypes.LINK}
            underline='none'
          >
            <Typography>{item}</Typography>
          </Link>
        ) : (
          <Typography>{item}</Typography>
        )
      )}
    </>
  );
};

const CustomNumberFormatCellView = ({ label }) => (
    <>
      {parseFloat(label).toLocaleString()}
    </>
  );


/**
* set column configuration
* @param {*} columns
* @returns config columns
*/
export const configColumn = ({
  columns,
  deleteAllFiles,
  deleteCartFile,
}) => {
  /**
  * display columns as configuration
  * set custom cell render for column
  */
  const displayColumns = columns.filter((col) => col.display);
  const displayCustomView = [...displayColumns].map((column) => {
    if (column.cellType === cellTypes.CUSTOM_ELEM && column.customType === customTypes.DASHBOARD_LINK_FROM_LIST) {
      
      return {
        ...column,
        customCellRender: (props) => <DashboardLinkFromList {...props} />,
      };
    }
    if (column.cellType === cellTypes.CUSTOM_ELEM) {
      return {
        ...column,
        customCellRender: (props) => <CustomNumberFormatCellView {...props} />,
      };
    }
    if (column.cellType === cellTypes.DELETE) {
      return {
        ...column,
        cellEventHandler: deleteCartFile,
      };
    }
    return column;
  });

  /**
  * custom header view configuration
  */
  const displayCustomHeader = [...displayCustomView].map((column) => {
    if (column.headerType === headerTypes.CUSTOM_ELEM) {
      return {
        ...column,
        customColHeaderRender: (props) => <CustomHeaderCellView {...props} />,
      };
    }

    /*
    * props deleteAllFiles
    */
    if (column.headerType === headerTypes.DELETE) {
      return {
        ...column,
        headerEventHandler: deleteAllFiles,
      };
    }
    return column;
  });
  return displayCustomHeader;
};
