import env from "../utils/env";

export const STATIC_CONTENT = {
  about: {
    USER_GUIDE_PDF: `${env.REACT_APP_STATIC_CONTENT_URL}about/CDSPortalUserGuide.pdf`,
    CDS_CONTENT_IMAGE: `${env.REACT_APP_STATIC_CONTENT_URL}about/cds.png`,
    CRDC_CONTENT_IMAGE: `${env.REACT_APP_STATIC_CONTENT_URL}about/crdc.png`,
    LEFT_BG_IMAGE: `${env.REACT_APP_STATIC_CONTENT_URL}about/leftBg.jpg`,
    RIGHT_BG_IMAGE: `${env.REACT_APP_STATIC_CONTENT_URL}about/rightBg.png`,
    PURPOSE_CONTENT_IMAGE: `${env.REACT_APP_STATIC_CONTENT_URL}about/purpose.png`,
    RESOURCES_CONTENT_IMAGE: `${env.REACT_APP_STATIC_CONTENT_URL}about/resources.png`,
    SUBMIT_CONTENT_IMAGE: `${env.REACT_APP_STATIC_CONTENT_URL}about/submit.png`,
    SUPPORT_CONTENT_IMAGE: `${env.REACT_APP_STATIC_CONTENT_URL}about/support.jpeg`,
  },
  icons: {
    svgs: {
      FILES_SVG: `${env.REACT_APP_STATIC_CONTENT_URL}icons/svgs/files.svg`,
      PARTICIPANTS_SVG: `${env.REACT_APP_STATIC_CONTENT_URL}icons/svgs/participants.svg`,
      SAMPLES_SVG: `${env.REACT_APP_STATIC_CONTENT_URL}icons/svgs/samples.svg`,
      STUDIES_SVG: `${env.REACT_APP_STATIC_CONTENT_URL}icons/svgs/studies.svg`,
    },
    CART_ICON_IMAGE: `${env.REACT_APP_STATIC_CONTENT_URL}icons/cartIcon.png`,
    CART_ICON_SVG: `${env.REACT_APP_STATIC_CONTENT_URL}icons/cartIcon.svg`,
    EXTERNAL_LINK_ICON_SVG: `${env.REACT_APP_STATIC_CONTENT_URL}icons/externalLinkIcon.svg`,
    INFO_TOOLTIP_ICON_SVG: `${env.REACT_APP_STATIC_CONTENT_URL}icons/infoTooltip.svg`,
    NAV_BAR_CART_ICON_SVG: `${env.REACT_APP_STATIC_CONTENT_URL}icons/navBarCartIcon.svg`,
    PROGRAM_DETAIL_PARTICIPANT_COUNT_ICON_SVG: `${env.REACT_APP_STATIC_CONTENT_URL}icons/ProgramDetail.ParticipantCount.svg`,
    PROGRAM_DETAIL_FILE_COUNT_ICON_SVG: `${env.REACT_APP_STATIC_CONTENT_URL}icons/ProgramDetail.FileCount.svg`,
    PROGRAM_ICON_IMAGE: `${env.REACT_APP_STATIC_CONTENT_URL}icons/programIcon.png`,
    PROGRAM_ICON_SVG: `${env.REACT_APP_STATIC_CONTENT_URL}icons/ProgramIcon.svg`,
    STUDIES_DETAIL_SVG: `${env.REACT_APP_STATIC_CONTENT_URL}icons/studiesDetail.svg`,
    STUDIES_ICON_IMAGE: `${env.REACT_APP_STATIC_CONTENT_URL}icons/studiesIcon.png`,
  },
  landing: {
    LANDING_PAGE_HERO_IMAGE: `${env.REACT_APP_STATIC_CONTENT_URL}landing/landingPageHero.png`,
    LANDING_TILE_1_IMAGE: `${env.REACT_APP_STATIC_CONTENT_URL}landing/landingTile1.png`,
    LANDING_TILE_2_IMAGE: `${env.REACT_APP_STATIC_CONTENT_URL}landing/landingTile2.png`,
    LANDING_TILE_3_IMAGE: `${env.REACT_APP_STATIC_CONTENT_URL}landing/landingTile3.png`,
    LANDING_TILE_4_IMAGE: `${env.REACT_APP_STATIC_CONTENT_URL}landing/landingTile4.png`,
    LEFT_SIDE_IMAGE: `${env.REACT_APP_STATIC_CONTENT_URL}landing/LeftSide.png`,
    RIGHT_SIDE_IMAGE: `${env.REACT_APP_STATIC_CONTENT_URL}landing/RightSide.png`,
    TILES_BACKGROUND_GRID_IMAGE: `${env.REACT_APP_STATIC_CONTENT_URL}landing/tilesBackgroundGrid.png`,
  },
  logo: {
    CRDC_LOGO_SVG: `${env.REACT_APP_STATIC_CONTENT_URL}logo/crdc-logo.svg`,
  }
};
