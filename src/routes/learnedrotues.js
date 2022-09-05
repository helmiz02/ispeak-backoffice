
 import Statistics from '../components/Dashbored/Statistic';
 import Session from '../components/Dashbored/Session';
 import DetailsSession from '../components/Dashbored/DetailsSession';
 import Learner from '../components/Dashbored/LearnerAdmin';
 import Instructor from '../components/Dashbored/Instructor';
 import CenterAdmin from '../components/Dashbored/CenterAdmin';
 import DetailsCenterInstructor from '../components/Dashbored/DetailsCenterInstructor';
 import Home from '../components/Dashbored/Home'; 
 import Course from '../components/Dashbored/Course';
 import CreateCourse from "../components/Dashbored/CourseCreate"
 import TestDetails from '../components/Dashbored/DetailsTest';
 import CenterInstructor from '../components/Dashbored/CenterInstructor';
 import Chat from '../components/Dashbored/Chat';

const routesLearner = [
  {
    path: '/',
    component: Home,
    exact: true
  },
  {
    path: '/home',
    component: Home,
    exact: true
  },
  {
    path: "/centerInstructor",
    component: CenterInstructor,
    exact: true,
  }, 
  { 
    path: "/detailsCenterInstructor/:id",
    component: DetailsCenterInstructor,
    exact: true,
  },
  {
    path: "/session",
    component: Session,
    exact: true,
  },
  {
    path: "/detailsSession/:id",
    component: DetailsSession,
    exact: true,
  },
  {
    path: "/instructor",
    component: Instructor,
    exact: true,
  },
  {
    path: "/instructor/:id",
    component: Instructor,
    exact: true,
  },
  {
    path: "/learner/:id",
    component: Learner,
    exact: true,
  },
  {
    path: "/centerAdmin",
    component: CenterAdmin,
    exact: true,
  }, 
  {
    path: "course",
    component: Course,
    exact: true,
  },
  {
    path: "createcourse",
    component: CreateCourse,
    exact: true,
  },
  {
    path: "testDetails/:id/:idCenter",
    component: TestDetails,
    exact: true,
  },
  {
    path: "chat/:id",
    component: Chat,
    exact: true,
  }
   
];

export default routesLearner ;