import Layout from "../../components/Layout";
import { getAllPostsIds, getPostData, } from "../../lib/posts";

export async function getStaticPaths() {
    const paths = getAllPostsIds();

    return {
        paths,
        fallback: false,
    };
}

export async function getStaticProps({ params }) {
    const postData = await getPostData(params.id);

    return {
        props: {
            postData,
        },
    };
}

export default function Post( postData ) {
    return (
        <Layout>
            {postData.title}
            {postData.date}
            {postData.blogContentHTML}
        </Layout>
    );
};