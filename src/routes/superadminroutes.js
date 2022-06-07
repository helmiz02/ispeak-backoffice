import Statistics from "../components/Dashbored/Statistic";
import Admin from "../components/Dashbored/Admin";
import Center from "../components/Dashbored/Center";
import Challenge from "../components/Dashbored/Challenge";
import Course from "../components/Dashbored/Course";
import Session from "../components/Dashbored/Session";
import Messages from "../components/Dashbored/Messages";
import Level from "../components/Dashbored/Level";
import Learner from "../components/Dashbored/Learner";
import Instructor from "../components/Dashbored/Instructor";
import Exercice from "../components/Dashbored/Exercice";


const routesSuperAdmin = [
  {
    path: "/",
    component: Statistics,
    exact: true,
  },
  {
    path: "/center",
    component: Center,
    exact: true,
  },
  {
    path: "/admin",
    component: Admin,
    exact: true,
  },
  {
    path: "/instructor",
    component: Instructor,
    exact: true,
  },
  {
    path: "/session",
    component: Session,
    exact: true,
  },
  {
    path: "/challenge",
    component: Challenge,
    exact: true,
  },
  {
    path: "/course",
    component: Course,
    exact: true,
  },
  {
    path: "/level",
    component: Level,
    exact: true,
  },
  {
    path: "/exercice",
    component: Exercice,
    exact: true,
  },
  {
    path: "/learner",
    component: Learner,
    exact: true,
  },
  {
    path: "/messages",
    component: Messages,
    exact: true,
  },
  {
    path: "*",
    component: Statistics,
    exact: true,
  },
];

export default routesSuperAdmin;
