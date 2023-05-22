// import Link from "next/link";



// export default function Post({ post }) {
//     const hideContent = post.content.length > 40 ? post.content.substring(0, 40) + '      ...' : post.content;

//   return (
//     <Link href={`/posts/${post.id}`}>
//       <div className="p-4 cursor-pointer">
//         <div className=
//         "flex py-4" >
//             <h1 className="text-4xl hover:opacity-40">{ post.title }</h1>
//             <p className="mt-5 ml-5 opacity-50">{ post.created_at }</p>
//         </div>
//         <div className="ml-5">
//         {hideContent}
//         </div>   
//       </div>
//     </Link>
//   );
// }