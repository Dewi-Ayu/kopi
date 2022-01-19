import prisma from '../../../client.ts';
const handler = async (req, res) => {
    const { id } = req.query;
    const kontak = await prisma.kontak.findUnique({
        where: { id: Number(id) },
        include: { profil: true, sosialMedia: true },
    });
    res.json(kontak);
};
export default handler;