import React from 'react';
import { Link } from 'react-router-dom';

export default function Navigation() {
  return (
    <div style={{ "display": 'flex', "justify-content":"space-around"}} className='bg-dark'>
      <img src="https://play-lh.googleusercontent.com/Z1gy3SDNLW4Nk3lz4yrvNoa4lA1if7NtlPgMJtntVLbONpu6GMM-Mv-5itive-nnzWM" alt="Logo" width="50" height="50" className="m-2" />
      <div className='text-info d-inline fs-4'><em>Foodie</em></div>
      <ul className="nav justify-content-end ms-auto">
        <li className="nav-item">
          <Link className="nav-link text-info" to="">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-info" to="/about">
            About Us
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-info" to="/login">
            Signin
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-info" to="/register">
            Signup
          </Link>
        </li>
      </ul>
    </div>
  );
}
