import Layout from "../components/Layout";

export default function Aboutme () {
    return (
        <Layout>
           <div className="container flex justify-center">
            <div className="flex-colmun justify-center ">
                    <h1 className="text-4xl">This is Misaki IShihara</h1>
                    <br />
                    <ul className="flex-row justify-center">
                        <li>出身地:神奈川県</li>
                        <li>生年月日:1997/6/19(25歳)</li>
                        <li>趣味:サッカー、登山、読書</li>
                        <li>長所:知識欲の強さ、集中力の高さ</li>
                        <li>自分が興味のあることに対して、まずは自分で調べたり、</li>
                        <li>チャレンジしてみることを大事にしています。</li>
                        <li>短所:理路整然とした話し方が苦手（改善中）</li>
                        <li>結論を最初にはっきりと述べる。</li>
                        <li>そもそも喋るスピードが遅い！</li>
                    </ul>
                </div>
            </div> 
            
        </Layout>
    );
};