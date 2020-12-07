import React from "react";
import {Link} from "react-router-dom";
import { FaSearch } from "react-icons/fa"

function Nav(props) {
  return (
    <nav className = "navbar navbar-expand-sm navbar-dark bg-dark">

    <Link className="navbar-brand" to="/">
        Inquel
    </Link>
<div >
    <span><FaSearch/></span>
    <input 
        type="search" 
        name="searchValue" 
        placeholder=" Search" 
        style={{width:"200px", height:"30px"}}
    />
</div>

      <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
        <ul class="navbar-nav ">

          <li class="nav-item active">
            <Link class="nav-link" to="/">
              Features
            </Link>
          </li>
          <li class="nav-item dropdown active">
            <Link
              class="nav-link dropdown-toggle"
              to="#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Study Guide
            </Link>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <Link class="dropdown-item" to="#">
                Class
              </Link>
              <Link class="dropdown-item" to="#">
                Open Source
              </Link>
              <Link class="dropdown-item" to="#">
                Degrees
              </Link>
              <Link class="dropdown-item" to="#">
                Subjects
              </Link>
              <Link class="dropdown-item" to="#">
                Medical Courses
              </Link>
              <Link class="dropdown-item" to="#">
                Competitive Exams
              </Link>
            </div>
          </li>
          <li class="nav-item active">
            <Link class="nav-link" to="/leaderboard">
              Leader Board
            </Link>
          </li>
          <li class="nav-item active">
            <Link class="nav-link" to="#">
              Buy a course
            </Link>
          </li>
        <li>
            <Link class="nav-link" to="/login" style={{color: "white"}}>
              Login
            </Link>
          </li>
          <li class="nav-item active">
            <Link class="nav-link" to="/register">
              Register
            </Link>
          </li>
          <li class="nav-item active">
            <Link class="nav-link " to="#">
              Help ?
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Nav