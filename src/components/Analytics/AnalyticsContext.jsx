import React, { createContext, useContext, useMemo } from "react";
import ReactGA from "react-ga4";
import env from '../../utils/env';

/**
 * Auth Context
 *
 * NOTE: Do NOT use this context directly. Use the useAnalytics hook instead.
 *       this is exported for testing purposes only.
 *
 * @see ContextState
 * @see useAnalytics
 */
export const Context = createContext(null);
Context.displayName = "AnalyticsContext";

/**
 * Auth Context Hook
 *
 * @see AnalyticsProvider – Must be wrapped in a AnalyticsProvider component
 * @see ContextState – Context state returned by the hook
 * @returns {ContextState} - Context
 */
export const useAnalytics = () => {
  const context = useContext(Context);

  if (!context) {
    throw new Error(
      "AnalyticsContext cannot be used outside of the AnalyticsProvider component"
    );
  }

  return context;
};

/**
 * Creates a Google Analytics context
 *
 * @see useAnalyticsContext – Context hook
 * @param props
 * @returns {JSX.Element}
 */
export const AnalyticsProvider = ({ GA_MEASUREMENT_ID, children }) => {
  const value = useMemo(() => {
    if (ReactGA.isInitialized) {
      ReactGA.reset();
    }
    if (GA_MEASUREMENT_ID) {
      ReactGA.initialize(GA_MEASUREMENT_ID, {
        // testMode: true,
        gaOptions: {
          DEV_TIER: env.REACT_APP_DEV_TIER || "N/A",
          FE_VERSION: env.REACT_APP_FE_VERSION || "N/A",
        },
      });
    }

    return { ReactGA };
  }, [GA_MEASUREMENT_ID]);

  return <Context.Provider value={value}>{children}</Context.Provider>;
};
