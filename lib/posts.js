import path from "path"
import fs from "fs"
import matter from "matter"

const postsDirectoty = path.join(process.cwd(), "posts")

// mdファイルのデータを抽出
export function getPostsData() {
    const fileNames = fs.readdirSync(postsDirectoty);
    const allPostsData = fileNames.map((fileName) => {
        const id = fileName.replace(/\.md$/, ""); //ファイル名(id)

        //mdファイルを文字列として抽出
        const fullPath = path.join(postsDirectoty, fileName);
        const fileContents = fs.readFileSync(fullPath, "utf8");

        const matterResult = matter(fileContents);

        //idとデータを返す
        return {
            id,
            ...matterResult,
        };
    });
}