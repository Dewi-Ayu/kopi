import useSWR from 'swr';

const fetcher = (url) => fetch(url).then((res) => res.json());

const DetailKontak = ({ id }) => {
    const { data, error } = useSWR(`/api/detail/${id}`, fetcher);

    if (error)
        return <p>Ada masalah saat fetching data kontak dengan ID {id}</p>;
    if (!data) return <p>Loading...</p>;
    if (data.length == 0) return <p>Tidak ditemukan kontak dengan ID {id}</p>;

    const tanggalUltah = new Date(data.profil.ulangTahun);
    return (
        <>
           <table>
                <tr>
                    <td>Nama</td>
                    <td>:</td>
                    <td>{data.nama}</td>
                </tr>
                <tr>
                    <td>No. telepon</td>
                    <td>:</td>
                    <td>{data.telepon}</td>
                </tr>
                <tr>
                    <td>Alamat</td>
                    <td>:</td>
                    <td>{data.profil.alamat}</td>
                </tr>
                <tr>
                    <td>Tanggal ulang tahun</td>
                    <td>:</td>
                    <td>{tanggalUltah.toLocaleDateString()}</td>
                </tr>
                <tr>
                    <td>Jenis kelamin</td>
                    <td>:</td>
                    <td>{data.profil.gender == 'L' ? 'Pria' : 'Wanita'}</td>
                </tr>
                <tr>
                    <td>Status pernikahan</td>
                    <td>:</td>
                    <td> {data.profil.sudahMenikah
                        ? 'Sudah menikah'
                        : 'Belum menikah'}
                    </td>
                </tr>
                <tr>
                    <td>Sosial media</td>
                    <td>:</td>
                    <td>
                        <ul>
                            {data.sosialMedia.map((sosmed) => (
                                // eslint-disable-next-line react/jsx-key
                                <li>
                                    {sosmed.namaSosmed} : {sosmed.username}
                                </li>
                            ))}
                        </ul>
                    </td>
                </tr>
            </table>
        </>
    );
};
export default DetailKontak;