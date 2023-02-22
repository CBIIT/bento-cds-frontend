import React from 'react';
import { Header } from 'bento-components';
import { withRouter } from 'react-router-dom';
import headerData from '../../bento/globalHeaderData';
import SearchAUtoFill from '../Search/searchAutoFillComponent';

const customStyle = {
  headerBar: {
    top: '20px',
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
  return location.pathname.match('/search') ? (
    <Header
      logo={headerData.globalHeaderLogo}
      alt={headerData.globalHeaderLogoAltText}
      homeLink={headerData.globalHeaderLogoLink}
      customStyle={customStyle}

    />
  ) : (
    <Header
      logo={headerData.globalHeaderLogo}
      alt={headerData.globalHeaderLogoAltText}
      homeLink={headerData.globalHeaderLogoLink}
      SearchComponent={SearchAUtoFill}
      customStyle={customStyle}
    />
  );
};

export default withRouter(ICDCHeader);
