import Layout from "../components/Layout";
import Link from "next/link";

export default function Aboutblog () {
    return (
        <Layout>
            <div className="container ">
            <h1 className="text-4xl">
                About me  
            </h1>
            <div className= "py-5">
                <h1 className="text-4xl mb-3">Misaki Ishihara</h1>
                <p className="mb-5 text-red-600">
        
        　　　　　　　This is discrimination box.
                   Please write here .
                </p>
        　　　　　　｛/* ダブルクォーテーション外れててVercelで
                   デプロイ中にエラー起きてます。
                   */｝
                <div className="border-y-2 mb-4"></div>
                <h1 className="text-4xl mb-4">
                    What can I do
                </h1>
                <div className="container bg-gray-600">
                    <div className="grid grid-cols-3 gap-3">
                        <div>
                            <h1>Frontend</h1>
                            <p>HTML5 CSS3 JavaScript TypeScript
                                React NEXT.js AWS-CloudFront
                            </p>
                        </div>
                        <div>
                            <h1>Backend</h1>
                            <p>PHP Go Python<br/>Laravel Django</p>
                        </div>
                        <div>
                            <h1>Database</h1>
                            <p>MySQL MongoDB AWS-RDS</p>
                        </div>
                        <div>
                            <h1>Others</h1>
                            <p>Github Docker Kubernetes Firebase Vercel</p>
                        </div>
                        <div>
                            <h1>OS</h1>
                            <p>Windows(main) Linux Mac</p>
                        </div>
                        <div>
                            <h1></h1>
                        </div>
                        <div>
                            <h1></h1>
                        </div>
                    </div>
                </div>
            <p className="flex justify-center mt-10">
                <Link href="/">Back to Home</Link>
            </p>
            </div>
            </div>
        </Layout>
    );
};
