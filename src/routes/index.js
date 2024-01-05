/* Route declarations for the app */
import * as reviews from "../views";

const routData = [
  {
    id: "route-001",
    path: "/",
    component: reviews.LandingPage,
    requiresAuth: false,
    children: [
      { id: "route-0011", path: "home", component: reviews.LandingPage },
      { id: "route-0012", path: "about", component: reviews.LandingPage },
      { id: "route-0013", path: "resources", component: reviews.LandingPage },
      { id: "route-0014", path: "contact", component: reviews.LandingPage },
    ],
  },
  {
    id: "route-022",
    path: "/admin-dashboard",
    component: reviews.Dashboard,
    requiresAuth: false,
  },
  {
    id: "route-002",
    path: "/dashboard",
    component: reviews.Dashboard,
    children: [
      {
        id: "route-0021",
        path: "exams",
        component: reviews.Dashboard,
      },
      {
        id: "route-0022",
        path: "register",
        component: reviews.Dashboard,
      },
      {
        id: "route-0023",
        path: "reports",
        component: reviews.Dashboard,
      },
      {
        id: "route-0024",
        path: "payment",
        component: reviews.Dashboard,
      },
      {
        id: "route-0025",
        path: "settings",
        component: reviews.Dashboard,
      },
      {
        id: "route-0026",
        path: "profile/:userId",
        component: reviews.Dashboard,
      },
    ],
    requiresAuth: true,
  },
  {
    id: "route-003",
    path: "/register",
    component: reviews.Register,
    requiresAuth: false,
  },
  {
    id: "route-004",
    path: "/login",
    component: reviews.Login,
    requiresAuth: false,
  },
  {
    id: "route-005",
    path: "/forgot-password",
    component: reviews.ForgotPassword,
    requiresAuth: false,
  },
  {
    id: "route-006",
    path: "/take-exam",
    component: reviews.Exam,
    requiresAuth: false,
  },
  {
    id: "route-007",
    path: "*",
    component: reviews.PageNotFound,
    requiresAuth: false,
  },
];

export default routData;
