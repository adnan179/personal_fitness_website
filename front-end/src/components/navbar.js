import '../index.css'
import { Link } from "react-router-dom";
import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";
import { useState } from "react";

const Navbar = () =>{
  const [isNavOpen, setIsNavOpen] = useState(false)
  const { logout } = useLogout();
  const {user } =  useAuthContext()

  const handleClick = () =>{
    setIsNavOpen(!isNavOpen)
    logout()
    
  }

  return(
    <header>
      <section className='' >
        {/* Header */}
        <div className="flex items-center justify-between w-full h-[100px] 
          px-[70px] phone:px-10 py-8 shadow-lg fixed z-[100] bg-gray-950">
          <div className=" font-pacifico phone:text-sm text-2xl text-white">
            <Link to='/'>
              YOUR GYM BRO
            </Link>
          </div>
          <nav className="">
            {/* hamburger menu */}
            <section className="MOBILE-MENU flex lg:hidden">
              <div className="material-symbols-outlined space-y-2 cursor-pointer 
               phone:text-3xl text-4xl text-[#32CD32]"
              onClick={() => setIsNavOpen((prev) => !prev)} >
                Menu
              </div>
              <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
                <div className="material-symbols-outlined absolute top-0 right-0 px-8 py-8 text-[#32CD32] text-4xl cursor-pointer"
                  onClick={() => setIsNavOpen(false)} // change isNavOpen state to false to close the menu
                  >
                  {/* cross mark in the sidebar */}
                  Close
                </div>
                {/* for mobile view */}
                {/* log out & email after log in or sign up */}
                  {user && (
                    <ul className="MENU-LINK-MOBILE-OPEN flex flex-col items-center justify-between">
                      <li className=" my-8 uppercase">
                        <h2 className="text-white font-medium font-geologica">
                          {user.email}
                        </h2>
                      </li>
                      <li className=" my-8 uppercase">
                        <Link to='/'>
                          <button onClick={handleClick}  
                            className="relative inline-flex items-center justify-start inline-block px-5 py-3 overflow-hidden font-medium transition-all bg-[#32CD32] rounded-full hover:bg-white group">
                            <span className="absolute inset-0 border-0 group-hover:border-[25px] ease-linear duration-100 transition-all border-white rounded-full"></span>
                            <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-[#32CD32]">
                              Log out
                            </span>
                          </button>
                        </Link>
                      </li>
                    </ul>
                  )}
                  {/* before login & signup */}
                  {!user && (
                    <ul className="MENU-LINK-MOBILE-OPEN flex flex-col items-center justify-between">
                      <li className=" my-8 uppercase"
                        onClick={() => setIsNavOpen((prev) => !prev)}>
                        <Link to='/signup'>
                          <p className="text-white font-pacifico text-xl cursor-pointer font-bold relative w-max one">
                            <span>Sign Up</span>
                            <span class="absolute -bottom-1 rounded-lg left-0 w-0 transition-all h-[1px] bg-[#32CD32]"></span>
                          </p>
                      </Link>
                      </li>
                      <li className=" my-8 uppercase"
                        onClick={() => setIsNavOpen((prev) => !prev)}>
                        <Link to='/login'>
                          <p className="text-white text-xl font-pacifico cursor-pointer font-bold relative w-max one">
                            <span>Login</span>
                            <span class="absolute -bottom-1 rounded-lg left-0 w-0 transition-all h-[1px] bg-[#32CD32]"></span>
                          </p>
                      </Link>
                      </li>
                    </ul>
                  )}
              </div>
            </section>
            {/* Desktop view */}
            {user && (
              <ul className="DESKTOP-MENU hidden space-x-8 lg:flex items-center">
                <li>
                  <h2 className="text-[#32CD32] font-medium">
                    {user.email}
                  </h2>
                </li>
                <li>
                  <Link to='/'>
                    <button onClick={handleClick}  
                    className="relative inline-flex items-center justify-start inline-block px-5 py-3 overflow-hidden font-medium transition-all bg-[#32CD32] rounded-full hover:bg-white group">
                      <span className="absolute inset-0 border-0 group-hover:border-[25px] ease-linear duration-100 transition-all border-white rounded-full"></span>
                      <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-[#32CD32]">
                        Log out
                      </span>
                    </button>
                  </Link>
                </li>
              </ul>
              )}
              {/* before login & signup */}
              {!user && (
                  <ul className="DESKTOP-MENU hidden space-x-8 lg:flex items-center">
                    <li>
                      <Link to='/signup'>
                        <p className="text-white font-pacifico text-xl cursor-pointer font-medium relative w-max one">
                          <span>Sign Up</span>
                          <span class="absolute -bottom-1 rounded-lg left-0 w-0 transition-all h-[2px] bg-[#32CD32]"></span>
                        </p>
                      </Link>
                    </li>
                    <li>
                      <Link to='/login'>
                        <p className="text-white text-xl font-pacifico cursor-pointer font-medium relative w-max one">
                          <span>Login</span>
                          <span class="absolute -bottom-1 rounded-lg left-0 w-0 transition-all h-[2px] bg-[#32CD32]"></span>
                        </p>
                      </Link>
                    </li>
                  </ul>
                )}
            </nav>
          {/* styles for the sidebar */}
          <style>{`
            .hideMenuNav {
              display: none;
            }
            .showMenuNav {
              display: block;
              position: absolute;
              width: 100%;
              height: 100vh;
              top: 0;
              right: 0;
              background-color: rgb(3 7 18);;
              z-index: 500;
              display: flex;
              flex-direction: column;
              justify-content: space-evenly;
              
            }
          `}</style>
        </div>
      </section>
    </header>
  )
}
export default Navbar;