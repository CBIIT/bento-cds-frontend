import React, { useEffect, useState } from 'react';
import { useApolloClient } from '@apollo/client';
import { connect } from 'react-redux';
import { useLocation, useHistory } from 'react-router-dom';
import { CircularProgress } from '@material-ui/core';
import { getFilters } from '@bento-core/facet-filter';
import DashTemplateView from './DashTemplateView';
import { DASHBOARD_QUERY, tabIndexMap } from '../../bento/dashboardTabData';
import { onClearAllAndSelectFacetValue } from './sideBar/BentoFilterUtils';

const getDashData = (states) => {
  const {
    filterState,
    localFindUpload, localFindAutocomplete,
  } = states;

  const { search } = useLocation();
  const tabName = search && new URLSearchParams(search).get('selectedTab') ? new URLSearchParams(search).get('selectedTab').toLowerCase() : 'participants';
  const tabIndex = tabIndexMap[tabName];

  //Useful for one facet and one facet value pair selection
  const selectedFacet = search && new URLSearchParams(search).get('selectedFacet') ? new URLSearchParams(search).get('selectedFacet') : null;
  const selectedFacetValue = search && new URLSearchParams(search).get('selectedFacetValue') ? new URLSearchParams(search).get('selectedFacetValue') : null;

   if (selectedFacet && selectedFacetValue) {
      onClearAllAndSelectFacetValue(selectedFacet, selectedFacetValue);
      const history = useHistory();
      history.push('/data');
    }

  const client = useApolloClient();
  async function getData(activeFilters) {
    const result = await client.query({
      query: DASHBOARD_QUERY,
      variables: activeFilters,
    })
      .then((response) => response.data);
    return result;
  }

  const [dashData, setDashData] = useState(null);

  const activeFilters = {
    ...getFilters(filterState),
    subject_ids: [
      ...(localFindUpload || []).map((obj) => obj.subject_id),
      ...(localFindAutocomplete || []).map((obj) => obj.title),
    ],
  };

  useEffect(() => {
    const controller = new AbortController();
    getData(activeFilters).then((result) => {
      if (result.searchSubjects) {
        setDashData(result.searchSubjects);
      }
    });
    return () => controller.abort();
  }, [filterState, localFindUpload, localFindAutocomplete]);
  return { dashData, activeFilters, tabIndex };
};

const DashTemplateController = ((props) => {
  const { dashData, activeFilters, tabIndex } = getDashData(props);

  if (!dashData) {
    return (<CircularProgress />);
  }

  return (
    <DashTemplateView
      {...props}
      dashData={dashData}
      activeFilters={activeFilters}
      tabIndex={tabIndex}
    />
  );
});

const mapStateToProps = (state) => ({
  filterState: state.statusReducer.filterState,
  localFindUpload: state.localFind.upload,
  localFindAutocomplete: state.localFind.autocomplete,
});

export default connect(mapStateToProps, null)(DashTemplateController);