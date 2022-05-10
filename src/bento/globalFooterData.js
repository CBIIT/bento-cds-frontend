import env from '../utils/env';
// footerLogoImage ideal image size 310x80 px

export default {
  footerLogoImage: 'https://raw.githubusercontent.com/cbiit/datacommons-assets/main/bento/images/icons/png/footerlogo.png',
  footerLogoAltText: 'Footer Logo',
  footerLogoHyperlink: 'https://frederick.cancer.gov/',
  footerStaticText: 'NIH … Turning Discovery Into Health®',
  version: env.REACT_APP_FE_VERSION,
  // BEversion: env.REACT_APP_BE_VERSION,
  // A maximum of 3 Subsections (link_sections) are allowed
  // A maximum of 4 Subsection Links ('items' under link_sections) are allowed
  // A maximum of 4 Anchor Links (global_footer_links) are allowed
  // Ideal size for icon is 20x20 px
  link_sections: [
    {
      title: 'About CDS',
      items: [
        {
          text: 'CDS',
          link: '/cds',
        },
        {
          text: 'CRDC',
          link: 'https://datacommons.cancer.gov/',
        },
        {
          text: 'How to Submit Data',
          link: 'https://cbiit.github.io/bento-docs/',
        },
      ],
    },
    {
      title: 'About the Data',
      items: [
        {
          text: 'Data Access Policies',
          link: 'https://datacommons.cancer.gov/',
        },
        {
          text: 'Data Analysis',
          link: 'https://cbiit.github.io/bento-docs/',
        },
        {
          text: 'REST APIs',
          link: '/cds',
        },
      ],
    },
    {
      title: 'About Data Submission',
      items: [
        {
          text: 'Data Governance Advisory Board',
          link: 'https://datacommons.cancer.gov/',
        },
        {
          text: 'Process and Tools',
          link: 'https://cbiit.github.io/bento-docs/',
        },
        {
          text: 'Submission Guide',
          link: '/cds',
        },
      ],
    },
    {
      title: 'NIH Policies',
      items: [
        {
          text: ' Disclaimer Policies Accessibility FOIA',
          link: 'bento-help@nih.gov',
        },
        {
          text: 'Policies',
          link: 'bento-help@nih.gov',
        },
        {
          text: 'Accessibility',
          link: 'bento-help@nih.gov',
        },
        {
          text: 'FOIA',
          link: 'bento-help@nih.gov',
        },
      ],
    },
  ],
  global_footer_links: [
    {
      text: 'U.S. Department of Health and Human Services',
      link: 'https://www.hhs.gov',
    },
    {
      text: 'National Institutes of Health',
      link: 'https://www.nih.gov',
    },
    {
      text: 'National Cancer Institute',
      link: 'https://www.cancer.gov',
    },
    {
      text: 'USA.gov',
      link: 'https://www.usa.gov',
    },
  ],
};
