import Link from "next/link";

export default function Post({ post }) {
    return (
        <Link href={`/posts/${post.id}`}>
            <img alt="post" className="" src={post.image} />
            <p>{post.title}</p>
            
        </Link>
    )
}