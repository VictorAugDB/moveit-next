import { SignInPage } from '../components/SignIn/SignInPage';
import styles from '../styles/pages/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <SignInPage />
    </div>
  )
}