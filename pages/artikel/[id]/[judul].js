import NavBar from '../../../components/navbar';
import Head from 'next/head';
import styles from '../../../styles/Home.module.css';
import Link from 'next/link';

export async function getServerSideProps(context) {
    let idArtikel = context.params.id;
    let judulArtikel = context.params.judul;

    return { props: { idArtikel, judulArtikel } };
}

const Artikel = (props) => (
    <div className={styles.container}>
        <Head>
            <title>Filosofi Kopi Sawah Wetan</title>
            <meta
                name='description'
                content='halaman filosofi kopi sawah wetan'
            />
            <link rel='icon' href='/favicon.ico' />
        </Head>
        <NavBar />
        <main className={styles.main}>
            <h1 className={styles.title}>Filosofi Kopi Sawah Wetan</h1>

            <div className={styles.grid}>
                <table>
                    <tr>
                        <td>ID Kopi Sawah Wetan</td>
                        <td>:</td>
                        <td>{props.idArtikel}</td>
                    </tr>
                    <tr>
                        <td>Varian Kopi</td>
                        <td>:</td>
                        <td>{props.judulArtikel}</td>
                    </tr>
                </table>
            </div>
        </main>
    </div>
);

export default Artikel;