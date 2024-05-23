export const exportStyles = (props) =>({
    availableDownloadDropdownBtnIsOpen: {
        backgroundColor: '#fff',
        borderTop: '1px solid #686868',
        borderRight: '1px solid #686868',
        borderLeft: '1px solid #686868',
        borderTopRightRadius: '8px',
        borderTopLeftRadius: '8px',
        borderBottomRightRadius: '0px',
        width: '260px',
        borderBottomLeftRadius: '0px',
        boxShadow: 'none',
        '&:hover': {
          backgroundColor: '#fff',
          boxShadow: 'none',
        },
    
    },
    availableDownloadDropdownBtn: {
        backgroundColor: '#fff',
        border: '1px solid #686868',
        borderRadius: '8px',
        boxShadow: 'none',
        width: '260px',
        textWrap: 'nowrap',
        '&:hover': {
          backgroundColor: '#fff',
          boxShadow: 'none',
        },
    },
      availableDownloadDropdownBtnLabel: {
        color: '#5f2e05',
        fontStyle: 'normal',
        fontWeight: 600,
        fontSize: '14px',
        lineHeight: '24.5px',
        fontFamily: 'Roboto',
        textTransform: 'uppercase',
        whiteSpace: 'nowrap',
    },
    availableDownloadBtnContained: { 

    },
    availableDownloadDropdownBtnStartIcon: {
        margin: '0px',
    },
    dropdownMenuList: {
        paddingTop: '0px',
        paddingBottom: '0px',
        backgroundColor: '#0e6292',
        color: 'white',
        borderBottomRightRadius: '8px',
        borderBottomLeftRadius: '8px',
    },
    dropdownPaper: {
        maxWidth: '260px',
        borderBottomRightRadius: '8px',
        borderBottomLeftRadius: '8px',
    },
    styledMenuItem: {
        fontFamily: 'Roboto',
        fontSize: '14px',
        fontWeight: 500,
        lineHeight: '16px',
        textTransform: 'uppercase',
        height: '48px',
    },
})