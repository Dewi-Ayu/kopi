import styles from '../styles/Home.module.css';
const notasi = {
    celcius: 'C',

};
const DisplaySuhuKopi = (props) => {
    let suhu = props.suhu;
    let notasiSatuan = notasi[props.satuan];

    return (
        <h1 className={styles.title}>
            Kalkulator Suhu Air {suhu}&deg;{notasiSatuan}
        </h1>
    );
};
export default DisplaySuhuKopi;