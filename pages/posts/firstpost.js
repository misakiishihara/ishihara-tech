import Head from "next/head";
import Link from "next/link"
Head

export default function Firstpost () {
    return (
        <div>
            <Head>
                <title>最初の投稿</title>
            </Head>
            <h1>最初の投稿</h1>
            <Link href="/">
                ホームへ戻る 
            </Link>           
        </div>
    );
}