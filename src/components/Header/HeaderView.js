import React, { useState, useEffect } from 'react';
import { Header } from 'bento-components';
import { withRouter } from 'react-router-dom';
import headerData from '../../bento/globalHeaderData';
import SearchAUtoFill from '../Search/searchAutoFillComponent';

const customStyle = {
  headerBar: {
    zIndex: '999',
  },
  nihLogoImg: {
    height: '54px',
    width: '463px',
    marginLeft: '8px',
    minHeight: '54px',
  },
};

const ICDCHeader = (props) => {
  const { location } = props;
  const initialTopValue = 168; // Set your initial top value here
  const [topValue, setTopValue] = useState(initialTopValue);

  useEffect(() => {
    const handleScroll = () => {
      // Calculate the new top value based on scroll position
      const scrolledDownAmt = window.scrollY;
      const newTopValue = Math.max(0, initialTopValue - scrolledDownAmt);

      setTopValue(newTopValue);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [initialTopValue]);

  const scrollingStyle = {
    ...customStyle.headerBar,
    top: `${topValue}px`,
  };
  return location.pathname.match('/search') ? (
    <Header
      logo={headerData.globalHeaderLogo}
      alt={headerData.globalHeaderLogoAltText}
      homeLink={headerData.globalHeaderLogoLink}
      customStyle={{ ...customStyle, headerBar: scrollingStyle }}
    />
  ) : (
    <Header
      logo={headerData.globalHeaderLogo}
      alt={headerData.globalHeaderLogoAltText}
      homeLink={headerData.globalHeaderLogoLink}
      SearchComponent={SearchAUtoFill}
      customStyle={{ ...customStyle, headerBar: scrollingStyle }}
    />
  );
};

export default withRouter(ICDCHeader);
