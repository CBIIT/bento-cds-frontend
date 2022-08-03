import React from 'react';

const linkGenerator = (paragraph) => {
  const styles = () => ({
    text: {
      color: '#000000',
      fontFamily: 'Nunito',
      fontSize: '16px',
      lineHeight: '30px',
    },
    email: {
      color: '#0296C9',
      fontWeight: 'bold',
    },
    link: {
      color: '#0296C9',
      '&:hover': {
        color: '#0296C9',
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

          const link = (
            <a
              title={title}
              href={mailTo}
              color="inherit"
              className={styles.link}
            >
              {title}
            </a>
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
