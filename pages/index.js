import Head from 'next/head'
import NavBar from '../components/navbar';
import Footer from '../components/footer';
import 'bootstrap/dist/css/bootstrap.css';
import { useState } from 'react';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Kopi Sawah Wetan</title>
      </Head>
      <NavBar />

      <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="img10.jpg" className="d-block w-100" alt=""></img>
          </div>
          <div className="carousel-item">
            <img src="img2.jpg" className="d-block w-100" alt=""></img>
          </div>
          <div className="carousel-item">
            <img src="img3.jpg" className="d-block w-100" alt=""></img>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <br></br><br></br><br></br>


      <div className="container overflow-hidden">
        <div className="row gx-5">
          <div className="col-4">
            <div className="card">
              <img src="img16.jpg" className="card-img-top" alt=""></img>
              <center>
                <div className="card-body">
                  <h5 className="card-title">Beli Kopi Online Terbaik</h5>
                  <p className="card-text" style={{ height: "180px" }}>
                    Kami rajin dalam mengejar biji kopi terbaik kami. Proses pencarian sumber kami yang cermat hanya memastikan kualitas terbaik, dipilih sendiri, 100% Arabika, kopi Kelas Khusus.
                  </p>
                </div>
              </center>
            </div>
          </div>
          <div className="col-4">
            <div className="card">
              <img src="img12.jpg" className="card-img-top" alt=""></img>
              <center>
                <div className="card-body">
                  <h5 className="card-title">Dikirim ke Pintu Anda</h5>
                  <p className="card-text" style={{ height: "180px" }}>Di Kopi Sawah Wetan, kesegaran adalah kuncinya. Kami mengemas & mengirimkan setiap pesanan dalam waktu 48 jam setelah pemanggangan untuk memberikan Anda kopi yang paling segar. Dari pemanggang kami hingga di depan pintu Anda.</p>
                </div>
              </center>
            </div>
          </div>
          <div className="col-4">
            <div className="card">
              <img src="img13.jpg" className="card-img-top" alt=""></img>
              <center>
                <div className="card-body">
                  <h5 className="card-title">Kualitas Biji Kopi</h5>
                  <p className="card-text" style={{ height: "180px", textAlign: "justify", textJustify: "inter-word" }}>Kami memanggang dalam jumlah kecil sehingga kami dapat mengontrol semua tahapan proses pemanggangan secara manual. Kami memanggang dengan tangan dan mempertahankan kontrol kualitas yang ketat untuk memastikan cangkir yang konsisten.</p>
                </div>
              </center>
            </div>
          </div>
        </div>
      </div>

      <br /><br /><hr /><br />

      <div className="container">
        <h2>
          Mengapa Beli Kopi Online?
        </h2>
        <p>
          Selamat datang di Kopi Sawah Wetan, tempat terbaik untuk membeli kopi secara online. Melalui situs web maupun aplikasi kami, Anda dapat berbelanja pilihan kopi segar panggang berkualitas tinggi, barang dagangan, perlengkapan pembuatan kopi, dan penggiling pilihan kami. Saat Anda membeli kopi online dari Kopi Sawah Wetan, Anda dapat berbelanja dari beragam pilihan biji kopi terbaik dari seluruh dunia. Kami membawa sejumlah asal dan campuran tunggal yang tidak dapat ditawarkan oleh toko kelontong biasa.
        </p>
        <br />
        <h2>
          Nikmati Kopi Sangrai Segar
        </h2>
        <p>
          Kami menjual kopi Robusta, Arabika, Excelsa, dll yang unik semuanya dipanggang dengan hati-hati hingga sempurna. Kopi  kami dipanggang segar dan dalam banyak kasus dikirim pada hari yang sama. Kopi kami terus mendapat sambutan hangat dari pakar industri, penggemar kopi seumur hidup, dan orang-orang yang sama sekali baru mengenal kopi.
        </p>
      </div>

      <br /><hr /><br />


      <br /><br />
      <div className="container" style={{ textAlign: "justify", textJustify: "inter-word" }}>
        <h2>
          Biji Kopi Terbaik di Dunia
        </h2>
        <h5>
          Kopi Sawah Wetan adalah Artisan Coffee Roaster yang bekerja hanya dengan biji kopi kualitas terbaik, dipilih sendiri, 100% Arabika, Specialty Grade dari seluruh dunia. Kami bekerja dengan importir untuk memilih dengan hati-hati kopi hijau yang unik dan menarik dari beberapa perkebunan dan koperasi terbaik di dunia. Memulai dengan biji kopi terbaik mengarah ke cangkir terbaik.
        </h5><br />
        <h5>
          Di Kopi Sawah Wetan, kami bangga dalam mendapatkan sumber kopi kami secara bertanggung jawab, memastikan setiap importir yang bekerja dengan kami memenuhi standar etika kami. Kami percaya kami ada untuk tujuan yang lebih besar, dan berusaha untuk mengadvokasi hak-hak produsen kopi yang terpinggirkan di negara dunia ketiga dengan membeli kopi Perdagangan yang Adil bersertifikat jika memungkinkan. Kami yakin kriteria ketat kami memungkinkan kami untuk mendapatkan, memanggang, dan memberikan biji kopi terbaik. Kami dengan bangga berdiri di belakang semua kopi kami dan tahu pelanggan kami akan merasakan perbedaannya.
        </h5><br />
        <h5>
          Kami sangat berhati-hati dalam mengamankan biji kopi terbaik di dunia, dan kami membutuhkan keunggulan dalam semua yang kami lakukan. Dari kepedulian dalam memilih sendiri buah kopi hingga pemrosesan kopi hijau, penyimpanan, pengiriman, dan pemanggangan, kami berusaha keras untuk menghasilkan kopi terbaik.
        </h5><br />
      </div>
      <Footer />
    </div >
  )
}
