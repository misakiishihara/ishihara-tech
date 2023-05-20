//Django API-URL
const SERVERURL = "http://127.0.0.1:8000/";

// 投稿データを抽出
export async function getAllPostsData() {
    const res = await fetch(new URL(`${SERVERURL}api/post/`));
    const posts = await res.json();
    return posts;
}

//投稿のID一覧を抽出
export async function getAllPostsIds() {
    const res = await fetch(new URL(`${SERVERURL}api/post/`));
    const posts = await res.json();
    return posts.map((post) => {
        return {
            params: {
                id: String(post.id),
            },
        }
    })
}

//投稿詳細を抽出
export async function getPostsData(id) {
    const res = await fetch(new URL(`${SERVERURL}api/post/`));
    const post = await res.json();
    return post;
}