import gql from 'graphql-tag';

export const statsStyling = {
  global: {
    horizontalStyle: false,
    statTitleFirst: false,
    height: '59px',
    background: '#B4E2F5',
    top: '159px',
  },
  statsGroup: {
    margin: '6px 0px',
    padding: '0.5% 6% 2% 10% !important',
    borderRight: '1.25px solid #000000',
    minWidth: '300px !important',
  },
  statsIcon: {
    width: '44px',
    height: '44px',
    margin: '2px 0px 0px -45px',
  },
  statCount: {
    color: '#0467BD',
    fontFamily: 'Oswald',
    fontSize: '20px',
    margin: '0px 0px -4px 8px',
    float: 'left',
    padding: '4px 60px',
  },
  statTitle: {
    color: '#000000',
    fontFamily: 'Nunito',
    fontSize: '11px',
    textTransform: 'uppercase',
    margin: '0px 0px 0px 8px',
    float: 'left',
  },
};

export const globalStatsData = [
  // A maximum of 6 stats are allowed
  {
    statTitle: 'Studies',
    type: 'field',
    statAPI: 'numberOfStudies',
    statIconSrc: 'https://raw.githubusercontent.com/CBIIT/datacommons-assets/main/cds/icons/svgs/studies.svg',
    statIconAlt: 'Studies Stats Bar Icon',
  },
  {
    statTitle: 'Participants',
    type: 'field',
    statAPI: 'numberOfSubjects',
    statIconSrc: 'https://raw.githubusercontent.com/CBIIT/datacommons-assets/main/cds/icons/svgs/participants.svg',
    statIconAlt: 'Participants Stats Bar Icon',
  },
  {
    statTitle: 'Samples',
    type: 'field',
    statAPI: 'numberOfSamples',
    statIconSrc: 'https://raw.githubusercontent.com/CBIIT/datacommons-assets/main/cds/icons/svgs/samples.svg',
    statIconAlt: 'Samples Stats Bar Icon',
  },
  {
    statTitle: 'Files',
    type: 'field',
    statAPI: 'numberOfFiles',
    statIconSrc: 'https://raw.githubusercontent.com/CBIIT/datacommons-assets/main/cds/icons/svgs/files.svg',
    statIconAlt: 'Files Stats Bar Icon',
  },
];

// --------------- GraphQL query - Retrieve stats details --------------
export const GET_GLOBAL_STATS_DATA_QUERY = gql`{
    numberOfStudies
    numberOfSubjects
    numberOfSamples
    numberOfFiles
    numberOfDiseaseSites
  }
  `;
