import styles from '../../styles/components/Dashboard/NavigationBar.module.css'
import Link from 'next/link';
import { useCallback, useContext, useEffect, useState } from 'react';
import { NavigationBarContext } from '../../contexts/NavigationBarContext';

export function NavigationBar() {
  const { isAwardSelected, isHomeSelected, handleAwardSelect, handleHomeSelect } = useContext(NavigationBarContext);

  return (
    <div className={styles.navigationBarContainer}>
      <img src="/logo-full-blue.svg" alt="favicon-blue" />
      <div>
        <Link href="/dashboard">
          <section onClick={handleHomeSelect}>
            {isHomeSelected
              ?
              <img className={styles.actionHome} src="/icons/home-purple.svg" alt="home" />
              :
              <img className={styles.actionHome} src="/icons/home.svg" alt="home" />
            }
          </section>

        </Link>
        <Link href="/leaderboard"
        >
          <section onClick={handleAwardSelect}>
            {isAwardSelected
              ?
              <img className={styles.actionAward} src="/icons/award-purple.svg" alt="award" />
              :
              <img className={styles.actionAward} src="/icons/award.svg" alt="award" />
            }
          </section>

        </Link>
      </div>
    </div>
  )
}