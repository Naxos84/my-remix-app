import {ActionFunction, json, LoaderFunction} from "remix";

export const loader: LoaderFunction = () => {

    return json([
        {
            slug: "my-first-post",
            title: "My First Post"
          },
          {
            slug: "90s-mixtape",
            title: "A Mixtape I Made Just For You"
          }
    ], 200);
}

export const action: ActionFunction = ({request}) => {
    
    return json({METHOD: request.method}, 200);
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