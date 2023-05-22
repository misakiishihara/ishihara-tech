import { client } from "../../lib/client";

export default function postId({ post }) {
  return (
    <main>
      <h1>{post.title}</h1>
      <div>
        {post.content}
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