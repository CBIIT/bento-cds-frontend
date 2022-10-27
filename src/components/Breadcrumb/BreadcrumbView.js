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
          acc.push('/');
        }
        return acc;
      }, []).map((item) => (item))
    }
  </div>
);

const styles = (theme) => ({
  headerNav: {
    paddingTop: '0px',
    paddingBottom: '4px',
    color: '#0D3556',
  },
  headerNavLink: {
    paddingLeft: '3px',
    paddingRight: '3px',
    textDecoration: 'none',
    color: '#0D3556',
    textTransform: 'uppercase',
    fontFamily: 'Nunito',
    fontSize: '16px',
    letterSpacing: '0.01em',
    verticalAlign: 'text-top',

  },
  headerBold: {
    paddingLeft: '3px',
    paddingRight: '3px',
    textDecoration: 'none',
    color: '#0D3556',
    textTransform: 'uppercase',
    fontWeight: 'bold',
    fontFamily: theme.custom.fontFamilySans,
    fontSize: '10px',
    letterSpacing: '0.025em',
    verticalAlign: 'text-top',

  },
});

export default withStyles(styles)(CustomBreadcrumb);
