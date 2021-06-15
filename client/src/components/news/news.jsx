import React from 'react';
import styles from './news.module.css';

function News({ title, description, link, pubDate }) {
  return (
    <li className={styles.news}>
      <a
        className={styles.news__title}
        href={link}
        title={title}
        target="blank"
      >
        {title} 👈click
      </a>
      <p className={styles.news__description}>{description}</p>
      <p className={styles.news__date}>{pubDate}</p>
    </li>
  );
}

export default News;
