import gql from 'graphql-tag';

export const statsStyling = {
  global: {
    horizontalStyle: false,
    statTitleFirst: false,
    height: '56px',
    background: '#B4E2F5',
  },
  statsGroup: {
    margin: '6px 9.25px',
    padding: '0.1% 6% 2% 6%',
    borderRight: '1px solid #0B3556',
    '&:first-child': {
      padding: '0.1% 6% 2% 6%',
    },
    '&:last-child': {
      padding: '0.1% 6% 2% 6%',
    },
  },
  statsIcon: {
    width: '40px',
    height: '45px',
    margin: '2px 0px 0px -45px',
    position: 'relative',
  },
  statCount: {
    color: '#0467BD',
    fontFamily: 'Oswald',
    fontSize: '20px',
    lineHeight: '17px',
    letterSpacing: '0.02em',
    margin: '4px 0 2px 13px',
  },
  statTitle: {
    color: '#062D4F',
    fontFamily: 'Nunito',
    fontSize: '12px',
    fontWeight: '700',
    lineHeight: '16px',
    textTransform: 'uppercase',
    margin: '0 0 0 13px',
  },
};

/**
 * @property {statAPI} numberOfPrograms Used to index a stat value
 */
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
  searchSubjects{
    numberOfFiles
    numberOfSamples
    numberOfStudies
    numberOfSubjects
} 
  }
  `;
