import { Route } from "@/types";

export const adminRoutes: Route[] = [
    {
        title: "User Management",
        items: [
            {
            title: "Tutors",
            url: "/dashboard/tutors",
            },
            {
            title: "Students",
            url: "/dashboard/students",
            },
            {
            title: "Log Out",
            url: "/logout",
            }
        ],
    },
]