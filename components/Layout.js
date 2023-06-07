import Head from "next/head";
import Link from "next/link";
import Header from "./Header";


const name = "Ishihara Tech"

function Layout({ children }) {
    return (
        <div>
            <Head>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            <main className="container flex mx-auto h-full">
                {children}
            </main>
        </div>
    );
}

export default Layout;