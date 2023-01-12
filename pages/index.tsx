// @ts-nocheck
import Stack from '@mui/material/Stack'
import Head from 'next/head'
import ChannelController from '../components/ChannelController'
import FixtureController from '../components/FixtureController'
import styles from '../styles/Home.module.css'
// import WookieSettings from '../fixtures/CameoWookie400RGB_9CH.json'
import SettingJson from '../fixtures/ScandDJLEDDiamond_28CH.json'

export default function Home() {
	return (
		<div className={styles.container}>
			<Head>
				<title>DMX App</title>
			</Head>

			<main className={styles.main}>
				<FixtureController channels={SettingJson.channels}/>
			</main>
		</div>
	)
}

