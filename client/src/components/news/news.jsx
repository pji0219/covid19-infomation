import React from 'react';
import styles from './news.module.css';

function News({ title, description, link, pubDate }) {
  return (
    <li className={styles.news}>
      <h5 className={styles.news__title}>
        <a href={link} title={title} target="blank">
          {title} 👈click
        </a>
      </h5>
      <p className={styles.news__description}>{description}</p>
      <p className={styles.news__date}>{pubDate}</p>
    </li>
  );
}

export default News;
