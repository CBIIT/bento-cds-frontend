import React from 'react';
import { Typography } from '@material-ui/core';
import { cellTypes, headerTypes } from '@bento-core/table';

export const CustomCellView = (props) => {
  const {
    label,
  } = props;

  if (Array.isArray(label)) {
    if (label.length > 5){
      return (<Typography>{label.slice(0,5).join(", ") + ", ..."}</Typography>);
    }
    return (<Typography>{label.join(", ")}</Typography>);
  }

  // other custom elem
  return (<></>);
};

export const CustomHeaderCellView = () => (<></>);

/**
* set column configuration
* @param {*} columns
* @returns config columns
*/
export const configColumn = (columns) => {
  /**
  * display columns as configuration
  * set custom cell render for column
  */
  const displayColumns = columns;
  const displayCustomView = [...displayColumns].map((column) => {
    if (column.cellType === cellTypes.CUSTOM_ELEM) {
      return {
        ...column,
        customCellRender: (props) => <CustomCellView {...props} />,
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
    return column;
  });
  return displayCustomHeader;
};
