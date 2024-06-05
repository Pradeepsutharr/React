import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
library.add(fas);

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1024);
  const [headerFixed, setHeaderFixed] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // const handleResize = () => {
  //   setIsDesktop(window.innerWidth >= 1024);
  //   if (window.innerWidth >= 1024) {
  //     setIsMenuOpen(false);
  //   }
  // };

  // useEffect(() => {
  //   window.addEventListener("resize", handleResize);
  //   return () => {
  //     window.removeEventListener("resize", handleResize);
  //   };
  // }, []);

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
      } transition-all duration-300 relative flex items-center py-6`}
      style={{ backgroundColor: "#3b5d50" }}
    >
      <div className="container flex-wrap-[inherit] mx-auto flex justify-between items-center">
        <Link className="text-white text-3xl font-semibold" to="/">
          <span>Interior</span>
        </Link>
        <button className="nav-btn lg:hidden block" onClick={toggleMenu}>
          <i className="inline-block fa-solid fa-bars"></i>
        </button>
        <nav
          className={`md:flex basis-full grow md:basis-auto gap-5  overflow-hidden md:overflow-visible h-[unset] duration-200 ${
            isMenuOpen ? "" : "h-0"
          }`}
        >
          <ul className="flex md:flex-row flex-col md:items-center justify-center ms-auto gap-5 mr-10">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `inline-flex mx-2 items-center font-medium ${
                    isActive ? "text-yellow-400 active" : "text-gray-400"
                  } hover:text-yellow-300 duration-200 md:text-sm relative`
                }
              >
                Home
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/shop"
                className={({ isActive }) =>
                  `inline-flex mx-2 items-center font-medium ${
                    isActive ? "text-yellow-400 active" : "text-gray-400"
                  } hover:text-yellow-300 duration-200 text-sm relative`
                }
              >
                Shop
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `inline-flex mx-2 items-center font-medium ${
                    isActive ? "text-yellow-400 active" : "text-gray-400"
                  } hover:text-yellow-300 duration-200 md:text-sm relative`
                }
              >
                About Us
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/services"
                className={({ isActive }) =>
                  `inline-flex mx-2 items-center font-medium ${
                    isActive ? "text-yellow-400 active" : "text-gray-400"
                  } hover:text-yellow-300 duration-200 md:text-sm relative`
                }
              >
                Services
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/blogs"
                className={({ isActive }) =>
                  `inline-flex mx-2 items-center font-medium ${
                    isActive ? "text-yellow-400 active" : "text-gray-400"
                  } hover:text-yellow-300 duration-200 md:text-sm relative`
                }
              >
                Blog
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `inline-flex mx-2 items-center font-medium ${
                    isActive ? "text-yellow-400 active " : "text-gray-400"
                  } hover:text-yellow-300 duration-200 md:text-sm relative`
                }
              >
                Contact Us
              </NavLink>
            </li>
          </ul>

          <ul className="flex gap-8 items-center">
            <li>
              <NavLink
                to="/profile"
                className={({ isActive }) =>
                  `inline-flex items-center text-sm font-semibold ${
                    isActive ? "text-white" : "text-white"
                  } hover:text-yellow-300 duration-200 mx-2`
                }
              >
                <FontAwesomeIcon icon="fa-solid fa-user" size="xl" />
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/cart"
                className={({ isActive }) =>
                  `inline-flex items-center text-sm font-semibold ${
                    isActive ? "text-white" : "text-white"
                  } hover:text-yellow-300 duration-200 mx-2`
                }
              >
                <FontAwesomeIcon icon="fa-solid fa-cart-shopping" size="xl" />
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;

// import { Link, NavLink } from "react-router-dom";
// import React, { useState } from "react";

// function Header() {
//   let [menuOpen, setMenuOpen] = useState(false);
//   return (
//     <header className="py-5 bg-[#3b5d50]">
//       <div className="container mx-auto">
//         <div className="flex items-center">
//           <div className="logo">
//             <NavLink>
//               <span className="text-2xl font-bold">Interior</span>
//             </NavLink>
//           </div>

//           <div
//             className="md:hidden ms-auto"
//             onClick={() => setMenuOpen(!menuOpen)}
//           >
//             <i className="fa-solid fa-bars"></i>
//           </div>

//           <nav
//             className={`md:flex md:static absolute ${
//               menuOpen ? "top-2" : "top-[-200px]"
//             } md:items-center justify-center md:ms-auto`}
//           >
//             <ul className="md:flex">
//               <li>
//                 <NavLink className=" p-2 mx-3">Home</NavLink>
//               </li>

//               <li>
//                 <NavLink className=" p-2 mx-3">Shop</NavLink>
//               </li>

//               <li>
//                 <NavLink className=" p-2 mx-3">About Us</NavLink>
//               </li>

//               <li>
//                 <NavLink className=" p-2 mx-3">Services</NavLink>
//               </li>

//               <li>
//                 <NavLink className=" p-2 mx-3">Blog</NavLink>
//               </li>

//               <li>
//                 <NavLink className=" p-2 mx-3">Contact Us </NavLink>
//               </li>
//             </ul>

//             <div className="btns ms-5">
//               <ul className=" flex items-center">
//                 <li>
//                   <NavLink className="mx-3">
//                     <i class="fa-regular fa-user"></i>
//                   </NavLink>
//                 </li>

//                 <li>
//                   <NavLink className="mx-3">
//                     <i class="fa-solid fa-cart-shopping"></i>
//                   </NavLink>
//                 </li>
//               </ul>
//             </div>
//           </nav>
//         </div>
//       </div>
//     </header>
//   );
// }

// export default Header;
