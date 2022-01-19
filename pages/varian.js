import Head from 'next/head'
import NavBar from '../components/navbar';
import Footer from '../components/footer';
import 'bootstrap/dist/css/bootstrap.css';
import styles from '../styles/Home.module.css';

const Varian = () => (
    <div>
        <Head>
            <title>Varian Kopi Sawah Wetan</title>
        </Head>
        <NavBar />
        <br></br>
        <div>
            <center><h1>Varian Kopi Sawah Wetan</h1></center>
            <br></br>
            <div className="container overflow-hidden">
                <div className="row gx-5">
                    <div className="col-4">
                        <div className="card">
                            <img src="img7.jpeg" className="card-img-top" alt=""></img>
                            <center>
                                <div className="card-body">
                                    <h5 className="card-title">Kopi Robusta</h5>
                                    <p className="card-text" style={{ height: "180px" }}>Robusta adalah salah satu jenis tanaman kopi dengan nama ilmiah Coffea canephora. Nama robusta diambil dari kata “robust“, istilah dalam bahasa Inggris yang artinya kuat. Sesuai dengan namanya, minuman yang diekstrak dari biji kopi robusta memiliki cita rasa yang kuat dan cenderung lebih pahit dibanding arabika</p>
                                </div>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item">Rp. 28.000,-</li>
                                </ul>
                                <div className="card-body">
                                    <button type="button" className="btn btn-danger" href="">Beli Sekarang</button>
                                </div>
                            </center>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="card">
                            <img src="img8.jpeg" className="card-img-top" alt=""></img>
                            <center>
                                <div className="card-body">
                                    <h5 className="card-title">Kopi Arabika</h5>
                                    <p className="card-text" style={{ height: "180px" }}>Kopi Arabika adalah salah satu dari dua spesies tanaman kopi yang ada berada dalam budidaya secara global. (yang lainnya adalah C. Canephora, atau yang biasa kita kenal dengan sebutan Kopi Robusta). Arabika adalah spesies kopi yang dominan di Amerika Tengah, dan selatan, dan sebagian besar Negara Afrika Timur, dan dianggap menghasilkan kualitas cup tertinggi</p>
                                </div>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item">Rp. 28.000,-</li>
                                </ul>
                                <div className="card-body">
                                    <button type="button" className="btn btn-primary" href="">Beli Sekarang</button>
                                </div>
                            </center>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="card">
                            <img src="img9.jpeg" className="card-img-top" alt=""></img>
                            <center>
                                <div className="card-body">
                                    <h5 className="card-title">Kopi Excelsa</h5>
                                    <p className="card-text" style={{ height: "180px" }}>Excelsa adalah produk yang ditanam seperti dengan Robusta, yakni di ketinggian di bawah 800 mdpl. Cita rasa kopi ini hampir sepadan. Untuk bisa menghasilkan cita rasa kopi Excelsa yang istimewa, tentu saja dimulai dari proses produksi dan pengolahan yang baik. nama populer untuk salah satu jenis tanaman kopi dari genus Coffea. Belum ada kata sepakat dikalangan ahli taxonomi untuk menentukan</p>
                                </div>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item">Rp. 28.000,-</li>
                                </ul>
                                <div className="card-body">
                                    <button type="button" className="btn btn-warning" href="">Beli Sekarang</button>
                                </div>
                            </center>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <br /><hr />
        <Footer />
    </div>
);

export default Varian;