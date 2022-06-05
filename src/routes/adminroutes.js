
 import Dash from '../components/Dash';
 import Statistics from '../components/Dashbored/Statistic';
 import Admin from '../components/Dashbored/Admin';
 import Center from '../components/Dashbored/Center';
 import Challenge from '../components/Dashbored/Challenge';
 import Course from '../components/Dashbored/Course';
 import Session from '../components/Dashbored/Session';
 import Messages from '../components/Dashbored/Messages';
 import Level from '../components/Dashbored/Level';
 import Learner from '../components/Dashbored/Learner';
 import Instructor from '../components/Dashbored/Instructor';
 import Exercice from '../components/Dashbored/Exercice';
 import Register from '../components/Register';
 import Home from '../components/Home';

const routesAdmin = [
  {
    path: '/',
    component: Statistics,
    exact: true
  },

   
];

export default routesAdmin ;