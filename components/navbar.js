import Link from 'next/link';

const NavBar = () => (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
            <a className="navbar-brand" href="#">
                <img src="logo.png" alt="" width="30" height="24" className="d-inline-block align-text-top"></img>
                Kopi Sawah Wetan
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <center>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link href='/'>
                                <a className="nav-link" >Beranda</a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href='/varian'>
                                <a className="nav-link" >Kategori</a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href='/Tentangkami'>
                                <a className="nav-link" >Tentang Kami</a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href='/suhukopi'>
                                <a className="nav-link" >Suhu Kopi</a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href='/masuk'>
                                <a className="nav-link" >Masuk</a>
                            </Link>
                        </li>
                    </ul>
                </div>
            </center>
        </div>
    </nav>
);

export default NavBar;