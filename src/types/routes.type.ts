

// items: [
//     {
//     title: "Tutors",
//     url: "/dashboard/tutors",
//     },
//     {
//     title: "Students",
//     url: "/dashboard/students",
//     },
//     {
//     title: "Log Out",
//     url: "/logout",
//     }
// ],

export interface Route {
    title: string;
    items: {
        title: string;
        url: string;
    }[];
}