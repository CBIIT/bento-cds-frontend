export const navBarstyling = {
  global: {
    backgroundColor: '#142D64',
    height: '39px',
    padding: '9px 20px 0px 20px',
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
    iconSize: '30px',
    padding: '6px 20px 0px 5px',
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
    labelText: 'explore',
    type: 'link',
    link: '/explore',
  },
  {
    labelText: 'programs',
    type: 'link',
    link: '/programs',
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
        labelText: 'NCIs Cloud Services',
        link: '/cloudresources',
      },
      {
        labelText: 'How To Submit Data',
        link: '/submit',
      },
      {
        labelText: 'Accessing and Analyzing Data',
        link: '/analysis',
      },
      {
        labelText: 'CDS Data Model',
        link: '/resources',
      },
      {
        labelText: 'GraphQl',
        link: '/graphql',
      },
      {
        labelText: 'Bento Framework',
        link: '/bento',
      },
      {
        labelText: 'CDS New Request Questionnaire',
        link: '/datasubmit',
      },
      {
        labelText: 'CDS Data Releases',
        link: '/releases',
      },

    ],
  },
];

export const navBarCartData = {
  cartLabel: '',
  cartLink: '/fileCentricCart',
  cartIcon: 'https://raw.githubusercontent.com/CBIIT/datacommons-assets/main/bento/images/icons/svgs/Icon-Cart-Navbar.svg',
  cartIconAlt: 'cart_logo',
  cartLabelType: 'labelUnderCount',
};
