import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useAnalytics } from "./AnalyticsContext";
import reportWebVitals from "../../reportWebVitals";

/**
 * A hook to set and restore the page title.
 * Also reports pageview and web vitals to google analytics.
 *
 * @param title The new title to set
 * @param [restore] Restore the title on unmount
 */
const usePageTitle = (title, restore = true) => {
  const { ReactGA } = useAnalytics();
  const location = useLocation();

  useEffect(() => {
    // Update title on mount
    document.title = title;

    const currentPath = location.hash.replace("#", "") || "/";
    console.log({ currentPath, title, location });
    
    ReactGA.send({
      hitType: "pageview",
      page: currentPath,
      title: title,
    });


    reportWebVitals(({ id, name, value }) => {
      ReactGA.event({
        category: "Web Vitals",
        label: id,
        action: name,
        value,
        nonInteraction: true,
      });
    });
  }, [title, ReactGA]);

  // Revert on unmount if requested
  useEffect(() => {
    if (!restore) {
      return () => {};
    }

    return () => {
      document.title = "CDS";
    };
  }, []);
};

export default usePageTitle;

