import React from 'react';

const linkGenerator = (paragraph, customColorWhite = false) => {
  const styles = () => ({
    text: {
      color: '#000000',
      fontFamily: 'Nunito',
      fontSize: '16px',
      lineHeight: '30px',
      fontWeight: 'bold',
    },
    email: {
      color: '#900F89',
      fontWeight: 'bold',
    },
    link: {
      color: '#7747ff',
      fontWeight: 'bold',
      '&:hover': {
        color: '#7747ff',
        textDecoration: 'underline',
      },
    },
  });
  return (
    paragraph && (
    <div className={styles.text}>
      {paragraph.split('$$').map((splitedParagraph) => {
        // Checking for regex ()[] pattern
        if (splitedParagraph != null && ((/\[(.+)\]\((.+)\)/g.test(splitedParagraph)) || (/\((.+)\)\[(.+)\]/g.test(splitedParagraph)))) {
          const title = splitedParagraph.match(/\[(.*)\]/).pop();
          const mailTo = `mailto:${title}`;
          const linkAttrs = splitedParagraph.match(/\((.*)\)/).pop().split(' ');

          const link = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+\.[A-Za-z]+$/.test(linkAttrs) ? (
            <a
              title={title}
              href={mailTo}
              color="inherit"
              className={styles.link}
            >
              {title}
            </a>
          ) : (
            customColorWhite ? (
              <a
                title={title}
                href={linkAttrs}
                target="_blank"
                style={{ color: 'white' }}
                className={styles.link}
                rel="noreferrer"
              >
                {title}
              </a>
            ) : (
              <a
                title={title}
                href={linkAttrs}
                target="_blank"
                color="inherit"
                className={styles.link}
                rel="noreferrer"
              >
                {title}
              </a>
            )
          );

          return (
            <>
              {link}

            </>
          );
        }
        return splitedParagraph;
      })}
    </div>
    )
  );
};

export default linkGenerator;
