import React from 'react';
import { ThemeProvider, createTheme } from '@material-ui/core/styles';

const theme = {
  overrides: {
    Mui: {
      '&$expanded': {
        margin: '0px 0px',
      },
      checked: {
        color: 'red',
      },
    },
    MuiAccordionDetails: {
      root: {
        padding: '0px 1px 0px',
      },
    },
    MuiAccordion: {
      root: {
        '&$expanded': {
          margin: 'auto',
        },
      },
    },
    MuiAccordionSummary: {
      content: {
        margin: '0',
      },
    },
    MuiList: {
      padding: {
        paddingTop: '0',
        paddingBottom: '0',
      },
    },
    MuiCheckbox: {
      colorSecondary: {
        '&:first-child': {
          color: '#000000',
        },
      },
    },
    MuiListItem: {
      root: {
        '&.demographicsCheckedEven': {
          backgroundColor: '#DCE9EF',
        },
        '&.demographicsCheckedOdd': {
          backgroundColor: '#F2FBFF',
        },
        '&.studyCheckedEven': {
          backgroundColor: '#F4E7F3',
        },
        '&.studyCheckedOdd': {
          backgroundColor: '#FFF5FF',
        },
        '&.samplesCheckedEven': {
          backgroundColor: '#F3ECE5',
        },
        '&.samplesCheckedOdd': {
          backgroundColor: '#FFFCFA',
        },
        '&.genomicCheckedEven': {
          backgroundColor: '#DCE9EF',
        },
        '&.genomicCheckedOdd': {
          backgroundColor: '#F2FBFF',
        },
        '&.imagingCheckedEven': {
          backgroundColor: '#F4E7F3',
        },
        '&.imagingCheckedOdd': {
          backgroundColor: '#FFF5FF',
        },
        '&.diagnosisCheckedEven': {
          backgroundColor: '#F3ECE5',
        },
        '&.diagnosisCheckedOdd': {
          backgroundColor: '#FFFCFA',
        },
        '&.filesCheckedEven': {
          backgroundColor: '#DCE9EF',
        },
        '&.filesCheckedOdd': {
          backgroundColor: '#F2FBFF',
        },
        '&.proteomicCheckedEven': {
          backgroundColor: '#F4E7F3',
        },
        '&.proteomicCheckedOdd': {
          backgroundColor: '#FFF5FF',
        },
      },      
    },
    MuiSvgIcon: {
      root: {
        '&.demographicsCheckedIcon': {
          color: '#0E6292',
        },
        '&.studyCheckedIcon': {
          color: '#942A90',
        },
        '&.samplesCheckedIcon': {
          color: '#AE5E1B',
        },
        '&.genomicCheckedIcon': {
          color: '#0E6292',
        },
        '&.imagingCheckedIcon': {
          color: '#942A90',
        },
        '&.diagnosisCheckedIcon': {
          color: '#AE5E1B',
        },
        '&.filesCheckedIcon': {
          color: '#0E6292',
        },
        '&.proteomicCheckedIcon': {
          color: '#942A90',
        },
      },
    },
    MuiTypography: {
      root: {
        '&.demographicsSubjects': {
          color: '#0E6292',
          fontSize: '12px',
          fontFamily: 'Nunito',
          marginRight: '0px',
        },
        '&.studySubjects': {
          color: '#942A90',
          fontSize: '12px',
          fontFamily: 'Nunito',
          marginRight: '0px',
        },
        '&.samplesSubjects': {
          color: '#AE5E1B',
          fontSize: '12px',
          fontFamily: 'Nunito',
          marginRight: '0px',
        },
        '&.genomicSubjects': {
          color: '#0E6292',
          fontSize: '12px',
          fontFamily: 'Nunito',
          marginRight: '0px',
        },
        '&.imagingSubjects': {
          color: '#942A90',
          fontSize: '12px',
          fontFamily: 'Nunito',
          marginRight: '0px',
        },
        '&.diagnosisSubjects': {
          color: '#AE5E1B',
          fontSize: '12px',
          fontFamily: 'Nunito',
          marginRight: '0px',
        },
        '&.filesSubjects': {
          color: '#0E6292',
          fontSize: '12px',
          fontFamily: 'Nunito',
          marginRight: '0px',
        },
        '&.proteomicSubjects': {
          color: '#942A90',
          fontSize: '12px',
          fontFamily: 'Nunito',
          marginRight: '0px',
        },
      },
    },
    MuiDivider: {
      middle: {
        marginLeft: '0px',
        marginRight: '0px',
      },
      root: {
        height: '5px',
        '&.divider0': {
          backgroundColor: '#0E6292',
        },
        '&.divider1': {
          backgroundColor: '#942A90',
        },
        '&.divider2': {
          backgroundColor: '#AE5E1B',
        },
        '&.divider3': {
          backgroundColor: '#0E6292',
        },
        '&.divider4': {
          backgroundColor: '#942A90',
        },
        '&.divider5': {
          backgroundColor: '#AE5E1B',
        },
        '&.divider6': {
          backgroundColor: '#0E6292',
        },
        '&.divider7': {
          backgroundColor: '#942A90',
        },
        '&.divider8': {
          backgroundColor: '#AE5E1B',
        },
        '&.divider9': {
          backgroundColor: '#0E6292',
        },
        '&.divider10': {
          backgroundColor: '#942A90',
        },
        '&.divider11': {
          backgroundColor: '#AE5E1B',
        },
      },
    },
    checkboxRoot: {
      color: 'inherit',
      '&$checked': {
        color: '#8DCAFF',
      },
    },
    MuiCollapse: {
      wrapperInner: {
        '& div.min_input_box': {
          width: '50%',
        },
        '& div.max_input_box': {
          width: '50%',
        },
      },
    },
  },
};

export default ({
  children,
}) => {
  const computedTheme = createTheme(theme);
  return (
    <ThemeProvider theme={computedTheme}>
      {children}
    </ThemeProvider>
  );
};
