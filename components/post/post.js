import Link from "next/link";

export default function Post({ post }) {
    return (
        <Link href={`/posts/${post.id}`}>
            <p>{post.title}</p>    
        </Link>
    )
}