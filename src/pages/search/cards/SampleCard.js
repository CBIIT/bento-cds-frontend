import React from 'react';
import { Grid, withStyles } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { prepareLinks } from '@bento-core/util';
import PropertyItem from './PropertyItem';
import { encodeSubjectIds } from './utils';

const CARD_PROPERTIES = [
  {
    label: 'Sample ID',
    dataField: 'sample_id',
  },
  {
    label: 'Sample Tissue Type',
    dataField: 'is_tumor',
  },
  {
    label: 'Sample Type',
    dataField: 'analyte_type',
  },
];

const SampleCard = ({ data, classes, index }) => {
  const propertiesWithLinks = prepareLinks(CARD_PROPERTIES, data);

  return (
    <Grid item container className={classes.card} id={`global_search_card_${index}`}>
      <Grid item xs={1} className={classes.indexContainer}>
        {index + 1 }
      </Grid>
      <Grid item xs={11} className={classes.propertyContainer}>
        <div>
          <span className={classes.detailContainerHeader}>Sample</span>
          <span className={classes.cardTitle}>
            <Link to={`/data/${encodeSubjectIds(data['subject_ids_filter'])}`} className={classes.cardTitle}>
              {data.sample_id}
            </Link>
          </span>
        </div>
        {propertiesWithLinks.map((prop, idx) => (
          <PropertyItem
            index={idx}
            label={prop.label}
            value={data[prop.dataField]}
            link={prop.link}
          />
        ))}
      </Grid>
      <Grid item xs={3}>
        {/* <Button variant="outlined" sx={{ borderRadius: 100 }}>
          <span className={classes.badge}>
            <img
              className={classes.cartIcon}
              src="https://raw.githubusercontent.com/CBIIT/datacommons-assets/main/bento/images/icons/svgs/Icon-Cart-Navbar.svg"
              alt="add to cart"
            />

          </span>
          Add to cart
        </Button> */}
      </Grid>
    </Grid>
  );
};

const styles = (theme) => ({
  cartIcon: {
    height: '22px',
    margin: '0px 0px 0px 6px',
  },
  indexContainer: {
    padding: '18px 0px 18px 18px',
    color: '#747474',
    fontFamily: 'Inter',
    fontSize: '13px',
  },
  propertyContainer: {
    padding: '16px 16px 16px 0px',
    borderBottom: '2px solid #E7EEF5',
  },
  cardTitle: {
    color: '#7747FF',
    textDecoration: 'none',
    fontSize: '16px',
    fontFamily: 'Nunito',
    paddingLeft: '9px',
    verticalAlign: 'middle',
  },
  content: {
    fontSize: '12px',
  },
  detailContainerHeader: {
    textTransform: 'uppercase',
    padding: '2px 8px',
    backgroundColor: '#C3EAF5',
    color: '#000000',
    fontFamily: 'Nunito',
    fontSize: '12px',
    fontWeight: '400',
    letterSpacing: '0.9px',
    verticalAlign: 'middle',
    borderRadius: '4px',
  },
});

export default withStyles(styles, { withTheme: true })(SampleCard);
