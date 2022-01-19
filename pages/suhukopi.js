import Head from 'next/head';
import NavBar from '../components/navbar';
import Footer from '../components/footer';
import styles from '../styles/Home.module.css';
import DisplaySuhuKopi from '../components/display-suhukopi';
import DisplayUnsurKopi from '../components/display-unsurkopi';
import InputTemperatur from '../components/input-temperatur';
import { useState } from 'react';
import {
    celciusKeFahrenheit,
    fahrenheitKeCelcius,
} from '../libs/konversi-suhukopi';

const Aplikasi = () => {
    let [temperatur, setTemperatur] = useState(0);
    let [satuan, setSatuan] = useState('celcius');

    let celcius =
        satuan == 'celcius' ? temperatur : fahrenheitKeCelcius(temperatur);
    let fahrenheit =
        satuan == 'fahrenheit' ? temperatur : celciusKeFahrenheit(temperatur);

    return (
        <div className={styles.container}>
            <Head>
                <title>Aplikasi Temperature Kopi</title>
                <meta
                    name='description'
                    content='Contoh state management pada NextJS' />
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <NavBar />

            <main className={styles.main}>
                <DisplaySuhuKopi suhu={temperatur} satuan={satuan} />

                <p className={styles.description}> Masukkan temperatur air dalam satuan Celcius <br />
                    <input
                        type='number'
                        value={celcius}
                        onChange={(e) => {
                            setTemperatur(e.target.value); setSatuan('celcius');
                        }}
                    />
                </p>

                <div className={styles.grid}>
                    <DisplayUnsurKopi unsur='air' suhu={celcius} />
                </div>
            </main>
            <Footer />
        </div>
    );
};
export default Aplikasi;