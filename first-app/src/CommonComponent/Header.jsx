import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
library.add(fas);

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1024);
  const [headerFixed, setHeaderFixed] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleResize = () => {
    setIsDesktop(window.innerWidth >= 1024);
    if (window.innerWidth >= 1024) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 500) {
        setHeaderFixed(true);
      } else {
        setHeaderFixed(false);
      }
    }

    window.addEventListener("scroll", handleScroll);

    // Cleanup function
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`${
        headerFixed ? "header-fixed" : "header"
      } transition-all duration-300`}
      style={{ backgroundColor: "#3b5d50" }}
    >
      <div className="container mx-auto">
        <div className="mx-auto flex items-center justify-between  py-6 ">
          <div className="inline-flex items-center space-x-2">
            <Link className="text-white text-3xl font-semibold text-xl" to="/">
              <span>Interior</span>
            </Link>
          </div>
          <div
            className={` items-start transition-all gap-10 duration-300 ${
              isDesktop ? "flex" : "hidden"
            }`}
          >
            <ul className=" inline-flex space-x-8 mr-3">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `inline-flex px-2 items-center font-medium ${
                      isActive ? "text-yellow-400" : "text-gray-400"
                    } hover:text-yellow-300 duration-200 text-sm`
                  }
                >
                  Home
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/shop"
                  className={({ isActive }) =>
                    `inline-flex px-2 items-center font-medium ${
                      isActive ? "text-yellow-400" : "text-gray-400"
                    } hover:text-yellow-300 duration-200 text-sm`
                  }
                >
                  Shop
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/aboutus"
                  className={({ isActive }) =>
                    `inline-flex px-2 items-center font-medium ${
                      isActive ? "text-yellow-400" : "text-gray-400"
                    } hover:text-yellow-300 duration-200 text-sm`
                  }
                >
                  About Us
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/services"
                  className={({ isActive }) =>
                    `inline-flex px-2 items-center font-medium ${
                      isActive ? "text-yellow-400" : "text-gray-400"
                    } hover:text-yellow-300 duration-200 text-sm`
                  }
                >
                  Services
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/blogs"
                  className={({ isActive }) =>
                    `inline-flex px-2 items-center font-medium ${
                      isActive ? "text-yellow-400" : "text-gray-400"
                    } hover:text-yellow-300 duration-200 text-sm`
                  }
                >
                  Blog
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    `inline-flex px-2 items-center font-medium ${
                      isActive ? "text-yellow-400" : "text-gray-400"
                    } hover:text-yellow-300 duration-200 text-sm`
                  }
                >
                  Contact Us
                </NavLink>
              </li>
            </ul>
            <div
              className={`space-x-2 transition-all duration-300 ${
                isDesktop ? "block" : "hidden"
              }`}
            >
              <ul className="flex gap-8 items-center">
                <li>
                  <NavLink
                    to="/profile"
                    className={({ isActive }) =>
                      `inline-flex items-center text-sm font-semibold ${
                        isActive ? "text-white" : "text-white"
                      } hover:text-yellow-300 duration-200`
                    }
                  >
                    <FontAwesomeIcon icon="fa-solid fa-user" />
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    to="/cart"
                    className={({ isActive }) =>
                      `inline-flex items-center text-sm font-semibold ${
                        isActive ? "text-white" : "text-white"
                      } hover:text-yellow-300 duration-200`
                    }
                  >
                    <FontAwesomeIcon icon="fa-solid fa-cart-shopping" />
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
          <div
            className={`lg:hidden transition-all duration-300 ${
              isDesktop ? "hidden" : "block"
            }`}
          >
            <Menu onClick={toggleMenu} className="h-6 w-6 cursor-pointer" />
          </div>
          <div
            className={`absolute inset-x-0 top-0 z-50 origin-top-right transform transition-transform duration-300 lg:hidden ${
              isMenuOpen ? "scale-y-100 " : "scale-y-0  pointer-events-none"
            }`}
          >
            <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
              <div className="px-5 pb-6 pt-5">
                <div className="flex items-center justify-between">
                  <div className="inline-flex items-center space-x-2">
                    <span className="font-bold text-cyan-600">React.Js</span>
                  </div>
                  <div className="-mr-2">
                    <button
                      type="button"
                      onClick={toggleMenu}
                      className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                    >
                      <span className="sr-only">Close menu</span>
                      <X className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
                </div>
                <div className="mt-6">
                  <nav className="grid gap-y-4">
                    <NavLink
                      to="/"
                      className={({ isActive }) =>
                        `inline-flex items-center text-sm font-semibold ${
                          isActive ? "text-white" : "text-gray-800"
                        } hover:text-yellow-300 duration-200`
                      }
                    >
                      Home
                    </NavLink>

                    <NavLink
                      to="/"
                      className={({ isActive }) =>
                        `inline-flex items-center text-sm font-semibold ${
                          isActive ? "text-white" : "text-gray-800"
                        } hover:text-yellow-300 duration-200`
                      }
                    >
                      Shop
                    </NavLink>

                    <NavLink
                      to="/"
                      className={({ isActive }) =>
                        `inline-flex items-center text-sm font-semibold ${
                          isActive ? "text-white" : "text-gray-800"
                        } hover:text-yellow-300 duration-200`
                      }
                    >
                      About Us
                    </NavLink>

                    <NavLink
                      to="/"
                      className={({ isActive }) =>
                        `inline-flex items-center text-sm font-semibold ${
                          isActive ? "text-white" : "text-gray-800"
                        } hover:text-yellow-300 duration-200`
                      }
                    >
                      Services
                    </NavLink>

                    <NavLink
                      to="/"
                      className={({ isActive }) =>
                        `inline-flex items-center text-sm font-semibold ${
                          isActive ? "text-white" : "text-gray-800"
                        } hover:text-yellow-300 duration-200`
                      }
                    >
                      Blogs
                    </NavLink>

                    <NavLink
                      to="/"
                      className={({ isActive }) =>
                        `inline-flex items-center text-sm font-semibold ${
                          isActive ? "text-white" : "text-gray-800"
                        } hover:text-yellow-300 duration-200`
                      }
                    >
                      Contact Us
                    </NavLink>
                  </nav>
                </div>
                <div className="mt-2 space-y-2">
                  <ul className="flex">
                    <li>
                      <NavLink
                        to="/"
                        className={({ isActive }) =>
                          `inline-flex items-center text-sm font-semibold ${
                            isActive ? "text-white" : "text-gray-800"
                          } hover:text-yellow-300 duration-200`
                        }
                      >
                        <img className="" src="images/user.svg" alt="" />
                      </NavLink>
                    </li>

                    <li>
                      <NavLink
                        to="/"
                        className={({ isActive }) =>
                          `inline-flex items-center text-sm font-semibold ${
                            isActive ? "text-white" : "text-gray-800"
                          } hover:text-yellow-300 duration-200`
                        }
                      >
                        <img className="" src="images/cart.svg" alt="" />
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
