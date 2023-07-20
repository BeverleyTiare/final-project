
import React from 'react';
import { Link } from 'react-router-dom';
import Auth from '../../utils/auth';

//logout function
const Header = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };

  return (
    <nav style={{color: 'white', position: "sticky", background: "#29072d"}} id="header" className="w-full z-30 top-0 py-1 nav-right">
        <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 px-6 py-3">
          <label htmlFor="menu-toggle" className="cursor-pointer md:hidden block">
            <svg className="fill-current text-gray-900" xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 20 20">
              <title>menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </label>
          <input className="hidden" type="checkbox" id="menu-toggle" />
          <div className="hidden md:flex md:items-center md:w-auto w-full order-3 md:order-1" id="menu">
            <nav>
              <ul style={{color: '#c7c7c7'}} className="md:flex items-center justify-between text-base pt-4 md:pt-0"> 
              <li><Link className="inline-block no-underline  hover:underline py-2 px-4" to="/">Home</Link></li>
              <li><Link className="inline-block no-underline  hover:underline py-2 px-4" to="/epigenetics">Epigenetics</Link></li>
              <li><Link className="inline-block no-underline  hover:underline py-2 px-4" to="/preventativehealthcare">Preventative Healthcare</Link></li>
               
              <li><Link className="inline-block no-underline  hover:underline py-2 px-4" to="/sleep">Sleep</Link></li> 
              { Auth.loggedIn() ? <li><Link className="inline-block no-underline  hover:underline py-2 px-4" to="/yourplan">Your Plan</Link></li> : null }
              </ul>
            </nav>
          </div>
          <div className="order-2 md:order-3 flex items-center" id="nav-content">
          {Auth.loggedIn() ? (
            <>
              <Link className="btn btn-lg btn-info m-2" to="/yourplan">
                {Auth.getProfile().data.username}'s profile
              </Link>
              <button className="bg-transparent text-white font-semibold hover:text-gray-300 py-2 px-4 border border-white rounded ml-4" onClick={logout}>
                Logout
              </button>
            </>
          ) : (
            <>
              <Link className="bg-transparent text-white font-semibold hover:text-gray-300 py-2 px-4 border border-white rounded"  to="/login">
                Login
              </Link>
              <Link className="bg-transparent text-white font-semibold hover:text-gray-300 py-2 px-4 border border-white rounded ml-4" to="/signup">
                Signup
              </Link>
            </>
          )}
          </div>
        </div>
      </nav>
  );
};

export default Header;

//authMiddleware is imported from the utils folder and will verify the token and either grant or deny access to the route.



