export default () => ({
  clearAllButtonRoot: {
    margin: 'auto',
  },
  customButton: {
    borderRadius: '9px',
    maxWidth: '30px',
    maxHeight: '30px',
    minWidth: '30px',
    minHeight: '30px',
    marginTop: '0px',
    fontSize: 9,
    textTransform: 'none',
    color: '#3d4241',
    marginLeft: '0px',
    '&:hover': {
      backgroundColor: '#60797B',
      color: 'white',
    },
  },
  floatRight: {
    margin: '7px 0px 7px 6px',
  },
  resetText: {
    marginTop: '0px',
    marginLeft: '8px',
    color: '#638fb5',
    fontSize: 14,
  },
  resetTextDisabled: {
    marginTop: '0px',
    marginLeft: '8px',
    color: '#a9b2b9',
    fontSize: 14,
  },
  cases: {
    height: '5px',
  },
  Cases: {
    height: '5px',
    margin: '0px',
    backgroundColor: '#0d8461',
  },
  Samples: {
    height: '5px',
    margin: '0px',
    backgroundColor: '#10beff',
  },
  Files: {
    height: '5px',
    margin: '0px',
    backgroundColor: '#e636e4',
  },
  sectionSummaryText: {
    fontSize: '14px',
    flexShrink: '0',
    fontFamily: 'Open Sans',
    fontWeight: '600',
    lineHeight: '1',
    marginLeft: '5px',
    letterSpacing: '0',
    textTransform: 'uppercase',
    overflowWrap: 'break-word',
  },
  dropDownIconSubSection: {
    marginLeft: '0px',
    fill: '#000000',
  },
  customExpansionPanelSummaryRoot: {
    flexDirection: 'row-reverse',
    paddingLeft: 4,
  },
  sectionSummaryTextContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    zIndex: 2,
    fontFamily: 'Open Sans, Lato',
    fontSize: 20,
    fontWeight: 300,
    marginLeft: 3,
    color: '#000000',
  },
  CasesCheckbox: {
    color: '#10A075',
  },
  CasesCheckedIcon: {
    color: '#10A075',
  },
  checkboxRoot: {
    marginLeft: '5px',
    height: 12,
  },
  panelDetailText: {
    color: '#323232',
    fontFamily: 'Nunito',
    fontSize: '14px',
    fontWeight: '200',
  },
  panelSubjectText: {
    color: '#323232',
    fontFamily: 'Nunito',
    fontSize: '14px',
    marginRight: '0px',
  },
  activeFacetParticipants: {
    color: '#0E6292',
  },
  activeFacetSamples: {
    color: '#942A90',
  },
  activeFacetFiles: {
    color: '#AE5E1B',
  },
  searchContainer: {
    paddingTop: '15px',
    margin: '0 2px',
    marginRight: 6,
  },
  findCaseButton: {
    //marginLeft: '105px',
    backgroundColor: '#0B4E75',
    boxSizing: 'border-box',
    height: 30,
    width: 40,
    //border: '1.25px solid #C3E8F7',
    cursor: 'pointer',
    borderRadius: 11,
    display: 'flex',
    marginRight: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },
  findCaseIcon: {
    width: 17,
    height: 17,
  },
  uploadButton: {
    boxSizing: 'border-box',
    fontWeight: '400',
    height: 32,
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    backgroundColor: '#0B4E75',
    color: '#fff',
    border: '1px solid #C3E8F7',
    borderRadius: 10,
    fontFamily: 'Lato',
    fontSize: 11.5,
    boxShadow: 'none',
    paddingLeft: 10,
    paddingRight: 12,
    '&:hover': {
      backgroundColor: '#0B4E75',
    },
  },
  iconSpan: {
    marginTop: '5.2px',
  },
  uploadIcon: {
    height: 19,
    width: 19,
  },
  customListPadding: {
    paddingTop: 8,
  },
  customDivider: {
    backgroundColor: '#B1B1B1',
    height: '2px',
    marginLeft: 0,
    marginRight: 0,
    marginBottom: 6,
  },
  paper: {
    border: '1.25px solid #29ABE2',
    backgroundColor: '#717171',
    color: '#fff',
    borderRadius: 10,
    fontFamily: 'Lato',
    fontSize: 12,
    fontWeight: 500,
    boxShadow: '0 0 0 2px rgba(41, 171, 226,0.36)',
    '& ::-webkit-scrollbar': {
      width: '0.6em',
      height: '1em',
    },
    '& ::-webkit-scrollbar-track': {
      '-webkit-box-shadow': 'none',
      borderRadius: '0px',
      backgroundColor: 'transparent',
    },
    '& ::-webkit-scrollbar-thumb': {
      backgroundColor: '#000',
      borderRadius: '0px',
    },
  },
  listbox: {
    height: 223,
    paddingTop: '0px',
    '& li': {
      borderBottom: '1px solid #fff',
      '&:nth-last-child(1)': {
        borderBottom: 'none'
      }
    },
    '& :hover': {
      color: 'white',
      backgroundColor: '#29ABE2;'
    }
  },
  searchResultDetailText: {
    color: '#5E3F14',
    lineHeight: '20px',
    fontFamily: 'Open Sans',
    fontSize: '11px',
  },
  inputRoot: {
    borderRadius: 10,
    height: 32,
    color: '#555555',
    fontFamily: 'Lato',
    fontSize: 11,
    paddingLeft: 12,
    paddingRight: 35,
    backgroundColor: '#fff',
    '& input': {
      height: '7px',
      fontSize: 10,
      paddingLeft: '12px !important',
      fontFamily: 'Nunito',
    },
    '& fieldset': {
      borderWidth: '2px !important',
      borderColor: '#29ABE2 !important',
    },
  },
});
