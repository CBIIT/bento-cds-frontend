export const navBarstyling = {
  global: {
    backgroundColor: '#0E6292;',
    height: '39px',
    padding: '9px 20px 0px 20px',
    fontColor: '#bbefff',
    activeLabel: '1px solid #bbefff',
    textTransform: 'capitalize',
  },
  dropDownIcon: {
    displayIcon: false,
    fontSize: '18px',
    margin: '0px 0px 0px 0px',
  },
  dropdownMenu: {
    paper: {
      background: '#309EC4',
      width: '200px',
      padding: '5px 18px 18px 18px',
      marginLeft: '15px',
      position: 'absolute',
      marginTop: '-1px',
      borderRadius: '0',
    },
    link: {
      overflowWrap: 'normal',
      textDecoration: 'none',
      color: 'black',
      fontSize: '14px',
      fontWeight: '600',
      lineSpacing: '1px',
      lineHeight: '18px',
      fontFamily: 'Raleway, sans-serif',
      display: 'block',
      marginTop: '10px',
      '&:hover': {
        cursor: 'pointer',
        color: 'white',
      },
    },
  },
  cart: {
    iconSize: '26px',
    padding: '6px 16px 0px 5px',
  },
  cartLabel: {
    color: '#FFAC20',
  },
};

export const navBarData = [
  // A maximum of 5 nav bar items are allowed
  // A maximum of 9 dropDownLinks items are allowed
  {
    labelText: 'home',
    type: 'link',
    link: '/home',
  },
  {
    labelText: 'data',
    type: 'link',
    link: '/data',
  },
  {
    labelText: 'programs',
    type: 'link',
    link: '/programs',
  },
  {
    labelText: 'studies',
    type: 'link',
    link: '/studies',
  },
  {
    labelText: 'about',
    type: 'dropdown',
    dropDownLinks: [
      {
        labelText: 'About CDS',
        link: '/cancerDataService',
      },
      {
        labelText: 'About CRDC',
        link: '/crdc',
      },
      {
        labelText: 'How To Submit Data',
        link: '/submit',
      },
      {
        labelText: 'CDS Data Model',
        link: '/resources',
      },
      {
        labelText: 'Graphql',
        link: '/graphQl',
      },
      {
        labelText: 'Bento Framework',
        link: '/bento',
      },
    ],
  },
];

export const navBarCartData = {
  // cartLabel: 'My Files',
  // cartLink: '/fileCentricCart',
  // cartIcon: 'https://raw.githubusercontent.com/CBIIT/datacommons-assets/main/cds/icons/cartIcon.svg',
  // cartIconAlt: 'cart_logo',
  cartLabel: '',
  cartLink: '/fileCentricCart',
  cartIcon: 'https://raw.githubusercontent.com/CBIIT/datacommons-assets/main/cds/icons/navBarCartIcon.svg',
  cartIconAlt: 'cart_logo',
  cartLabelType: 'labelUnderCount',
};
