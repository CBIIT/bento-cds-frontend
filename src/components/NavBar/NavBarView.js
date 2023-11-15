import React from 'react';
import { NavBar } from 'bento-components';
import {
  navBarData, navBarCartData, navBarstyling, externalLinks,
} from '../../bento/navigationBarData';
import Login from '../GoogleAuth/loginComponent';
import globalData from '../../bento/siteWideConfig';
import NavBarThemeProvider from './NavBarThemeConfig';

const BentoNavBar = ({ cartFieldIds }) => (
  <>
    <NavBarThemeProvider>
      <div style={{ position: 'relative' }}>
        {globalData.enableAuthentication ? (
          <NavBar
            navBarData={navBarData}
            navBarCartData={navBarCartData}
            navBarstyling={navBarstyling}
            numberOfCases={cartFieldIds.length || 0}
            LoginComponent={Login}
          />
        ) : (
          <NavBar
            navBarData={navBarData}
            navBarCartData={navBarCartData}
            navBarstyling={navBarstyling}
            externalLinksFlag
            externalLinks={externalLinks}
            numberOfCases={cartFieldIds.length || 0}
          />
        ) }
      </div>
    </NavBarThemeProvider>
  </>
);
export default BentoNavBar;
