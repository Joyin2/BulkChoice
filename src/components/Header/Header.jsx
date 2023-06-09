// import React, { useRef, useEffect } from "react";
// import "./Header.css";
// import { NavLink, useNavigate } from "react-router-dom";
// import { Container, Row } from "reactstrap";
// import logo from "../../assets/images/eco-logo.png";
// import userIcon from "../../assets/images/user-icon.png";
// import { motion } from "framer-motion";
// import { Link } from "react-router-dom";
// import Router from "../../routers/Router";
// import { useSelector } from "react-redux";
// import useAuth from "../../custom-hooks/useAuth";

// const nav__link = [
//   {
//     path: "home",
//     display: "Home",
//   },
//   {
//     path: "shop",
//     display: "Shop",
//   },
//   {
//     path: "cart",
//     display: "Cart",
//   },
// ];

// const Header = () => {
//   const headerRef = useRef(null);
//   const totalQuantity = useSelector((state) => state.cart.totalQuantity);
//   const profileActionRef = useRef(null);

//   const navigate = useNavigate();
//   const { currentUser } = useAuth();

//   const menuRef = useRef(null);

//   const stickyHeaderFunc = () => {
//     window.addEventListener("scroll", () => {
//       if (
//         document.body.scrollTop > 80 ||
//         document.documentElement.scrollTop > 80
//       ) {
//         headerRef.current.classList.add("sticky__header");
//       } else {
//         headerRef.current.classList.remove("sticky__header");
//       }
//     });
//   };

//   useEffect(() => {
//     stickyHeaderFunc();

//     return () => window.removeEventListener("scroll", stickyHeaderFunc);
//   });

//   const menuToggle = () => menuRef.current.classList.toggle("active__menu");
//   const navigateToCart = () => {
//     navigate("/Cart");
//   };

//   const toggleProfileActions = () => profileActionRef.current.classList.toggle("show__profileActions");

//   return (
//     <header className="header" ref={headerRef}>
//       <Container>
//         <Row>
//           <div className="nav__wrapper">
//             <div className="logo">
//               <img src={logo} alt="" />

//               <h1>Bulk Choice</h1>
//             </div>
//             <div className="navigation" ref={menuRef} onClick={menuToggle}>
//               <ul className="menu">
//                 {nav__link.map((item, index) => (
//                   <li className="nav__item" key={index}>
//                     <NavLink
//                       to={item.path}
//                       className={(navClass) =>
//                         navClass.isActive ? "nav__active" : ""
//                       }
//                     >
//                       {item.display}
//                     </NavLink>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//             <div className="nav__icons">
//               <span className="fav__icon">
//                 <i class="ri-heart-line"></i>
//                 <span className="badges">1</span>
//               </span>
//               <span className="cart__icon" onClick={navigateToCart}>
//                 <i class="ri-shopping-bag-line"></i>
//                 <span className="badges">{totalQuantity}</span>
//               </span>
//               <div className="profile">
//                 <Link>
//                 <motion.img
//                   whileTap={{ scale: 1.1 }}
//                   src={currentUser ? currentUser.photoURL : userIcon}
//                   alt=""
//                   onClick={toggleProfileActions}
//                 />
//                 </Link>

//                 <div
//                   className="profile__actions"
//                   ref={profileActionRef}
//                   onClick={toggleProfileActions}
//                 >
//                   {currentUser ? (
//                     <span>Logout</span>
//                   ) : (
//                     <div>
//                       <Link to="/signup">Signup</Link>
//                       <Link to="/login">Login</Link>
//                     </div>
//                   )}
//                 </div>
//               </div>
//               <div className="mobile__menu">
//                 <span onClick={menuToggle}>
//                   <i class="ri-menu-line"></i>
//                 </span>
//               </div>
//             </div>
//           </div>
//         </Row>
//       </Container>
//     </header>
//   );
// };

// export default Header;

import React, { useRef, useEffect, useState } from "react";
import "./Header.css";
import { NavLink, useNavigate } from "react-router-dom";
import { Container, Row } from "reactstrap";
import logo from "../../assets/images/eco-logo.png";
import userIcon from "../../assets/images/user-icon.png";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Router from "../../routers/Router";
import { useSelector } from "react-redux";
import useAuth from "../../custom-hooks/useAuth";
import { signOut } from "firebase/auth";
import { auth } from "../../../firebase.config";
import { toast } from "react-toastify";

const nav__link = [
  {
    path: "home",
    display: "Home",
  },
  {
    path: "shop",
    display: "Shop",
  },
  {
    path: "cart",
    display: "Cart",
  },
];

const Header = () => {
  const headerRef = useRef(null);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);

  const navigate = useNavigate();
  const { currentUser } = useAuth();

  const menuRef = useRef(null);
  const profileRef = useRef(null);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const stickyHeaderFunc = () => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headerRef.current.classList.add("sticky__header");
      } else {
        headerRef.current.classList.remove("sticky__header");
      }
    });
  };

  const logout = () => {
    signOut(auth)
      .then(() => {
        toast.success("Logged out");
        navigate("/home")
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };

  useEffect(() => {
    stickyHeaderFunc();

    return () => window.removeEventListener("scroll", stickyHeaderFunc);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setIsProfileOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  const menuToggle = () => menuRef.current.classList.toggle("active__menu");
  const navigateToCart = () => {
    navigate("/Cart");
  };

  const toggleProfileActions = () => {
    setIsProfileOpen((prevIsProfileOpen) => !prevIsProfileOpen);
  };

  return (
    <header className="header" ref={headerRef}>
      <Container>
        <Row>
          <div className="nav__wrapper">
            <div className="logo">
              <img src={logo} alt="" />
              <h1>Bulk Choice</h1>
            </div>
            <div className="navigation" ref={menuRef} onClick={menuToggle}>
              <ul className="menu">
                {nav__link.map((item, index) => (
                  <li className="nav__item" key={index}>
                    <NavLink
                      to={item.path}
                      className={(navClass) =>
                        navClass.isActive ? "nav__active" : ""
                      }
                    >
                      {item.display}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
            <div className="nav__icons">
              <span className="fav__icon">
                <i className="ri-heart-line"></i>
                <span className="badges">1</span>
              </span>
              <span className="cart__icon" onClick={navigateToCart}>
                <i className="ri-shopping-bag-line"></i>
                <span className="badges">{totalQuantity}</span>
              </span>
              <div
                className={`profile ${isProfileOpen ? "active__profile" : ""}`}
                ref={profileRef}
              >
                <Link>
                  <motion.img
                    whileTap={{ scale: 1.1 }}
                    src={currentUser ? currentUser.photoURL : userIcon}
                    alt=""
                    onClick={toggleProfileActions}
                  />
                </Link>
                {isProfileOpen && ( // Add this condition to render the profile actions
                  <div className="profile__actions">
                    {currentUser ? (
                      <span onClick={logout}>Logout</span>
                    ) : (
                      <div className="d-flex align-items-center justify-content-center flex-column">
                        <Link to="/signup">Signup</Link>
                        <Link to="/login">Login</Link>
                        <Link to="/dashboard">Dashboard</Link>
                      </div>
                    )}
                  </div>
                )}
              </div>
              <div className="mobile__menu">
                <span onClick={menuToggle}>
                  <i className="ri-menu-line"></i>
                </span>
              </div>
            </div>
          </div>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
