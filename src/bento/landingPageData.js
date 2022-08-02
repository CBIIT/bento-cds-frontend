import gql from 'graphql-tag';
// import Test from '../assets/header/CTDC_Logo.svg';

// The ideal image size of landingPageHero 1400x600px
// Tile1 Tile2 Tile3 images 293x349 px
// Tile4 image optimum size 600x 436 px
export const landingPageData = {
  callToActionTitle: 'Enabling secure and scalable storage and sharing of data',
  callToActionDescription: 'A data repository under the Cancer Research Data Commons (CRDC) ecosystem for storing cancer research data generated by NCI funded programs.',
  callToActionButtonText: 'EXPLORE CDS DATA',
  callToActionLink: '/data',
  heroLeftBg: {
    alt: 'Alt tag1',
    img: 'https://raw.githubusercontent.com/CBIIT/datacommons-assets/main/cds/landing/LeftSide.png',
  },
  heroRightBg: {
    alt: 'Alt tag1',
    img: 'https://raw.githubusercontent.com/CBIIT/datacommons-assets/main/cds/landing/RightSide.png',
  },
  landingPageHero: {
    alt: 'Alt tag1',
    img: 'https://raw.githubusercontent.com/CBIIT/datacommons-assets/main/cds/landing/landingPageHero.png',
  },
  landingPageTile: {
    alt: 'Alt tag1',
    img: 'https://raw.githubusercontent.com/CBIIT/datacommons-assets/main/cds/landing/tilesBackgroundGrid.png',
  },
  landingPageStatsBar: [
    {
      statTitle: 'Studies',
      statAPI: 'numberOfStudies',
    },
    {
      statTitle: 'Disease Sites',
      statAPI: 'numberOfDiseaseSites',
    },
    {
      statTitle: 'participants',
      statAPI: 'numberOfSubjects',
    },
    {
      statTitle: 'samples',
      statAPI: 'numberOfSamples',
    },
    {
      statTitle: 'files',
      statAPI: 'numberOfFiles',
    },
  ],
  tile1: {
    alt: '',
    img: 'https://raw.githubusercontent.com/CBIIT/datacommons-assets/main/cds/landing/landingTile1.png',
    titleText: 'ABOUT CANCER DATA SERVICE',
    descriptionText: 'The Cancer Data Service (CDS) is a data repository under the Cancer Research Data Commons (CRDC) infrastructure for storing cancer research data generated by NCI funded programs. The CDS provides secure and authorized storage and data sharing capabilities in the cloud for studies that aren’t a good match for other CRDC repositories.',
    callToActionText: 'Explore',
    callToActionLink: '/bento', // This links to the "About" static page.
  },
  tile2: {
    alt: '',
    img: 'https://raw.githubusercontent.com/CBIIT/datacommons-assets/main/cds/landing/landingTile2.png',
    titleText: 'STUDIES',
    descriptionText: 'View summaries of the studies within CDS.',
    callToActionText: 'Go to studies listing',
    callToActionLink: '/studies', // This links to the studies Listing Page.
  },
  tile3: {
    alt: '',
    img: 'https://raw.githubusercontent.com/CBIIT/datacommons-assets/main/cds/landing/landingTile3.png',
    titleText: 'SUBMIT DATA',
    descriptionText: 'Submitters should start by contacting the CDS Help desk',
    mailToLink: 'cdshelpdesk@mail.nih.gov',
    callToActionText: 'Start the process',
    callToActionLink: '/submit', // Link to the "Submit" Static Page
  },
  tile4: {
    alt: '',
    img: 'https://raw.githubusercontent.com/CBIIT/datacommons-assets/main/cds/landing/landingTile4.png',
    titleText: 'CDS DATA',
    descriptionText: 'Search all the Cases and build cohorts from all the Studies within the CDS. The data files from these cohorts can then be analyzed in the Cloud Resources.',
    callToActionText: 'Learn More',
    callToActionLink: '/data', // This links to the cases dashboard.
  },
};

// --------------- GraphQL query - Retrieve Landing page data --------------
export const GET_LANDING_PAGE_DATA_QUERY = gql`{
  numberOfStudies
  numberOfSubjects 
  numberOfSamples 
  numberOfFiles 
  numberOfDiseaseSites 
  }
  `;
