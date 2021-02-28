import styles from '../../styles/components/Leaderboard/Header.module.css';

export function Header() {
  return (
    <div className={styles.headerContainer}>
      <h1>LeaderBoard</h1>

      <div>
        <section>
          <p>Posição</p>
          <p>Usuário</p>
        </section>
        <section>
          <p>Desafios</p>
          <p>Experiência</p>
        </section>
      </div>
    </div>
  )
}