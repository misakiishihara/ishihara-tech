import { client } from "../../lib/client";
import Link from "next/link";

export default function postId({ post }) {
  return (
    <main className="mx-6 my-8 ">
      <h1 className="text-3xl flex justify-center my-8">{post.title}</h1>
      <div
       dangerouslySetInnerHTML={{
        __html: `${post.content}`
       }}
      />
      <div className="my-10 flex justify-center opacity-50 hover:opacity-100 hover:underline">
        <Link href="/">Back to Home</Link>
      </div>
    </main>
  );
}

export const getStaticPaths = async () => {
  const data = await client.get({ endpoint: "post" });

  const paths = data.contents.map((content) => `/post/${content.id}`);
  return { paths, fallback: false };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const data = await client.get({ endpoint: "post", contentId: id });

  return {
    props: {
      post: data,
    },
  };
};