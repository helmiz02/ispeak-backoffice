
 import Statistics from '../components/Dashbored/Statistic';
 import Session from '../components/Dashbored/Session';
 import DetailsSession from '../components/Dashbored/DetailsSession';
 import Learner from '../components/Dashbored/LearnerAdmin';
 import Instructor from '../components/Dashbored/Instructor';
 import CenterAdmin from '../components/Dashbored/CenterAdmin';
 import DetailsCenterAdmin from '../components/Dashbored/DetailsCenterAdmin';
 import Home from '../components/Dashbored/Home'; 
 import Course from '../components/Dashbored/Course';
 import CreateCourse from "../components/Dashbored/CourseCreate"
 import UpdateInstructon from "../components/Dashbored/UpdateInstructor"
 import TestDetails from '../components/Dashbored/DetailsTest';
 import SessionCreate from '../components/Dashbored/sessionCreate'; 
 import TestCreate from '../components/Dashbored/TestCreate';
 import TestUpdate from '../components/Dashbored/UpdateTest';  
 import LearnerSession from '../components/Dashbored/LearnerSession';  
 import Chat from '../components/Dashbored/Chat'; 
 import CourseDetails from '../components/Dashbored/CourseDetails';  
 import UpdateSession from '../components/Dashbored/UpdateSession';  
 import AdminProfile from '../components/Dashbored/AdminProfile';

const routesAdmin = [
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
    path: "/session",
    component: Session,
    exact: true,
  },
  {
    path: "/detailsSession/:id/:idCenter",
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
    path: "/detailsCenterAdmin/:id",
    component: DetailsCenterAdmin,
    exact: true,
  },
  {
    path: "/UpdateInstructor/:id/:idCenter",
    component: UpdateInstructon,
    exact: true,
  },
  {
    path: "course",
    component: Course,
    exact: true,
  },
  {
    path: "createcourse/:idSession/:idCenter",
    component: CreateCourse,
    exact: true,
  },
  {
    path: "sessionCreate/:idCenter", 
    component: SessionCreate,
    exact: true,
  },
  {
    path: "testDetails/:id/:idCenter",
    component: TestDetails,
    exact: true,
  },
  {
    path: "testCreate/:idCenter",
    component: TestCreate,
    exact: true,
  },
  {
    path: "testUpdate/:id/:idCenter",
    component: TestUpdate,
    exact: true,
  },
  {
    path: "learnerSession/:id",
    component: LearnerSession,
    exact: true,
  },
  {
    path: "chat/:id",
    component: Chat,
    exact: true,
  },
  {
    path: "courseDetails/:id/:idCenter",
    component: CourseDetails,
    exact: true,
  },
  {
    path: "sessionUpdate/:id/:idCenter", 
    component: UpdateSession,
    exact: true,
  },
  {
    path: "AdminProfile",
    component: AdminProfile,
    exact: true,
  },

   
];

export default routesAdmin ;