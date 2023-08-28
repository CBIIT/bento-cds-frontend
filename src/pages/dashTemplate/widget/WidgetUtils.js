import {
  transformInitialDataForSunburst,
} from '@bento-core/util';

/**
 * Removes empty subjects from donut data.
 *
 * @param {object} data
 * @returns {object} filtered data
 */
const removeEmptySubjectsFromDonutData = (data) => data.filter((item) => item.subjects !== 0);

/**
 * Returns the widgets data formatted as key:dataset pairs
 *
 * @param {object} data
 * @param {object} custodianConfig
 * @return {object} formatted data
 */
export function formatWidgetData(data, custodianConfig) {
  const formatted = custodianConfig.reduce((acc, widget) => {
    const {
      type, dataName, datatable_level1_field, datatable_level2_field,
      datatable_level1_colors, datatable_level2_colors,
    } = widget;

    const dataset = type === 'sunburst'
      ? transformInitialDataForSunburst(data[dataName], datatable_level1_field, datatable_level2_field, 'children', datatable_level1_colors, datatable_level2_colors)
      : removeEmptySubjectsFromDonutData(data[dataName]);

    return { ...acc, [dataName]: dataset };
  }, {});

  return formatted;
}
/**
 * Sorts the widgets data by group in REVERSE alphabetical order
 *
 * @param {object} dataset
 */
export function sortWidgetData(dataset){
  //Takes in a an array of objects and sorts by the property 'group' in reverse alphabetical order
  dataset.sort((a, b) => {
    const groupA = a.group.toUpperCase(); // Convert to uppercase for case-insensitive sorting
    const groupB = b.group.toUpperCase();
    
    if (groupA < groupB) {
      return 1;
    }
    if (groupA > groupB) {
      return -1;
    }
    return 0; // groups are equal, no change needed
  });
}
