import React from "react";
import { withStyles } from "@material-ui/core";

const TextBanner = ({ classes, heading, text, iconUrl, ...rest }) => (
  <section className={classes.section} {...rest}>
    <div className={classes.alert}>
      <div className={classes.body}>
        {heading && (
          <div className={classes.header}>
            <h3 className={classes.heading}>{heading}</h3>
          </div>
        )}
        <div className={classes.content}>
          <p className={classes.text}>{text}</p>
        </div>
      </div>
    </div>
  </section>
);
TextBanner.defaultProps = {
  iconUrl:
    "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='24'%20height='24'%20fill='%23000000'%20viewBox='0%200%2024%2024'%3e%3cpath%20d='M12%202C6.48%202%202%206.48%202%2012s4.48%2010%2010%2010%2010-4.48%2010-10S17.52%202%2012%202zm1%2015h-2v-6h2v6zm0-8h-2V7h2v2z'/%3e%3c/svg%3e",
};

const styles = () => ({
  section: {
    width: "100%",
    color: "#000",
    background: "#d4e7f2",
    position: "relative",
    letterSpacing: "0.01071em",
    // borderTop: "1px #999999 solid",
  },
  alert: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    border: "none",
    marginTop: 0,
    marginLeft: "auto",
    marginRight: "auto",
    padding: "8px 0",
    maxWidth: "87.5rem",
  },
  body: ({ iconUrl }) => ({
    position: "relative",
    color: "#1b1b1b",
    margin: 0,
    paddingTop: 0,
    paddingBottom: 0,
    paddingRight: "1rem",
    paddingLeft: "3.75rem",

    "@media (min-width: 64em)": {
      paddingRight: "2rem",
      paddingLeft: "4.75rem",
    },

    "&::before": {
      top: 0,
      "-webkit-mask-size": "1.625rem 1.625rem",
      "mask-size": "1.625rem 1.625rem",
      height: "1.625rem",
      width: "1.625rem",
      left: "1rem",

      background: `url("${iconUrl}")`,
      content: "''",
      display: "block",
      position: "absolute",

      "@supports ((-webkit-mask: url()) or (mask: url())) ": {
        background: "none",
        backgroundColor: "#000000",
        "-webkit-mask": `url("${iconUrl}") no-repeat center/contain`,
        mask: `url("${iconUrl}") no-repeat center/contain`,
      },
      "@media (min-width: 64em)": {
        left: "2rem",
      },
    },
  }),
  header: {
    display: "flex",
    alignItems: "center",
  },
  heading: {
    color: "#076453",
    display: "inline-block",
    fontSize: "1.01rem",
    fontFamily: '"Open Sans", sans-serif',
    fontWeight: 700,
    fontStyle: "normal",
    lineHeight: 1.5,
    marginTop: 0,
    marginBottom: 0,
  },
  text: {
    textDecoration: "none",
    color: "#076453",
    fontFamily: '"Open Sans", sans-serif',
    fontWeight: 400,
    fontSize: "1.01rem",
    fontStyle: "normal",
    lineHeight: 1.6,
    letterSpacing: "0.14994px",
    paddingTop: 0,
    paddingBottom: 0,
    marginTop: 0,
    marginBottom: 0,
  },
});

export default withStyles(styles)(TextBanner);

