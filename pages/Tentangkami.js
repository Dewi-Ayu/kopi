import Head from 'next/head'
import Link from 'next/link';
import Image from 'next/image'
import NavBar from '../components/navbar';
import Footer from '../components/footer';
import 'bootstrap/dist/css/bootstrap.css';

const Tentangkami = () => (
    <div>
        <Head>
            <title>Tentang Kami</title>
        </Head>
        <NavBar />
        <div>
            <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="img17.png" className="d-block w-100" alt="..." />
                    </div>
                </div>
            </div>
            <br />
            <center><h1>Tentang Kopi Sawah Wetan</h1></center>
            <br />
            <div className="container overflow-hidden">
                <div className="row gy-5">
                    <div className="col-6">
                        <div className="p-3 border bg-light">
                            <justify>
                                Bisnis kopi menjadi pilihannya. Yang sejak tanggal 26 April 2020 lalu kami memutuskan untuk membangun Brand Kopi Sawah Wetan. Nama yang lahir dari kepemilikan sebuah perkebunan kopi yang tempatnya berdampingan dengan hamparan sawah yang luas. Sedangkan kata Wetan kiranya mewakili keagungan Banyuwangi sebagai Kabupaten terluas diujung timur tanah jawa yang penuh dengan misteri.
                                <br /><br />
                                Kopi bagi masyarakat Banyuwangi bukan sekedar suguhan wajib bagi tamu yang siap saji. Lebih dari itu, kopi telah menjadi bagian dari Ritualistic behavior. Menyajikan secangkir kopi kepada tamu merupakan simbol sebuah kehormatan, sambutan keramahan dan persaudaraan yang abadi. Dari tradisi ini, masyarakat Banyuwangi menjadikan secangkir kopi sebagai salah satu harta benda yang selalu diwariskan kepada anak keturunannya nanti.
                                <br /><br />
                                Kopi Sawah Wetan menjadikan varian biji kopi (Excelsa) Robusta dan Arabica menjadi pilihan utama. Secara teknis biji kopi tersebut ditanam pada ketinggian  900 dpl dengan suhu yang sejuk diantara 16-20 derajat Celsius. Dalam hal ini Perkebunan Kopi Sawah Wetan berlokasi di Desa Bulusari dan Desa Telemung. yang secara geografis lokasinya sangat cocok bagi tumbuhnya komoditas kopi berkualitas tinggi.
                                <br /><br />
                            </justify>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="p-3 border bg-light">
                            <div className="text-center">
                                <img src="img11.jpg" className="img-thumbnail" alt="..." />
                            </div>
                        </div>
                    </div>
                    <div className="container overflow-hidden">
                        <div className="row gy-10">
                            <div className="col-12">
                                <div className="p-3 border bg-light">
                                    <p>
                                        Kopi Sawah Wetan [Robusta] memiliki aroma dan rasa yang kuat dan cenderung kasar. Namun kopi tersebut memiliki rasa yang netral. Aromanya seperti kacang-kacangan yang lembut, demikian juga saat sudah diseduh. Tapi soal rasa, kopi ini cocok buat pencinta kopi bersensasi strong. Berbeda dengan kopi [Arabika]. Kopi ini punya aroma dan rasa yang sangat variatif. Dikemas dengan sangat rapi. Sesaat setelah dibuka akan mengeluarkan semburat aroma wangi mulai dari bunga, buah hingga kacang-kacangan. Kualitas rasanya tak kalah kaya, kandungan gula yang lebih tinggi pada kopi arabika menjadikan kopi ini terasa manis dan asam.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <br /><br /><br />
                <div className="container">
                    <center><h1>Motivasi dari Tentang Kopi Sawah Wetan bermula dari keinginan untuk membuat
                        dampak positif di dunia sekitar kita.</h1></center><br />
                    <h5>
                        Kopi Sawah Wetan sangat bersemangat untuk membuat perbedaan di dunia dan Mitra Kerja kami serta pelanggan sangat berharga dalam mencapai tujuan ini. Kami percaya bahwa orang-orang sangat senang untuk menyumbang, jadi kami menciptakan platform di mana pelanggan dapat dengan mudah berkontribusi ke Kegiatan Mitra kami sambil mendapatkan produk hebat sebagai imbalan. Kopi adalah bagian integral dalam kehidupan orang Amerika dan kami percaya ini adalah kendaraan yang luar biasa untuk mempengaruhi perubahan. Kami Didorong untuk membuat perbedaan.
                    </h5>
                </div>
                <br /><br />
                <Footer />
            </div>
        </div>
    </div>
);

export default Tentangkami;