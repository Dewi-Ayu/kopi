import { Formik, Form, Field } from 'formik';
const initFormValues = {
    nama: '',
    telepon: '',
    alamat: '',
};
const handleOnSubmit = async (values) => {
    const respon = await fetch('/api/tambah-kontak', {
        method: 'POST',
        body: JSON.stringify(values),
    });

    let status = await respon.json();
    if (status != null) {
        location.reload();
    }
};
const FormKontak = () => (
    <Formik initialValues={initFormValues} onSubmit={handleOnSubmit}>
        {({ isSubmitting }) => (
            <Form>
                <label htmlFor='nama'>Nama</label>
                <Field type='text' name='nama' />
                <br />

                <label htmlFor='telepon'>Nomor telepon</label>
                <Field type='tel' name='telepon' />
                <br />

                <label htmlFor='alamat'>Alamat</label>
                <Field type='text' name='alamat' />
                <br />

                <button type='submit' disabled={isSubmitting}>
                    Simpan
                </button>
            </Form>
        )}
    </Formik>
);
export default FormKontak;