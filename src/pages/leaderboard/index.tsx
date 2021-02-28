import Head from 'next/head'
import { GetServerSideProps } from 'next'

import { NavigationBar } from '../../components/Dashboard/NavigationBar';
import { Header } from '../../components/Leaderboard/Header'

import styles from '../../styles/pages/Leaderboard.module.css';
import { ChallengesProvider } from '../../contexts/ChallengesContext';
import { LeaderUsers } from '../../components/Leaderboard/LeaderUsers';

interface HomeProps {
  level: number;
  currentExperience: number;
  challengesCompleted: number;
}

export default function Home(props: HomeProps) {
  return (
    <ChallengesProvider
      level={props.level}
      currentExperience={props.currentExperience} 
      challengesCompleted={props.challengesCompleted}>

      <NavigationBar />

      <div className={styles.container}>

        <Head>
          <title>Leaderboard | move.it</title>
        </Head>

        <Header />
        <LeaderUsers />


      </div>
    </ChallengesProvider>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {

  const { level, currentExperience, challengesCompleted } = ctx.req.cookies;

  return {
    props: {
      level: Number(level),
      currentExperience: Number(currentExperience),
      challengesCompleted: Number(challengesCompleted),
    }
  }
}