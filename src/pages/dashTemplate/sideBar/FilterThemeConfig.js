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
        '&.participantsCheckedEven': {
          backgroundColor: '#DCE9EF',
        },
        '&.participantsCheckedOdd': {
          backgroundColor: '#F2FBFF',
        },
        '&.samplesCheckedEven': {
          backgroundColor: '#F4E7F3',
        },
        '&.samplesCheckedOdd': {
          backgroundColor: '#FFF5FF',
        },
        '&.filesCheckedEven': {
          backgroundColor: '#F3ECE5',
        },
        '&.filesCheckedOdd': {
          backgroundColor: '#FFFCFA',
        },
      },
    },
    MuiSvgIcon: {
      root: {
        '&.participantsCheckedIcon': {
          color: '#0E6292',
        },
        '&.samplesCheckedIcon': {
          color: '#942A90',
        },
        '&.filesCheckedIcon': {
          color: '#AE5E1B',
        },
      },
    },
    MuiTypography: {
      root: {
        '&.participantsSubjects': {
          color: '#0E6292',
          fontSize: '12px',
          fontFamily: 'Nunito',
          marginRight: '0px',
        },
        '&.samplesSubjects': {
          color: '#942A90',
          fontSize: '12px',
          fontFamily: 'Nunito',
          marginRight: '0px',
        },
        '&.filesSubjects': {
          color: '#AE5E1B',
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
