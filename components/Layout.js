import Head from "next/head";
import Link from "next/link";


const name = "Ishihara Tech"

function Layout({ children }) {
    return (
        <div>
            <Head>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <header className="container flex mx-5 my-3 justify-between">
                <h1 className="text-5xl py-5 px-5">
                    <Link href="/">{name}</Link>
                </h1>
                <Link href="/aboutme">
                    <img className="object-cover h-30 w-24 py-3 mr-6" src="/images/ishihara.jpg" />
                </Link>
            </header>
            <main className="container flex mx-auto h-full">
                {children}
            </main>
        </div>
    );
}

export default Layout;