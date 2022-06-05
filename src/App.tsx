import './App.css';
import {Routes, Route} from 'react-router-dom';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import Login from './components/Login';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import routesSuperAdmin from './routes/superadminroutes' 
import routesAdmin from './routes/adminroutes' 
import learneroutes from './routes/learnedrotues' 

const App = () => {
  let token = localStorage.getItem("token") ; 
  let role = localStorage.getItem("role") ; 

   return (
    <div className='App'>
      <Navbar/>
      <Routes>
        {!token?
         <Route path="*" element={<Login />} />
        :role ==="superAdmin"?
        routesSuperAdmin.map((route:any, index:any) => {
          return (
              <Route
                  key={index}
                  path={route.path}
                element={
                   <route.component />
                 }
              />
          );
      })
      :role ==="admin"? 
      routesAdmin.map((route:any, index:any) => {
        return (
            <Route
                key={index}
                path={route.path}
              element={
                 <route.component />
               }
            />
        );
    })
    :learneroutes.map((route:any, index:any) => {
      return (
          <Route
              key={index}
              path={route.path}
            element={
               <route.component />
             }
          />
      );
  })
      }
        
      </Routes> 
      <Footer/>
    </div>
  );
}

export default App;
