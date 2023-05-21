import Layout from "../components/Layout";

export default function Aboutblog () {
    return (
        <Layout>
            <h1 className="text-4xl">
                How to make this blog ?
            </h1>
            <p>
                このブログは以下の技術を用いて開発いたしました。
                フロントエンド:
                    NextJS
                バックエンド:
                    Django(djangorestframework)
                DB:
                    PostgreSQL
                コンテナサービス:
                    Docker
                CodePipeline, CodeDeployによるCI/CDの自動化
                S3による静的ホスティング、CloudFrontで配信コンテンツの最適化
                Route53の名前解決
                RDS
            </p>
        </Layout>
    );
};