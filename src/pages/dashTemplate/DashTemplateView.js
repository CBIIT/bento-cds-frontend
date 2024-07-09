import React from 'react';
import { withStyles } from '@material-ui/core';
import styles from './DashTemplateStyle';
import BentoFacetFilter from './sideBar/BentoFacetFilter';
import WidgetView from './widget/WidgetView';
import StatsView from '../../components/Stats/StatsView';
import TabsView from './tabs/TabsView';
import QueryBarView from './filterQueryBar/QueryBarView';
import usePageTitle from '../../components/Analytics/usePageTitle';

const DashTemplate = ({
  classes,
  dashData,
  activeFilters,
  tabIndex,
}) => {
  usePageTitle("Data");

  return ( 
    <div className={classes.dashboardContainer}>
      <StatsView data={dashData} />
      <div>
        <div className={classes.content}>
          <div className={classes.sideBar}>
            <BentoFacetFilter
              searchData={dashData}
              activeFilters={activeFilters}
            />
          </div>
          <div className={classes.rightContent}>
            <div className={classes.widgetsContainer}>
              <QueryBarView data={dashData} />
              <WidgetView
                data={dashData}
              />
              <TabsView
                dashboardStats={dashData}
                activeFilters={activeFilters}
                tabIndex={tabIndex}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default withStyles(styles)(DashTemplate);
