import React from 'react';
import { withStyles } from '@material-ui/core';
import { Link } from 'react-router-dom';

const CustomBreadcrumb = ({ classes, data }) => (
  <div id="bread_crumb" className={classes.headerNav}>
    {
      data.reduce((acc, current, index) => {
        if (current.isALink) {
          acc.push(
            <Link
              className={classes.headerNavLink}
              to={current.to}
              onClick={current.onClick}
              key={current.to}
              id={`${index + 1}_breadcrumb`}
            >
              {current.name}
            </Link>,
          );
        } else {
          acc.push(<span className={classes.headerBold}>{current.name}</span>);
        }
        if (index < data.length - 1) {
          acc.push('>');
        }
        return acc;
      }, []).map((item) => (item))
    }
  </div>
);

const styles = () => ({
  headerNav: {
    paddingTop: '0px',
    paddingBottom: '4px',
    // color: '#0D3556',
    color: '#0F4478',
    fontFamily: 'Lato',
    fontSize: '15px',
    fontWeight: '500',
  },
  headerNavLink: {
    paddingLeft: '3px',
    paddingRight: '3px',
    textDecoration: 'none',
    color: '#0F4478',
    textTransform: 'Capitalize',
    fontFamily: 'Lato',
    fontSize: '12px',
    letterSpacing: '0.01em',
    verticalAlign: 'text-top',

  },
  headerBold: {
    paddingLeft: '3px',
    paddingRight: '3px',
    textDecoration: 'none',
    color: '#7e92a5',
    textTransform: 'uppercase',
    // fontWeight: 'bold',
    fontFamily: 'Lato',
    fontSize: '12px',
    letterSpacing: '0.025em',
    verticalAlign: 'text-top',

  },
});

export default withStyles(styles)(CustomBreadcrumb);
