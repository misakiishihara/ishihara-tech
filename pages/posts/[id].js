import { useRouter } from "next/router";
import { getAllPostsIds, getPostsData } from "../../lib/posts";

export default function PostData({ post }) {
    const router = useRouter();

    if(router.isFallback || !post) {
        return <div>Loading ...</div>
    }

    return (
        <>
            <h1>{post.title}</h1>
            <p>{post.created_at}</p>
            <p>{post.content}</p>
        </>
    );
}

export async function getStaticPaths() {
    const paths = await getAllPostsIds();
    return {
        paths,
        fallback: false,
    };
}

export async function getStaticProps({ params }) {
    const post = await getPostsData(params.id);
    return {
        props: {
            post,
        },
            revalidate: 3,
    };
}