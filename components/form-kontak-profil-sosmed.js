import { Formik, Form, Field } from 'formik';
import TabelDaftarKontak from './tabel-daftar-kontak';


const initFormValues = {
    namaKontak: '',
    telepon: '',
    alamat: '',
    tanggalLahir: '',
    gender: 'L',
    menikah: 'belum',
    facebook: '',
    instagram: '',
    twitter: '',
    tiktok: '',
};



const handleOnSubmit = async (values) => {
    let url = '/api/tambah-kontak-lengkap';

    const respon = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(values),
    });
    let status = await respon.json();
    if (status != null) {
        location.replace('/');
    }
};
const Formulir = () => (
    <Formik initialValues={initFormValues} onSubmit={handleOnSubmit}>
        {({ values, isSubmitting, setFieldValue }) => (
            <Form className='container'>
                <h2>
                    Daftarkan dirimu sekarang juga! Nikmati promo spesial hanya untuk anda!..
                </h2>
                <br />
                <div className='row'>
                    <div className='col-3'>
                        <div className='form-group'>
                            <label htmlFor='namaKontak'>Nama</label>
                            <Field type='text' className='form-control' style={{ width: "200px" }} name='namaKontak' />
                        </div>
                        <div className='form-group'>
                            <label htmlFor='telepon'>No. Telepon</label>
                            <Field type='tel' className='form-control' style={{ width: "200px" }} name='telepon' />
                        </div>


                        <div className='form-group'>
                            <label htmlFor='alamat'>Alamat</label>
                            <Field as='textarea' className='form-control' style={{ width: "200px" }} name='alamat' />
                        </div>
                        <div className='form-group'>
                            <label htmlFor='tanggalLahir'>Tanggal Lahir</label>
                            <Field type='date' className='form-control' style={{ width: "200px" }} name='tanggalLahir' />
                        </div>
                        <div className='form-group'>
                            <label htmlFor='gender'>Jenis Kelamin</label>
                            <br />
                            <Field type='radio' name='gender' value='L' /> Pria
                            <Field type='radio' name='gender' value='P' /> Wanita
                        </div>
                        <div className='form-group'>
                            <label htmlFor='menikah'>Status Pernikahan</label>
                            <br />
                            <Field type='radio' name='menikah' value='sudah' /> Sudah
                            menikah
                            <Field type='radio' name='menikah' value='belum' /> Belum
                            menikah
                        </div>
                    </div>
                    <div className='col-3'>
                        <div className='form-group'>
                            <label htmlFor='facebook'>Akun Facebook</label>
                            <Field type='text' className='form-control' style={{ width: "200px" }} name='facebook' />
                        </div>
                        <div className='form-group'>
                            <label htmlFor='instagram'>Username Instagram</label>
                            <Field type='text' className='form-control' style={{ width: "200px" }} name='instagram' />
                        </div>
                        <div className='form-group'>
                            <label htmlFor='twitter'>Username Twitter</label>
                            <Field type='text' className='form-control' style={{ width: "200px" }} name='twitter' />
                        </div>
                        <div className='form-group'>
                            <label htmlFor='tiktok'>Username Tiktok</label>
                            <Field type='text' className='form-control' style={{ width: "200px" }} name='tiktok' />
                        </div>
                    </div>
                    <div className='col-6'>
                        <TabelDaftarKontak/>
                    </div>
                </div>

                <br />
                <button type='submit' disabled={isSubmitting}>
                    Simpan
                </button>
            </Form>
        )}
    </Formik>
);
export default Formulir;
