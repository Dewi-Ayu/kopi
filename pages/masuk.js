import NavBar from '../components/navbar';
import Footer from '../components/footer';
import Formulir from '../components/form-kontak-profil-sosmed';

const Home = () => {

    return (
        <>
        <NavBar />
            <Formulir />
        <Footer/>
        </>
    );
};

export default Home;




//=====================================================================


// import Head from 'next/head'
// import Link from 'next/link';
// import Image from 'next/image'
// import NavBar from '../components/navbar';
// import Footer from '../components/footer';
// import 'bootstrap/dist/css/bootstrap.css';
// import { Formik, Form, Field } from 'formik';

// const Masuk = () => (
//     <div>
//         <Head>
//             <title>Kopi Sawah Wetan</title>
//         </Head>
//         <NavBar />

//         <div>
//             <h1>Ayo Masuk</h1>
//         </div>



//         <Footer />
//     </div>
// );

// export default Masuk;



// const initFormValues = {
//     namaLengkap: '',
//     email: '',
//     jenisKelamin: 'L',
//     agama: 'Islam',
//     alamat: '',
//     paketBelajar: [],
// };
// const handleOnSubmit = (values, { setSubmitting }) => {
//     setTimeout(() => {
//         alert(JSON.stringify(values, null, 2));
//         setSubmitting(false);
//     }, 400);
// };
// const MainForm = () => (
//     <Formik
//         initialValues={initFormValues}
//         onSubmit={handleOnSubmit}
//     >
//         {({ isSubmitting }) => (
//             <Form>
//                 <div className='row mb-3'>
//                     <label
//                         htmlFor='namaLengkap'
//                         className='col-md-2 col-form-label'
//                     >
//                         Nama lengkap
//                     </label>
//                     <div className='col-md-10'>
//                         <Field
//                             type='text'
//                             name='namaLengkap'
//                             className='form-control'
//                         />
//                     </div>
//                 </div>
//                 <div className='row mb-3'>
//                     <label htmlFor='email'
//                         className='col-md-2 col-form-label'>
//                         Email </label>
//                     <div className='col-md-10'>
//                         <Field
//                             type='email'
//                             name='email'
//                             className='form-control'
//                             placeholder='example@domain.bla'
//                         />
//                     </div>
//                 </div>
//                 <fieldset className='row mb-3'>
//                     <legend className='col-form-label col-md-2 pt-0'>
//                         Jenis kelamin
//                     </legend>
//                     <div className='col-md-10'>
//                         <div className='form-check'>
//                             <Field
//                                 className='form-check-input'
//                                 type='radio'
//                                 name='jenisKelamin'
//                                 value='L'
//                             />
//                             <label
//                                 className='form-check-label'
//                                 htmlFor='jenisKelamin'
//                             > Pria
//                             </label>
//                         </div>
//                         <div className='form-check'>
//                             <Field
//                                 className='form-check-input'
//                                 type='radio'
//                                 name='jenisKelamin'
//                                 value='P' />
//                             <label
//                                 className='form-check-label'
//                                 htmlFor='jenisKelamin'
//                             >
//                                 Wanita
//                             </label>
//                         </div>
//                     </div>
//                 </fieldset>
//                 <div className='row mb-3'>
//                     <label
//                         htmlFor='agama'
//                         className='col-md-2 col-form-label'>
//                         Agama
//                     </label>
//                     <div className='col-md-10'>
//                         <Field
//                             as='select'
//                             name='agama'
//                             className='form-control'
//                         >
//                             <option>Islam</option>
//                             <option>Katolik</option>
//                             <option>Protestan</option>
//                             <option>Hindu</option>
//                             <option>Buddha</option>
//                             <option>Konghucu</option>
//                         </Field>
//                     </div>
//                 </div>
//                 <div className='row mb-3'>
//                     <label
//                         htmlFor='alamat'
//                         className='col-md-2 col-form-label'>
//                         Alamat
//                     </label>
//                     <div className='col-md-10'>
//                         <Field
//                             name='alamat'
//                             as='textarea'
//                             className='form-control'
//                         />
//                     </div>
//                 </div>
//                 <fieldset className='row mb-3'>
//                     <legend className='col-form-label col-md-2 pt-0'>
//                         Paket pilihan
//                     </legend>
//                     <div className='col-md-10'>
//                         <div className='form-check'>
//                         </div>

//                         <Field
//                             className='form-check-input'
//                             type='checkbox'
//                             name='paketBelajar'
//                             value='Desain Web'
//                         />
//                         <label
//                             className='form-check-label'
//                             htmlFor='paketBelajar'
//                         >
//                             Desain Web
//                         </label>
//                     </div>
//                     <div className='form-check'>
//                         <Field
//                             className='form-check-input'
//                             type='checkbox'
//                             name='paketBelajar'
//                             value='Pemrograman Web'
//                         />
//                         <label
//                             className='form-check-label'
//                             htmlFor='paketBelajar'
//                         >
//                             Pemrograman Web
//                         </label>
//                     </div>
//                     <div
//                         className='form-check'>
//                         <Field
//                             className='form-check-input'
//                             type='checkbox'
//                             name='paketBelajar'
//                             value='Fullstack Development'
//                         />
//                         <label
//                             className='form-check-label'
//                             htmlFor='paketBelajar'
//                         >
//                             Fullstack Development
//                         </label>
//                     </div>
//                 </fieldset>

//                 <div className='row'>
//                     <div className='col-md-10 offset-md-2'>
//                         <button
//                             type='submit'
//                             className='btn btn-primary me-3'
//                             disabled={isSubmitting}
//                         >
//                             Kirim
//                         </button>
//                         <button
//                             type='reset'
//                             className='btn btn-outline-secondary'
//                         >
//                             Reset
//                         </button>
//                     </div>
//                 </div>
//             </Form>
//         )}
//     </Formik >
// );
// export default MainForm;