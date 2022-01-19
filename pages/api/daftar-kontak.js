import prisma from '../../client.ts';
const handler = async (req, res) => {
    const kontak = await prisma.kontak.findMany();
    res.json(kontak);
};

export default handler;