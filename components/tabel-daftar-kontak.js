import useSWR from 'swr';
import Link from 'next/link';

const hapusKontak = async (idKontak, nama) => {
    let setuju = confirm(`Hapus kontak atas nama ${nama}?`);
    if (setuju) {
        const data = { id: idKontak };
        const respon = await fetch('/api/hapus-kontak', {
            method: 'POST',
            body: JSON.stringify(data),
        });
        let status = await respon.json();

        if (status != null) {
            location.reload();
        }
    }
};
const fetcher = (url) => fetch(url).then((res) => res.json());

const TabelDaftarKontak = () => {
    const { data, error } = useSWR('/api/daftar-kontak', fetcher);

    if (error) return <p>Ada masalah saat fetching data</p>;
    if (!data) return <p>Loading...</p>;
    if (data.length == 0) return <p>Belum ada data kontak</p>;

    return (
        <table>
            <thead>
                <tr align='center'>
                    <th>No.</th>
                    <th>Nama</th>
                    <th>No. Telepon</th>
                    <th>Edit</th>
                    <th>Link</th>
                </tr>
            </thead>
            <tbody>
                {data.map((kontak, index) => (
                    <tr key={kontak.id}>
                        <td align='center'>{index + 1}</td>
                        <td>{kontak.nama}</td>
                        <td>{kontak.telepon}</td>
                        <td align='center'>
                            <a
                                onClick={(event) => {
                                    event.preventDefault();
                                    hapusKontak(kontak.id, kontak.nama);
                                }}
                            >
                                Hapus
                            </a>
                        </td>
                        <td>
                            <Link href={`/detail-kontak/${kontak.id}`}>
                                <a>Detail</a>
                            </Link>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};
export default TabelDaftarKontak;