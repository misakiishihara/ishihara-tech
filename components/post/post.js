import Link from "next/link";



export default function Post({ post }) {
    const hideContent = post.content.length > 60 ? post.content.substring(0, 60) + '      ...' : post.content;

  return (
    <Link href={`/posts/${post.id}`}>
      <div className="p-4 cursor-pointer">
        <div className=
        "flex justify-between py-4" >
            <h1 className="text-4xl">{ post.title }</h1>
            <p className="mt-6">{ post.created_at }</p>
        </div>
        {hideContent}
      </div>
    </Link>
  );
}