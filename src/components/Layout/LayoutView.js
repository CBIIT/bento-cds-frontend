import React, { useEffect, useRef } from 'react';
import { withStyles, CssBaseline } from '@material-ui/core';
import { HashRouter, Route, Switch } from 'react-router-dom';
import aboutPageRoutes from '../../bento/aboutPagesRoutes';
import Header from '../Header/HeaderView';
import NavBar from '../NavBar/NavBarContainer';
import Footer from '../Footer/FooterView';
import Error from '../../pages/error/Error';
import Dashboard from '../../pages/dashboardTab/dashboardController';
import CaseDetail from '../../pages/caseDetail/caseDetailController';
import ArmDetail from '../../pages/armDetail/armDetailController';
import modelPage from '../../pages/modelPage/modelPageView';
import table from '../../pages/table/tableView';
import Home from '../../pages/landing/landingController';
import About from '../../pages/about/aboutController';
import DataDictonary from '../../pages/dataDictionary/dataDictonaryController';
import Programs from '../../pages/programs/programsController';
import Arms from '../../pages/arms/armsController';
import Questionaire from '../../pages/questionaire/questionaireView';
import ProgramDetail from '../../pages/programDetail/programDetailController';
import GraphqlClient from '../GraphqlClient/GraphqlView';
import fileCentricCart from '../../pages/fileCentricCart/cartController';
// import JBrowse from '../JBrowse/JBrowseView';
// import JBrowseDetail from '../../pages/jbrowseDetail/jbrowseDetailController';
import ReleaseVersions from '../ReleaseVersions';
import GlobalSearch from '../../pages/search/searchView';
import OverlayWindow from '../OverlayWindow/OverlayWindow';
import GlobalSearchController from '../../pages/search/searchViewController';
import ShutdownBanner from '../ShutdownBanner/ShutdownBanner';
import GA from '../../utils/googleAnalytics';

const ScrollToTop = () => {
  window.scrollTo(0, 0);
  return null;
};

const Layout = ({ classes, isSidebarOpened }) => {
  const headerRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const resizeObserver = new ResizeObserver((entries) => {
      entries.forEach((entry) => {
        // Access the new size information from entry.contentRect
        contentRef.current.style.height = `calc(100% - ${entry.contentRect.height}px)`;
      });
    });

    // Attach the ResizeObserver to the target element (in this case, the containerRef)
    if (headerRef.current) {
      resizeObserver.observe(headerRef.current);
    }

    // Cleanup function to disconnect the ResizeObserver when the component unmounts
    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <>
      <CssBaseline />
      <HashRouter>
        <>
          <div className={classes.container}>
            <OverlayWindow />
            <div id="headerSection" ref={headerRef} className={classes.header}>
              <ShutdownBanner src="https://cbiit.github.io/crdc-alert-elements/banners/government-shutdown.html" />
              <Header />
              <NavBar />
            </div>

            {/* Reminder: Ajay need to replace the ICDC with env variable and
          change build npm to read env variable */}
            <div
              ref={contentRef}
              className={classes.content}
            >
              <Route component={ScrollToTop} />
              { GA.init() && <GA.RouteTracker /> }
              <Switch>
                <Route exact path="/CDS/" component={Home} />
                <Route exact path="/" component={Home} />
                <Route exact path="/home" component={Home} />
                <Route path="/data" component={Dashboard} />
                <Route path="/programs" component={Programs} />
                <Route path="/studies" component={Arms} />
                <Route path="/model" component={modelPage} />
                <Route path="/table" component={table} />
                <Route path="/fileCentricCart" component={fileCentricCart} />
                <Route path="/program/:id" component={ProgramDetail} />
                <Route path="/case/:id" component={CaseDetail} />
                <Route path="/study/:id" component={ArmDetail} />
                {/* <Route path="/JBrowse" component={JBrowse} /> */}
                <Route exact path="/search" component={GlobalSearch} />
                <Route path="/search/:id" component={GlobalSearchController} />
                <Route path="/datasubmit" component={Questionaire} />
                <Route path="/releases" component={ReleaseVersions} />

                {/* <Route path="/fileViewer/:id" component={JBrowseDetail} /> */}
                {aboutPageRoutes.map(
                  (aboutPageRoute, index) => (
                    <Route
                      key={index}
                      path={aboutPageRoute}
                      component={About}
                    />
                  ),
                )}
                <Route path="/data-dictionary" component={DataDictonary} />
                <Route path="/graphql" component={GraphqlClient} />
                <Route component={Error} />
              </Switch>
              <Footer data={{ isSidebarOpened }} />
            </div>
          </div>
        </>
      </HashRouter>
    </>
  );
};

const styles = (theme) => ({
  root: {
    display: 'flex',
    maxWidth: '100vw',
    overflowX: 'hidden',
  },
  '@global': {
    '*::-webkit-scrollbar': {
      width: '0.5em',
      height: '0.4em',
    },
    '*::-webkit-scrollbar-track': {
      '-webkit-box-shadow': 'inset 0 0 6px #ccc',
      borderRadius: '0px',
      backgroundColor: '#FFFFFF',
    },
    '*::-webkit-scrollbar-thumb': {
      backgroundColor: '#97b0c0',
      outline: '1px solid slategrey',
      borderRadius: '0px',
    },
  },
  container: {
    top: '0px',
    width: '100%',
    height: '100%',
    position: 'fixed',
  },
  header: {
    width: '100%',
    zIndex: '9999',
  },
  content: {
    flexGrow: 1,
    width: 'calc(100%)', // Remove this on adding sidebar
    background: theme.custom.bodyBackGround,
    overflowY: 'auto',
    position: 'absolute',
    height: '100%',
  },
});

export default withStyles(styles)(Layout);
