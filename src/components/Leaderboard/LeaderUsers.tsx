import { useContext } from 'react';
import { ChallengesContext } from '../../contexts/ChallengesContext';
import styles from '../../styles/components/Leaderboard/LeaderUsers.module.css';

export function LeaderUsers() {
  const { level, challengesCompleted, currentExperience } = useContext(ChallengesContext);

  return (
    <div className={styles.leaderUsersContainer}>
      <section>
        <p>1</p>
        <div className={styles.profileContainer}>
          <img src="https://avatars.githubusercontent.com/u/50158294?s=460&u=902e52b40079476d2b49d0aa507d1a7a387f64a5&v=4" alt="Victor Augusto" />
          <div>
            <strong>Victor Augusto</strong>
            <span>
              <img src="icons/level.svg" alt="Level" />
              Level {level}
            </span>
          </div>
        </div>
      </section>
      <section>
        <span>
          <p>{challengesCompleted}</p>
          <p>completados</p>
        </span>
        <span>
          <p>{currentExperience}</p>
          <p>experiência</p>
        </span>
      </section>
    </div>
  )
}