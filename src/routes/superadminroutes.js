import Statistics from "../components/Dashbored/Statistic";
import Admin from "../components/Dashbored/Admin";
import Center from "../components/Dashbored/Center";
import Course from "../components/Dashbored/Course";
import Session from "../components/Dashbored/Session";
import Messages from "../components/Dashbored/Messages";
import Learner from "../components/Dashbored/Learner";
import Instructor from "../components/Dashbored/Instructor";
import Exercice from "../components/Dashbored/Exercice"; 
import DetailsCenter from "../components/Dashbored/DetailsCenter";
import CreateCenter from "../components/Dashbored/CreateCenter";
import UpdateCenter from "../components/Dashbored/UpdateCenter";
import Home from "../components/Dashbored/Home";
import UpdateAdmin from "../components/Dashbored/UpdateAdmin";
import LearnerSuperAdmin from "../components/Dashbored/LearnerSuperAdmin";
import InstructorSuperAdmin from "../components/Dashbored/InstructorSuperAdmin";

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
    path: "/detailsCenter/:id",
    component: DetailsCenter,
    exact: true,
  },
  {
    path: "/createCenter",
    component: CreateCenter,
    exact: true,
  },
  {
    path: "/updateCenter/:id",
    component: UpdateCenter,
    exact: true,
  },
  {
    path: "/updateAdmin/:id",
    component: UpdateAdmin,
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
    path: "/course",
    component: Course,
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
    path: "/learnerSuperAdmin",
    component: LearnerSuperAdmin,
    exact: true,
  },
  {
    path: "/instructorSuperAdmin",
    component: InstructorSuperAdmin,
    exact: true,
  },
  {
    path: "*",
    component: Home,
    exact: true,
  },
];

export default routesSuperAdmin;
