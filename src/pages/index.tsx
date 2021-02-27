import Head from 'next/head'
import { GetServerSideProps } from 'next'

import { Profile } from '../components/Profile';
import { CompletedChallenges } from '../components/CompletedChallenges';
import { Countdown } from '../components/Countdown';
import { ExperienceBar } from '../components/ExperienceBar';
import { ChallengeBox } from '../components/ChallengeBox';

import styles from '../styles/pages/Home.module.css';
import { CountdownProvider } from '../contexts/CountdownContext';
import { ChallengesProvider } from '../contexts/ChallengesContext';

interface HomeProps {
  level: number;
  currentExperience: number;
  challengesCompleted: number;
}

export default function Home(props: HomeProps) {
  return (
    <ChallengesProvider
      level={props.level}
      currentExperience={props.currentExperience}  challengesCompleted={props. challengesCompleted}>
      <div className={styles.container}>
        <Head>
          <title>Inicio | move.it</title>
        </Head>
        <ExperienceBar />

        <CountdownProvider>
          <section>
            <div>
              <Profile />
              <CompletedChallenges />
              <Countdown />
            </div>
            <div>
              <ChallengeBox />
            </div>
          </section>
        </CountdownProvider>
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

// Com a função getServerSideProps é possível repassar as informações do Next.js para o cliente que roda em React.
// Tudo que for feito de chamadas para serviços externos (tudo que é assincrono), que for feito dentro do componente, não estará disponível na tela, não estará disponível quando o motor de busca um motor de busca como google for acessar a aplicação, pois ele não irá aguardar a chamada ser finalizada, pois ela acontece somente no browser.
// essa função faz com que antes de construir a interface, antes de finalizar o carregamento da tela, ela irá fazer a chamda a api, vai pegar os dados repassar os dados prontos e dai o componente mostra os dados em tela.
// Essa função getServerSideProps, fez com que o next surgisse, o nome já deixa bem claro que ela roda somente do lado do servidor, ou seja do node.
// Backend (Ruby)
// Next.js (Node.js) 
// Frontend (React)
