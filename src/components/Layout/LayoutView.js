import React, { useEffect } from 'react';
import { withStyles, CssBaseline } from '@material-ui/core';
import { HashRouter, Route, Switch } from 'react-router-dom';
import aboutPageRoutes from '../../bento/aboutPagesRoutes';
import Header from '../Header/HeaderView';
import NavBar from '../NavBar/NavBarContainer';
import Footer from '../Footer/FooterView';
import Error from '../../pages/error/Error';
import CaseDetail from '../../pages/caseDetail/caseDetailController';
import table from '../../pages/table/tableView';
import Home from '../../pages/landing/landingController';
import About from '../../pages/about/aboutController';
import DataDictonary from '../../pages/dataDictionary/dataDictonaryController';
import Programs from '../../pages/programs/programsController';
import ProgramDetail from '../../pages/programDetail/programDetailController';
import Studies from '../../pages/studies/studiesController';
import StudyDetail from '../../pages/studyDetail/studyDetailController';
import GraphqlClient from '../GraphqlClient/GraphqlView';
// import JBrowse from '../JBrowse/JBrowseView';
import JBrowseDetail from '../../pages/jbrowseDetail/jbrowseDetailController';
import GlobalSearchController from '../../pages/search/searchViewController';
import adminController from '../../pages/admin/adminController';
import reviewRequestController from '../../pages/admin/reviewPendingDAR/reviewRequestController';
import Login from '../../pages/login';
import RequestAccess from '../../pages/requestAccess/requestAccessController';
import SysInfoView from '../../pages/sysInfo/view';
import ProfileController from '../../pages/profile/profileController';
import editUserController from '../../pages/admin/userDetails/editUserController';
import viewUserController from '../../pages/admin/userDetails/viewUserController';
import OverlayWindow from '../OverlayWindow/OverlayWindow';
import AUTH_MIDDLEWARE_CONFIG from '../Auth/authMiddlewareConfig';
import CarView from '../../pages/cart/cartController';
import AuthSessionTimeoutController from '../SessionTimeout/SessionTimeoutController';
import { AuthenticationMiddlewareGenerator } from '@bento-core/authentication';

import Notifactions from '../Notifications/NotifactionView';
import DashTemplate from '../../pages/dashTemplate/DashTemplateController';
import ReleaseVersions from '../../pages/ReleaseVersions';
import TextBanner from '../TextBanner';
import BannerWrapper from '../BannerWrapper';



const ScrollToTop = () => {
  window.scrollTo(0, 0);
  return null;
};

const Layout = ({ classes, isSidebarOpened }) => {
  // Access control imports
  const { LoginRoute, MixedRoute, PrivateRoute, AdminRoute} = AuthenticationMiddlewareGenerator(AUTH_MIDDLEWARE_CONFIG);

  useEffect(() => {
    const adjustForSiteAlert = () => {
      const hostDiv = document.body.children[0];
      if (!hostDiv || !hostDiv.shadowRoot) {
        document.documentElement.style.setProperty('--site-alert-offset', '0px');
        return;
      }

      const siteAlert = hostDiv.shadowRoot.querySelector('.usa-site-alert');
      if (siteAlert) {
        document.documentElement.style.setProperty('--site-alert-offset', `${siteAlert.offsetHeight}px`);

        // Adjust site alert styling to also be fixed
        siteAlert.style.position = 'fixed';
        siteAlert.style.top = 0;
        siteAlert.style.left = 0;
        siteAlert.style.width = '100%';
        siteAlert.style.zIndex = '9999';
      }
    };

    // Initial check
    adjustForSiteAlert();
    const observer = new MutationObserver(adjustForSiteAlert);

    observer.observe(document.body, {
      childList: true,
    });
    window.addEventListener('resize', adjustForSiteAlert);

    return () => {
      observer.disconnect();
      window.removeEventListener('resize', adjustForSiteAlert);
    }
  }, [])
    
  return (
  <>
    <CssBaseline />
    <HashRouter>
      <>
        <Notifactions />
        <AuthSessionTimeoutController />
        <BannerWrapper>
          <TextBanner
            heading="Over the next several months, the CDS site will transition to integrate with the central CRDC Data Submission and Data Discovery portals to provide users with a more comprehensive experience."
            aria-label="CDS announcement banner"
          />
        </BannerWrapper>
        <Header />
        <OverlayWindow />
        <NavBar />
        {/* Reminder: Ajay need to replace the ICDC with env variable and
          change build npm to read env variable */}
        <div
          className={classes.content}
        >
          <Route component={ScrollToTop} />
          <Switch>
            <MixedRoute exact path="/" component={Home} />
            <MixedRoute exact path="/home" component={Home} />

            {/* START: Private Routes */}
            {/* SECTION: Non-Member & Member only Path */}
            <PrivateRoute path="/request" requiuredSignIn access={['member', 'non-member']} component={RequestAccess} />
            <PrivateRoute path="/profile" requiuredSignIn access={['member', 'non-member', 'admin']} component={ProfileController} />
            {/* END SECTION */}

            {/* SECTION: Member & Admin only Path */}
            <PrivateRoute path="/programs" access={['admin', 'member']} component={Programs} />
            <PrivateRoute path="/studies" access={['admin', 'member']} component={Studies} />
            <PrivateRoute path="/fileCentricCart" access={['admin', 'member']} component={CarView} />
            <PrivateRoute path="/program/:id" access={['admin', 'member']} component={ProgramDetail} />
            <PrivateRoute path="/study/:id" access={['admin', 'member']} component={StudyDetail} />
            <PrivateRoute path="/case/:id" access={['admin', 'member']} component={CaseDetail} />
            <PrivateRoute path="/fileViewer/:id" requiuredSignIn access={['admin', 'member']} component={JBrowseDetail} />
            {/* bento 4.0 template */}
            <PrivateRoute path="/data" access={['admin', 'member']} component={DashTemplate} />
            {/* END SECTION */}

            {/* SECTION: Admin only Path */}
            <AdminRoute path="/admin/edit/:id" requiuredSignIn access={['admin']} component={editUserController} />
            <AdminRoute path="/admin/view/:id" requiuredSignIn access={['admin']} component={viewUserController} />
            <AdminRoute path="/admin/review/:id" requiuredSignIn access={['admin']} component={reviewRequestController} />
            <AdminRoute path="/admin" access={['admin']} requiuredSignIn component={adminController} />
            {/* END SECTION */}

            {/* NOTE: Please check these below paths. if no longer needed please remove it */}
            {/* <PrivateRoute path="/JBrowse"
            access={['admin', 'member']} component={JBrowse} /> */}
            <PrivateRoute path="/table" component={table} />
            {/* END NOTE */}

            {/* Psuedo Private routes where minor
            functionality can be accessed my unauthorized users */}
            <Route exact path="/search" access={['admin', 'member', 'non-member']} component={GlobalSearchController} />
            <Route path="/search/:id" access={['admin', 'member', 'non-member']} component={GlobalSearchController} />

            {/* END: Private Routes */}

            {aboutPageRoutes.map(
              (aboutPageRoute, index) => (
                <Route
                  key={index}
                  path={aboutPageRoute}
                  component={About}
                />
              ),
            )}
            <Route path="/releases" component={ReleaseVersions} />
            <Route path="/data-dictionary" component={DataDictonary} />
            <Route path="/graphql" component={GraphqlClient} />
            <LoginRoute path="/login" component={Login} />
            <Route path="/sysinfo" component={SysInfoView} />
            <Route component={Error} />

          </Switch>
          <Footer data={{ isSidebarOpened }} />
        </div>
      </>
    </HashRouter>
  </>
)};

const styles = (theme) => ({
  root: {
    display: 'flex',
    maxWidth: '100vw',
    overflowX: 'hidden',
  },
  content: {
    flexGrow: 1,
    // width: `calc(100vw - 240px)`,   // Ajay need to add this on addung side bar
    width: 'calc(100%)', // Remove this on adding sidebar
    background: theme.custom.bodyBackGround,
    marginTop: 'calc(var(--site-alert-offset, 0px) + var(--banner-offset, 0px) + 196px)',
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
});

export default withStyles(styles)(Layout);
