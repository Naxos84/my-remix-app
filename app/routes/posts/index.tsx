import {useLoaderData} from "remix";

export const loader = () => {

    const res = new Response(JSON.stringify([
        {
            slug: "my-first-post",
            title: "My First Post"
          },
          {
            slug: "90s-mixtape",
            title: "A Mixtape I Made Just For You"
          }
    ]), {
    status: 200,
    headers: {
        "Content-Type": "application/json"
    }
    });
    
    return res
}

// export default function Posts() {
//     const posts = useLoaderData();
//     console.log(posts);
//     // return (
//     //   <div>
//     //     <h1>Posts</h1>
//     //   </div>
//     // );

//     return posts;
//   }