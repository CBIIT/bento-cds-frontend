import React, { useState, useEffect } from 'react';
import { NavBar } from 'bento-components';
import {
  navBarData, navBarCartData, navBarstyling, externalLinks,
} from '../../bento/navigationBarData';
import Login from '../GoogleAuth/loginComponent';
import globalData from '../../bento/siteWideConfig';

const BentoNavBar = ({ cartFieldIds }) => {
  const initialTopValue = 168 + 100; // Set your initial top value here
  const [topValue, setTopValue] = useState(initialTopValue);

  useEffect(() => {
    const handleScroll = () => {
      // Calculate the new top value based on scroll position
      const scrolledDownAmt = window.scrollY;
      const newTopValue = Math.max(100, initialTopValue - scrolledDownAmt);

      setTopValue(newTopValue);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [initialTopValue]);

  const scrollingStyle = {
    ...navBarstyling.global,
    marginTop: `${topValue}px`,
  };

  return (
    <>
      {globalData.enableAuthentication ? (
        <NavBar
          navBarData={navBarData}
          navBarCartData={navBarCartData}
          navBarstyling={{ ...navBarstyling, global: scrollingStyle }}
          numberOfCases={cartFieldIds.length || 0}
          LoginComponent={Login}
        />
      ) : (
        <NavBar
          navBarData={navBarData}
          navBarCartData={navBarCartData}
          navBarstyling={{ ...navBarstyling, global: scrollingStyle }}
          externalLinksFlag
          externalLinks={externalLinks}
          numberOfCases={cartFieldIds.length || 0}
        />
      ) }
    </>
  );
};
export default BentoNavBar;
