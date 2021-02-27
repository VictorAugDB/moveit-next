import styles from '../../styles/components/Dashboard/NavigationBar.module.css'

export function NavigationBar() {
  return (
    <div className={styles.navigationBarContainer}>
      <img src="/logo-full-blue.svg" alt="favicon-blue" />
      <div>
        <section>
          <img className="actions" src="/icons/home.svg" alt="home" />
        </section>
        <section>
          <img className="actions" src="/icons/award.svg" alt="award" />
        </section>
      </div>
    </div>
  )
}