import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/Layout'
import Post from '../components/post'
import { getAllPostsData } from '../lib/getPosts'

const STRING = "I am "
const MAX_LENGTH = 20
let modStr = ''



export default function Home({ posts }) {
  return (
    <>
      <Layout />
      <section>
        <p className='ml-8 py-3'>
          東京のエンジニアによる技術ブログ。時々雑談。<br/>
          左右対称フェチで、カルト映画が好きです。<br />
          <Link href="/aboutblog">
            <p className='py-5 opacity-50 underline hover:opacity-100'>
              About this blog
            </p>
          </Link>
        </p>
      </section>
      Articles
      {posts && posts.map((post) => <Post key={post.id} post={post} />)}
    </>
  )
}

export async function getStaticProps() {
  const posts = await getAllPostsData();
  return {
    props: { posts },
    revalidate: 3,
  };
}
