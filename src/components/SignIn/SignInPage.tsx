import styles from '../../styles/components/SignIn/SignIn.module.css'

export function SignInPage() {
  return (
    <>
      <img src="/icons/simbolo.svg" alt="flaticon" />
      <div className={styles.signInContainer}>
        <div className={styles.logoWhite}>
          <img src="/logo-full-white.svg" alt="" />
        </div>
        <div>
          <h1>Bem-vindo</h1>
          <div className={styles.githubLogin}>
            <p>Faça login com seu github para começar</p>
          </div>
          <div>
            <input type="text"/>
            <button></button>
          </div>
        </div>
      </div>
    </>
  )
}