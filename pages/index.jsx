import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Layout from '../components/Layout'
import { getPostsData } from '../lib/posts'

const STRING = "I am "
const MAX_LENGTH = 20
let modStr = ''

//pre-rebdering by SSG
export async function getStaticProps() {
  const allPostsData = getPostsData();
  console.log(allPostsData);//expected 

  return {
    props: {
      allPostsData,
    },
  };
}



export default function Home({ allPostsData }) {
  return (
    <>
      <Layout />
      <section>
        <p className='ml-8 py-3'>
          東京のエンジニアによる技術ブログ。時々雑談。<br/>
          左右対称フェチで、カルト映画が好きです。github zenn
        </p>
      </section>
      <div className='container flex justify-between'>
        <h1 className='ml-8 text-4xl py-5'>
          Articles() 
        </h1>
        <ul className='flex mt-7 mr-9'>
          Sort by ...
          <li className='px-5'>Latest</li>
          <li>Previous</li>
        </ul>
      </div>
      <div>
        <articles className='flex flex-col ml-8 my-5 mx-8'>
          {allPostsData.map(({ id, title, date, thumbnail }) => (
            <article key={id} className='mb-5'>
            <Link href={`/posts/${id}`}>
              <h1 className='text-2xl'>{title}</h1>
              <br />
              <p>
                
              </p>
              <small>{date}</small>
            </Link>
          </article>
          ))}
        </articles>
      </div>
    </>
  )
}
