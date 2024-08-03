import Main from "./layout/Main";
import Landing from "./page/landing";
import Projects from "./page/projects";
import Consultation from "./page/consultation";

export default [
    {
        path: "/",
        element: <Main />,
        children: [
            {
                name: "Robert Wan",
                path: "/",
                element: <Landing />
            },
            {
                name: "Projects",
                path: "/projects",
                element: <Projects />
            },
            {
                name: "Consultation",
                path: "/consultation",
                element: <Consultation />
            }
        ]
    }
];
