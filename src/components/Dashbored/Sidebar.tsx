import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Sidebar() {
  return (
    <nav  id="sidebarMenu"  className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
        <div className="position-sticky pt-3">
          <ul className="nav flex-column">
            <li className="nav-item">
              <NavLink className="nav-link active" aria-current="page" to="/statistic">
                Statistic
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/center">
                Centers
              </NavLink>
            </li>
            
            <li className="nav-item">
              <NavLink className="nav-link" to="/admin">
                Adminis
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/instructor">
                
                Instructors
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/session">
                Session
              </NavLink>
            </li>
            
            <li className="nav-item">
              <NavLink className="nav-link" to="/challenge">
                Challenge
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/course">
                Course
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/level">
                Level
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/exercice">
                Exercice
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/learner">
                Learner 
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/message">
                Message
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
  )
}
