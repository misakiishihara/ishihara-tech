import path from "path"
import fs from "fs"
import matter from "gray-matter"
import { remark } from "remark"
import html from "remark-html"

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
            ...matterResult.data,
        };
    });
    return allPostsData;
}

//getStaticPathでオブジェクトを抽出
export function getAllPostsIds() {
    const fileNames = fs.readdirSync(postsDirectoty);
    return fileNames.map((fileName) => {
        return {
            params: {
                id: fileName.replace(/\.md$/, ""),
            },
        };
    });
}

//idに基づいてデータを返す
export async function getPostData(id) {
    const fullPath = path.join(postsDirectoty, `${id}.md`);
    const fileContent = fs.readFileSync(fullPath, "utf8")

    const matterResult = matter(fileContent);

    const blogContent = await remark()
    .use(html)
    .process(matterResult.content);

    const blogContentHTML = blogContent.toString();

    return {
        id,
        blogContentHTML,
        ...matterResult.data,
    };
};