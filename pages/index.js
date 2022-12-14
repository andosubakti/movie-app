import Head from 'next/head'
import styles from '../styles/Home.module.css'
import React from 'react'
import SearchMovie from '../components/molecules/Search'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Movie App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 style={{fontSize: '4rem'}}>
          Movie App
        </h1>
        <SearchMovie/>
      </main>
    </div>
  )
}
