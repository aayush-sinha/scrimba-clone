import React from "react";

function Navbar(props) {
  return (
    <nav class="navbar navbar-expand-lg nav-custom">
      <a class="navbar-brand" href="#">
        <img class="logo" src="assets/dark-logo.svg" alt="" loading="lazy" />
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#collapsibleNavbar"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="collapsibleNavbar">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <a class="navbar-link" href="#">
              <img
                src="assets/search.svg"
                class="search"
                width="150"
                height="30"
                alt=""
                loading="lazy"
              />
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link">All courses</a>
          </li>
          <li class="nav-item">
            <a class="nav-link">Log in / Sign up</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
