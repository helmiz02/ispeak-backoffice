import React from 'react'
import { NavLink } from 'react-router-dom'
import routesSuperAdmin from '../../routes/superadminroutes' 
import routesAdmin from '../../routes/adminroutes' 
import learneroutes from '../../routes/learnedrotues' 
export default function Sidebar() {
  let role = localStorage.getItem("role")
  return (
    <nav  id="sidebarMenu"  className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
        <div className="position-sticky pt-3">
          <ul className="nav flex-column">
            {role ==="superAdmin" ? <>
            <li className="nav-item">
              <NavLink className="nav-link active" aria-current="page" to="/home">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/center">
                Centers
              </NavLink>
            </li>
            
            <li className="nav-item">
              <NavLink className="nav-link" to="/admin">
                Admins
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/instructorSuperAdmin">
                Instructors
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/learnerSuperAdmin">
                Learners
              </NavLink>
            </li>

          
            </>
            :role ==="admin" ?<>
            <li className="nav-item">
            <NavLink className="nav-link active" aria-current="page" to="/home">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/centerAdmin">
                Center
              </NavLink>
            </li>
            <li className="nav-item">
            <NavLink className="nav-link active" to="/AdminProfile">
                Profile
              </NavLink>
            </li>
            </>
          :<>
           <li className="nav-item">
            <NavLink className="nav-link active" aria-current="page" to="/home">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/centerInstructor">
                Center
              </NavLink>
            </li>
            <li className="nav-item">
            <NavLink className="nav-link active" to="/InstructorProfile">
                Profile
              </NavLink>
            </li>
          </>}
          </ul>
        </div>
      </nav>
  )
}
