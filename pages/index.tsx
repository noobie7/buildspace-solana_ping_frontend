import { NextPage } from 'next'
import styles from '../styles/Home.module.css'
import { AppBar } from '../components/AppBar'
import Head from 'next/head'
import { PingButton } from '../components/PingButton'
import { Form } from '../components/Form'
import { Balance } from '../components/Balance'

const Home: NextPage = (props) => {

  return (
    <div className={styles.App}>
      <Head>
        <title>Wallet-Adapter Example</title>
        <meta
          name="description"
          content="Wallet-Adapter Example"
        />
      </Head>
        <AppBar />
        <div className={styles.AppBody}>
          <PingButton/>
        </div>
        <Balance/>
        <Form/>
    </div>
  );
}

export default Home;