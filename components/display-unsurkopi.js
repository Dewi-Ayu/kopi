import styles from '../styles/Home.module.css';

const unsur = {
    air: {
        nama: 'Air',
        titikDidih: 90,
        //dalam Celcius 
    },
};

const DisplayUnsurKopi = (props) => {
    let namaUnsur = unsur[props.unsur].nama;
    let titikDidihUnsur = unsur[props.unsur].titikDidih;
    let suhuSaatIni = props.suhu;

    return (
        <div className={styles.card}>
            <h2>{namaUnsur.toUpperCase()}</h2>
            {suhuSaatIni >= titikDidihUnsur ? (
                <p>{namaUnsur} mendidih pada suhu ini, jadi cocok untuk membuat kopi</p>
            ) : (
                <p>{namaUnsur} tidak mendidih pada suhu ini, jadi tidak cocok untuk membuat kopi</p>
            )}
        </div>
    );
};
export default DisplayUnsurKopi;