
import React, { useEffect, useState, useRef } from 'react';
import gql from 'graphql-tag';
import { Paper, Popper, Button, ClickAwayListener, Grow, withStyles } from '@material-ui/core';
import { noop } from 'lodash';
import { useQuery } from '@apollo/client';
import { MY_CART_MANIFEST_QUERY } from '../../../../bento/tableDownloadCSV'
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
        const processedStoreManifestPayload = data.filesInList.map((el) => ({
            file_name: el ? el.file_name : undefined,
            file_size: el ? el.file_size : undefined,
            file_id: el ? el.file_id : undefined,
            file_type: el ? el.file_type : undefined,
            md5sum: el ? el.md5sum : undefined,
            experimental_strategy: el ? el.experimental_strategy : undefined,
            study_acronym: el ? el.study_acronym : undefined,
            phs_accession: el ? el.phs_accession : undefined,
            study_data_type: el ? el.study_data_type : undefined,
            accesses: el ? el.accesses : undefined,
            image_modality: el ? el.image_modality : undefined,
            organ_or_tissue: el ? el.organ_or_tissue : undefined,
            license: el ? el.license : undefined,
            library_layouts: el ? el.library_layouts : undefined,
            library_strategy: el ? el.library_strategy : undefined,
            subject_id: el ? el.subject_id : undefined,
            gender: el ? el.gender : undefined,
            race: el ? el.race : undefined,
            primary_diagnoses: el ? el.primary_diagnoses : undefined,
            sample_id: el ? el.sample_id : undefined,
            analyte_type: el ? el.analyte_type : undefined,
            is_tumor: el ? el.is_tumor : undefined,
          }));
          
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
          <li onClick={() => {
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
          </li>
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
                      <ul
                        autoFocusItem={open}
                        id="menu-list-grow"
                        onKeyDown={handleListKeyDown}
                        className={
                          classes.dropdownMenuList
                        }
                      >
                        {options}
                      </ul>
                    </ClickAwayListener>
                  </Paper>
                </Grow>
              )}
            </Popper>
        </>
    );

}
export default withStyles(exportStyles)(ExportButtonView);