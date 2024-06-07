import React, { useRef, useEffect } from "react";

const BannerWrapperView = ({ children }) => {
  const ref = useRef(null);

  useEffect(() => {
    const updateBannerOffset = () => {
      if (ref.current) {
        const height = ref.current.clientHeight;
        // Directly set the banner offset based on the current banner height
        document.documentElement.style.setProperty(
          "--banner-offset",
          `${height || 0}px`
        );
      }
    };

    updateBannerOffset();
    const resizeObserver = new ResizeObserver(updateBannerOffset);
    if (ref.current) {
      resizeObserver.observe(ref.current);
    }

    return () => {
      resizeObserver.disconnect();
      // Reset the CSS variable to 0 when the component unmounts
      document.documentElement.style.setProperty("--banner-offset", "0px");
    };
  }, []);

  return (
    <div
      ref={ref}
      style={{
        position: "fixed",
        top: "var(--site-alert-offset, 0px)",
        width: "100%",
        zIndex: 2000,
      }}
    >
      {children}
    </div>
  );
};

export default React.memo(BannerWrapperView);
