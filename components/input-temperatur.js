import styles from '../styles/Home.module.css';
const satuan = {
    celcius: 'Celcius',
};
const InputTemperatur = (props) => {
    let satuanSuhu = props.satuan;
    let nilaiSuhu = props.nilai;

    return (
        <p className={styles.description}>
            Masukkan temperatur air dalam satuan {satuan[satuanSuhu]} <br />
            <input
                type='number'
                value={nilaiSuhu}
                onChange=''
            />
        </p>
    );
};
export default InputTemperatur;