import './App.css';
import {Routes, Route} from 'react-router-dom';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import Login from './components/Login';
import Register from './components/Register';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import Dash from './components/Dash';
import Statistics from './components/Dashbored/Statistic';
import Admin from './components/Dashbored/Admin';
import Center from './components/Dashbored/Center';
import Challenge from './components/Dashbored/Challenge';
import Course from './components/Dashbored/Course';
import Session from './components/Dashbored/Session';
import Messages from './components/Dashbored/Messages';
import Level from './components/Dashbored/Level';
import Learner from './components/Dashbored/Learner';
import Instructor from './components/Dashbored/Instructor';
import Exercice from './components/Dashbored/Exercice';

const App = () => {

  return (
    <div className='App'>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dash />} />

        <Route path="/statistics" element={<Statistics />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/center" element={<Center />} />
        <Route path="/challenge" element={<Challenge />} />
        <Route path="/course" element={<Course />} />
        <Route path="/exercice" element={<Exercice />} />
        <Route path="/instructor" element={<Instructor />} />
        <Route path="/learner" element={<Learner />} />
        
        <Route path="/level" element={<Level />} />
        <Route path="/message" element={<Messages />} />
        <Route path="/session" element={<Session />} />
        <Route path="/statistic" element={<Statistics />} />

        <Route path="/about" element={<About />} /> 
        <Route path="/service" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes> 
      <Footer/>
    </div>
  );
}

export default App;
