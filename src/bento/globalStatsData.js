import gql from 'graphql-tag';
import { STATIC_CONTENT } from '../assets/staticContent';

export const statsStyling = {
  global: {
    horizontalStyle: false,
    statTitleFirst: false,
    height: '58px',
    background: '#B4E2F5',
    top: 'calc(var(--site-alert-offset, 0px) + var(--banner-offset, 0px) + 139px)',
  },
  statsGroup: {
    margin: '6px 0px',
    borderRight: '1.25px solid #000000',
    // Need to uncomment this in custom stats component
    padding: '0.5% 6% 2% 10% !important',
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
    // padding: '4px 60px',
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
    statIconSrc: STATIC_CONTENT.icons.svgs.STUDIES_SVG,
    statIconAlt: 'Studies Stats Bar Icon',
  },
  {
    statTitle: 'Participants',
    type: 'field',
    statAPI: 'numberOfSubjects',
    statIconSrc: STATIC_CONTENT.icons.svgs.PARTICIPANTS_SVG,
    statIconAlt: 'Participants Stats Bar Icon',
  },
  {
    statTitle: 'Samples',
    type: 'field',
    statAPI: 'numberOfSamples',
    statIconSrc: STATIC_CONTENT.icons.svgs.SAMPLES_SVG,
    statIconAlt: 'Samples Stats Bar Icon',
  },
  {
    statTitle: 'Files',
    type: 'field',
    statAPI: 'numberOfFiles',
    statIconSrc: STATIC_CONTENT.icons.svgs.FILES_SVG,
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
}`;
