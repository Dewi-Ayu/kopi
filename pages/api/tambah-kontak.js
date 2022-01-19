import prisma from '../../client.ts';
const handler = async (req, res) => {
    if (req.method !== 'POST')
        return res
            .status(405)
            .json({ message: 'Request method tidak diizinkan' });
    const kontak = JSON.parse(req.body);
    const tambah = await prisma.kontak.create({
        data: {
            nama: kontak.nama,
            telepon: kontak.telepon,
        },
    });
    res.json(tambah);
};
export default handler;