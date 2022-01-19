import prisma from '../../client.ts';

const handler = async (req, res) => {
    if (req.method !== 'POST')
        return res
            .status(405)
            .json({ message: 'Request method tidak diizinkan' });

    console.log(`Req body : ${req.body}`);
    const kontak = JSON.parse(req.body);

    let sosmed = [];

    if (kontak.facebook)
        sosmed.push({ namaSosmed: 'Facebook', username: kontak.facebook });
    if (kontak.instagram)
        sosmed.push({ namaSosmed: 'Instagram', username: kontak.instagram });
    if (kontak.twitter)
        sosmed.push({ namaSosmed: 'Twitter', username: kontak.twitter });
    if (kontak.tiktok)
        sosmed.push({ namaSosmed: 'TikTok', username: kontak.tiktok });
    const tambah = await prisma.kontak.create({
        data: {
            nama: kontak.namaKontak,
            telepon: kontak.telepon,
            profil: {
                create: {
                    alamat: kontak.alamat || null,
                    ulangTahun: kontak.tanggalLahir
                        ? new Date(kontak.tanggalLahir)
                        : null,
                    gender: kontak.gender,
                    sudahMenikah: kontak.menikah == 'sudah',
                },
            },
            sosialMedia: {
                create: sosmed,
            },
        },
    });
    res.json(tambah);
};
export default handler;
