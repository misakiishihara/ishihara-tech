import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/Layout'
import { client } from '../lib/client'

const STRING = "I am "
const MAX_LENGTH = 20
let modStr = ''


export const getStaticProps = async () => {
  const post = await client.get({ endpoint: "post" });

  return {
    props: {
      post: post.contents,
    },
  }
}


export default function Home({ post }) {
  return (
    <>
      <Layout />
        <div className='ml-8 py-3'>
          東京のエンジニアによる技術ブログ。時々雑談。<br/>
          左右対称フェチで、カルト映画が好きです。<br />
          <Link href="/aboutblog">
            <p className='py-5 opacity-50 underline hover:opacity-100'>
              About this blog
            </p>
          </Link>
        </div>
      <div className='container w-auto ml-7'>
       <h1 className='text-5xl'>Articles</h1>
       <ul className='my-7 '>
        {post.map((post) => (
          <li className='flex' key={post.id}>
            <Link href={`/post/${post.id}`}>
              <h1 className='text-4xl'>{post.title}</h1>
              <p className='opacity-50'>{post.date}</p>
              <section>Tag:   [{post.tag}]</section>
            </Link>
          </li>
        ))}
       </ul>
      </div>
    </>  
  )
}
