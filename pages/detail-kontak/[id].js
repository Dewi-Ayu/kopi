import Link from 'next/link';
import DetailKontak from '../../components/detail-kontak';
export async function getServerSideProps(context) {
    return { props: { id: context.params.id } };
}
const Detail = (props) => {
    return (
        <>
            <DetailKontak id={props.id} />
            <Link href='/'>
                <a>Kembali</a>
            </Link>
        </>
    );
};
export default Detail;