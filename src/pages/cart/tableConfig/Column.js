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
export const configColumn = ({
  columns,
  deleteAllFiles,
  deleteCartFile,
}) => {
  /**
  * display columns as configuration
  * set custom cell render for column
  */
  const displayCustomView = [...columns].map((column) => {
    if (column.cellType === cellTypes.CUSTOM_ELEM) {
      return {
        ...column,
        customCellRender: (props) => <CustomCellView {...props} />,
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
