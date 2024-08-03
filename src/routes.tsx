import Main from "./layout/Main";
import Landing from "./page/landing";

export default [
    {
        path: "/",
        element: <Main />,
        children: [
            {
                name: "Home",
                path: "/",
                element: <Landing />
                // loader: postsLoader,
                // children: [
                // { path: "/create-post", element: <NewPost />, action: newPostAction },
                // { path: "/:id", element: <PostDetails />, loader: postDetailsLoader },
                //   { path: "/", element: <Landing /> },
                // ],
            }
        ]
    }
];
