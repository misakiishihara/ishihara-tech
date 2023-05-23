import Layout from "../components/Layout";
import Link from "next/link";

export default function Aboutblog () {
    return (
        <Layout>
            <div className="container ">
            <h1 className="text-4xl">
                About me  ?
            </h1>
            <div className= "py-5">
                <h1 className="text-4xl mb-3">「死ぬまで勉強」</h1>
                <p>
                    新しいことを学ぶことが好きです。<br/>
                    興味のある事柄に対しては何事もまず自分で調べ、行動し、手に取ってみます。
                </p>
            <p className="flex justify-center mt-10">
                <Link href="/">Back to Home</Link>
            </p>
            </div>
            </div>
        </Layout>
    );
};