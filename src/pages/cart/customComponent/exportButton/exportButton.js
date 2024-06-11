
import React, { useEffect, useState, useRef } from 'react';
import gql from 'graphql-tag';
import { Paper, Popper, Button, ClickAwayListener, Grow, MenuItem, MenuList, withStyles } from '@material-ui/core';
import { noop } from 'lodash';
import { useQuery } from '@apollo/client';
import { MY_CART_MANIFEST_QUERY } from '../../../../bento/tableDownloadCSV'
import { manifestData } from '../../../../bento/fileCentricCartWorkflowData'
import arrowDownPng from './assets/arrowDown.png';
import cgcIcon from './assets/cgc.svg';
import { getManifestData } from './util/TableService';
import { exportStyles } from './exportStyles';



const ExportButtonView = (props,) => {
    const { classes, filesId } = props;
    const LABEL = 'Available Export Options';
    const {
        EXPORT_TO_CANCER_GENOMICS_CLOUD,
      } = {
        EXPORT_TO_CANCER_GENOMICS_CLOUD: 'Export to Cancer Genomics Cloud',
      };
    const OPTIONS = [
        EXPORT_TO_CANCER_GENOMICS_CLOUD,
    ];     


    const [sbgUrl, setSBGUrl] = useState('');
    const [open, setOpen] = useState(false);
    const [isLoading] = React.useState(false);
    const [label] = useState(LABEL);
    const anchorRef = useRef(null);

    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen);
    };

    const handleClose = (event) => {
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
            return;
        }
        setOpen(false);
    };
    function handleListKeyDown(event) {
        if (event.key === 'Tab') {
          event.preventDefault();
          setOpen(false);
        }
    }

    const StyledMenuItem = withStyles(() => ({
        root: {
          padding: '2px 26px',
          color: '#fff',
          overflow: 'auto',
          whiteSpace: 'wrap',
        },
      }))(MenuItem);

    const STORE_MANIFEST_QUERY = gql`
      query storeManifest($manifestString: String!) {
          storeManifest(manifest: $manifestString)
      }
    `;
      
    const getManifestPayload = () => {
        const { data } = getManifestData(MY_CART_MANIFEST_QUERY, filesId);
    
        if (!data) {
          return null;
        }
        const appendString = 'drs://nci-crdc.datacommons.io/'
        const processedStoreManifestPayload = data.filesInList.map((el) => {
          const obj = {}
          for (let i = 0; i < manifestData.keysToInclude.length; i++) {
            if (manifestData.keysToInclude[i] === 'file_id') {
              obj[manifestData.header[i]] = el && el[manifestData.keysToInclude[i]] ? 
                appendString + el[manifestData.keysToInclude[i]] 
                : 
                "";
            }
            else {
              obj[manifestData.header[i]] = el && el[manifestData.keysToInclude[i]] ? 
              el[manifestData.keysToInclude[i]] 
              : 
              "";
            }
          }
          return obj;
          });
        return processedStoreManifestPayload;
    };
    
    const { data } = useQuery(STORE_MANIFEST_QUERY, {
        variables: { manifestString: JSON.stringify(getManifestPayload()) },
        context: { clientName: 'interopService' },
        skip: !getManifestPayload(),
        fetchPolicy: 'no-cache',
    });

    useEffect(() => {
        if (data && data.storeManifest) {
          setSBGUrl(data.storeManifest);
        }
      }, [data]);      
    
    const initiateDownload = (currLabel) => {
        switch (currLabel) {
        case 'Export to Cancer Genomics Cloud': 
            window.open(`https://cgc.sbgenomics.com/import-redirect/drs/csv?URL=${encodeURIComponent(sbgUrl)}`, '_blank');
            break;
          default: noop(data);
            break;
        }
        noop();
    };

    

    const getMenuItem = (type) => {
        let icon;
        switch (type) {
          case EXPORT_TO_CANCER_GENOMICS_CLOUD:
            icon = cgcIcon;
            break;
          default:
            icon = undefined;
            break;
        }
        return (
          <StyledMenuItem onClick={() => {
            initiateDownload(type);
            setOpen(false);
          }}
          key={type}
          className={classes.styledMenuItem}
          >
            {
              icon && (
              <span>
                <img src={icon} alt="icon" />
              </span>
              )
            }
            <div style={{ paddingLeft: icon ? '10px' : '0' }}>{type}</div>
          </StyledMenuItem>
        );
      };
    

    const options = OPTIONS.map((item) => getMenuItem(item));

    return (
        <>
            <Button
              classes={{
                root: open
                  ? classes.availableDownloadDropdownBtnIsOpen
                  : classes.availableDownloadDropdownBtn,
                label: classes.availableDownloadDropdownBtnLabel,
                contained: classes.availableDownloadBtnContained,
                startIcon: classes.availableDownloadDropdownBtnStartIcon,
              }}
              startIcon={<img style={{ marginRight: '8px' }} src={arrowDownPng} alt="arrow down icon" />}
              ref={anchorRef}
              aria-controls={open ? 'menu-list-grow' : undefined}
              aria-haspopup="true"
              onClick={handleToggle}
            >
              {isLoading ? (<p>Loading...</p>) : (
                <>
                  {label}
                </>
              )}
            </Button>
            <Popper
              open={open}
              anchorEl={anchorRef.current}
              role={undefined}
              transition
              disablePortal
            >
              {({ TransitionProps, placement }) => (
                <Grow
                  {...TransitionProps}
                  style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
                >
                  <Paper
                    className={classes.dropdownPaper}
                  >
                    <ClickAwayListener onClickAway={handleClose}>
                      <MenuList
                        autoFocusItem={open}
                        id="menu-list-grow"
                        onKeyDown={handleListKeyDown}
                        classes={{
                          root: classes.dropdownMenuList,
                        }}
                      >
                        {options}
                      </MenuList>
                    </ClickAwayListener>
                  </Paper>
                </Grow>
              )}
            </Popper>
        </>
    );

}
export default withStyles(exportStyles)(ExportButtonView);