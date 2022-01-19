export default function Footer() {
    return (
        <div>
            <hr></hr>
            <div className="container">
                <div className="py-3">
                    <div className="row">
                        <div className="col-lg-3 col-6 p-3">
                            <h5> <b>Main</b> </h5>
                            <ul className="list-unstyled">
                                <li> <a href="#">Home</a> </li>
                                <li> <a href="#">Features</a> </li>
                                <li> <a href="#">Pricing</a> </li>
                            </ul>
                        </div>
                        <div className="col-lg-3 col-6 p-3">
                            <h5> <b>Others</b> </h5>
                            <ul className="list-unstyled">
                                <li> <a href="#">FAQ</a> </li>
                                <li> <a href="#">Resources</a> </li>
                                <li> <a href="#">Career</a> </li>
                            </ul>
                        </div>
                        <div className="col-lg-3 col-md-6 p-3">
                            <h5> <b>Dibuat Oleh</b> </h5>
                            <p className="mb-0">Titis Dewi Diyasari</p>
                            <p className="mb-0">Dewi Ayu Anggraini</p>
                            <p className="mb-0">Leyli Twety Eventari</p>
                        </div>
                        <div className="col-lg-3 col-md-6 p-3">
                            <h5> <b>Follow us</b> </h5>
                            <p className="mb-0">Instagram</p>
                            <p className="mb-0">Facebook</p>
                            <p className="mb-0">WhatsApp</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}