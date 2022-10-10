import React from 'react';
import { useState } from "react";
import { Link, NavLink } from 'react-router-dom';



export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="bg-sky-500 sticky top-0">
      <div className="px-4  py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div className="relative flex items-center justify-between">
          <div className="flex items-center">
            <Link
              to="/"
              aria-label="Company"
              title="Company"
              className="inline-flex items-center mr-8"
            >
              <svg
                className="w-8 text-sky-900"
                viewBox="0 0 24 24"
                strokeLinejoin="round"
                strokeWidth="2"
                strokeLinecap="round"
                strokeMiterlimit="10"
                stroke="currentColor"
                fill="none"
              >
                <rect x="3" y="1" width="7" height="12" />
                <rect x="3" y="17" width="7" height="6" />
                <rect x="14" y="1" width="7" height="6" />
                <rect x="14" y="11" width="7" height="12" />
              </svg>
              <span className="ml-2 text-xl font-bold tracking-wide text-gray-100 uppercase">
                ABC School
              </span>
            </Link>
            <ul className="flex items-center hidden space-x-8 lg:flex">
              <li>
                <NavLink
                  to="/home"
                  aria-label="Our Book"
                  title="Our Book"
                  className={({ isActive }) => isActive
                    ? "font-medium tracking-wide text-teal-600 transition-colors duration-200 hover:text-teal-400"
                    : "font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-400"
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/academics"
                  aria-label="Our Book"
                  title="Our Book"
                  className={({ isActive }) => isActive
                    ? "font-medium tracking-wide text-teal-600 transition-colors duration-200 hover:text-teal-400"
                    : "font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-400"
                  }
                >
                  Academics
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/routine"
                  aria-label="Book pricing"
                  title="Book pricing"
                  className={({ isActive }) => isActive
                    ? "font-medium tracking-wide text-teal-600 transition-colors duration-200 hover:text-teal-400"
                    : "font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-400"
                  }
                >
                  ClassRoutine
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  aria-label="About us"
                  title="About us"
                  className={({ isActive }) => isActive
                    ? "font-medium tracking-wide text-teal-600 transition-colors duration-200 hover:text-teal-400"
                    : "font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-400"
                  }
                >
                  About us
                </NavLink>
              </li>
            </ul>
          </div>
          <ul className="flex items-center hidden space-x-8 lg:flex">
            <li>
              <NavLink
                to="/signIn"
                aria-label="Sign in"
                title="Sign in"
                className={({ isActive }) => isActive
                  ? "font-medium tracking-wide text-teal-600 transition-colors duration-200 hover:text-teal-400"
                  : "font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-400"
                }
              >
                Sign in
              </NavLink>
            </li>
            <li>
              <Link
                to="/signUp"
                className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-sky-700 hover:bg-sky-700 focus:shadow-outline focus:outline-none"
                aria-label="Sign up"
                title="Sign up"
              >
                Sign up
              </Link>
            </li>
          </ul>
          <div className="lg:hidden">
            <button
              aria-label="Open Menu"
              title="Open Menu"
              className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline"
              onClick={() => setIsMenuOpen(true)}
            >
              <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                />
                <path
                  fill="currentColor"
                  d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                />
                <path
                  fill="currentColor"
                  d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                />
              </svg>
            </button>
            {isMenuOpen && (
              <div className="absolute top-0 left-0 w-full sm:z-40">
                <div className="p-5 bg-white border rounded shadow-sm">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <Link
                        to="/"
                        aria-label="Company"
                        title="Company"
                        className="inline-flex items-center"
                      >
                        <svg
                          className="w-8 text-purpleclassName=-400"
                          viewBox="0 0 24 24"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeMiterlimit="10"
                          stroke="currentColor"
                          fill="none"
                        >
                          <rect x="3" y="1" width="7" height="12" />
                          <rect x="3" y="17" width="7" height="6" />
                          <rect x="14" y="1" width="7" height="6" />
                          <rect x="14" y="11" width="7" height="12" />
                        </svg>
                        <span className="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
                          Favorite Books
                        </span>
                      </Link>
                    </div>
                    <div>
                      <button
                        aria-label="Close Menu"
                        title="Close Menu"
                        className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                          <path
                            fill="currentColor"
                            d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <nav>
                    <ul className="space-y-4">
                      <li>
                        <NavLink
                          to="/"
                          aria-label="Our Books"
                          title="Our Books"
                          className={({ isActive }) => isActive
                            ? "font-medium tracking-wide text-teal-600 transition-colors duration-200 hover:text-teal-400"
                            : "font-medium tracking-wide text-black transition-colors duration-200 hover:text-teal-400"
                          }
                        >
                          Home
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/academics"
                          aria-label="Our Books"
                          title="Our Books"
                          className={({ isActive }) => isActive
                            ? "font-medium tracking-wide text-teal-600 transition-colors duration-200 hover:text-teal-400"
                            : "font-medium tracking-wide text-black transition-colors duration-200 hover:text-teal-400"
                          }
                        >
                          Academics
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/routine"
                          aria-label="Book pricing"
                          title="Book pricing"
                          className={({ isActive }) => isActive
                            ? "font-medium tracking-wide text-teal-600 transition-colors duration-200 hover:text-teal-400"
                            : "font-medium tracking-wide text-black transition-colors duration-200 hover:text-teal-400"
                          }
                        >
                          ClassRoutine
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/about"
                          aria-label="About us"
                          title="About us"
                          className={({ isActive }) => isActive
                            ? "font-medium tracking-wide text-teal-600 transition-colors duration-200 hover:text-teal-400"
                            : "font-medium tracking-wide text-black transition-colors duration-200 hover:text-teal-400"
                          }
                        >
                          About us
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/signIn"
                          aria-label="Sign in"
                          title="Sign in"
                          className={({ isActive }) => isActive
                            ? "font-medium tracking-wide text-teal-600 transition-colors duration-200 hover:text-teal-400"
                            : "font-medium tracking-wide text-black transition-colors duration-200 hover:text-teal-400"
                          }
                        >
                          Sign in
                        </NavLink>
                      </li>
                      <li>
                        <Link
                          to="/signIn"
                          className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-pink-400 hover:bg-pink-500 focus:shadow-outline focus:outline-none"
                          aria-label="Sign up"
                          title="Sign up"
                        >
                          Sign up
                        </Link>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};