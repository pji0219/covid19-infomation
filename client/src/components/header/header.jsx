import React from 'react';
import styles from './header.module.css';
import { Link } from 'react-router-dom';

function Header() {
  const navStyle = {
    color: 'black',
    textDecoration: 'none',
    textDecorationColor: 'black',
  };

  return (
    <header className={styles.header}>
      <span className={styles.title}>
        <i class="fas fa-virus"></i>
        코로나 알고가!
      </span>
      <div className={styles.korea}>
        <button>
          <Link to="/" style={navStyle}>
            국내 현황
          </Link>
        </button>
      </div>
      <div className={styles.global}>
        <button>
          <Link to="/global" style={navStyle}>
            해외 현황
          </Link>
        </button>
      </div>
      <div className={styles.news}>
        <button>
          <Link to="/news" style={navStyle}>
            관련 뉴스
          </Link>
        </button>
      </div>
      <div className={styles.data}>
        <button>
          <Link to="/source" style={navStyle}>
            데이터 출처
          </Link>
        </button>
      </div>
    </header>
  );
}

export default Header;
