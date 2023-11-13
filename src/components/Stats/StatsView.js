import React, { useState, useEffect } from 'react';
import { StatsBar } from 'bento-components';
import { statsStyling, globalStatsData } from '../../bento/globalStatsData';

const StatsView = ({ data }) => {
  const govAlertEl = document.getElementById('govAlertMsg');
  const headerHeight = 100;
  const navBarHeight = 39;
  const initialTopValue = headerHeight + navBarHeight + (govAlertEl ? govAlertEl.scrollHeight : 0);
  const [topValue, setTopValue] = useState(initialTopValue);

  useEffect(() => {
    const handleScroll = () => {
      // Calculate the new top value based on scroll position
      const scrolledDownAmt = window.scrollY;
      const newTopValue = Math.max(headerHeight + navBarHeight, initialTopValue - scrolledDownAmt);

      setTopValue(newTopValue);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [initialTopValue]);

  const scrollingStyle = {
    ...statsStyling.global,
    top: `${topValue}px`,
  };

  return (
    <>
      <StatsBar
        data={data}
        globalStatsData={globalStatsData}
        statsStyling={{ ...statsStyling, global: scrollingStyle }}
      />
    </>
  );
};

export default StatsView;
