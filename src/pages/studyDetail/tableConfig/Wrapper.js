/* eslint-disable import/prefer-default-export */
import { types, btnTypes } from '@bento-core/paginated-table';
import { GET_ALL_FILEIDS_FILESTAB_FOR_SELECT_ALL } from '../../../bento/dashboardTabData';
import { table, tooltipContent } from '../../../bento/studyDetailData';

export const footerConfig = [{
  container: 'buttons',
  size: 'xl',
  clsName: 'container_footer',
  section: table.name,
  items: [
    {
      title: table.buttonText,
      clsName: 'add_selected_button',
      type: types.BUTTON,
      role: btnTypes.ADD_SELECTED_FILES,
      btnType: btnTypes.ADD_SELECTED_FILES,
      tooltipCofig: tooltipContent,
      conditional: true,
      addFileQuery: GET_ALL_FILEIDS_FILESTAB_FOR_SELECT_ALL,
      dataKey: table.addFilesRequestVariableKey,
      responseKeys: table.addFilesResponseKeys,
    }],
}];
