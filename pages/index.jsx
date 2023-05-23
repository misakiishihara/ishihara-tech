import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/Layout'
import { client } from '../lib/client'
import ReactPaginate from "react-paginate"
import { useState } from 'react'


export const getStaticProps = async () => {
  const post = await client.get({ endpoint: "post" });

  return {
    props: {
      post: post.contents,
    },
  }
}


export default function Home({ post }) {
  
  const [offset, setOffset] = useState(0);
  const perPage = 5;
  const handleChangePage = (data) => {
    setOffset(data.selected * perPage)
  
    window.scrollTo({
      top:0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <Layout />
        <div className='ml-8 py-1'>
          <p>
            東京のエンジニアによる技術ブログ。時々雑談。<br/>
            左右対称フェチで、カルト映画が好きです。<br />
          </p>
        </div>
       <h1 className='text-5xl ml-5 py-5'>Articles</h1>
       <div className='grid grid-cols-2 w-auto ml-7'>
       <ul className=' py-5'>
        {post.slice(offset, offset + perPage).map((post) => (
          <li className='flex py-4' key={post.id}>
            <Link href={`/post/${post.id}`}>
              <h1 className='text-4xl'>{post.title}</h1>
              <p className='opacity-50'>{post.date}</p>
              <section>Tag:   [{post.tag}]</section>
            </Link>
          </li>
        ))}
        <div className=''>
        <ReactPaginate
          previousLabel={"<"}
          nextLabel={">"}
          pageCount={Math.ceil(post.length / perPage)}
          onPageChange={handleChangePage}
      />
      </div> 
       </ul>
      </div>
    </>  
  )
}

