// import React from "react";
// import "./Navbar.css"
// import { Link } from "react-router-dom";
// import { useLogin } from "../Context/Loginn";

// function Navbr() {
//   const {isLogin, setIsLogin} = useLogin();

//   return (
//     <div>
//       <nav class="bg-white border-gray-200 dark:bg-gray-900 p-3 w-full hassan" >
//         <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">

//           <div class="hidden w-full md:block md:w-auto" id="navbar-default">
//             <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">

//             <li>
//                 <Link
//                   to="/"
//                   class="block py-2 px-3 text-2xl text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
//                 >
//                   Home
//                 </Link>
//               </li>

//               {isLogin? <li>
//                 <Link
//                   to="/"
//                   class="block py-2 px-3 text-2xl text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
//                   onClick={()=> { 
//                     setIsLogin(false)
//                   }}
//                 >
//                   Logout
//                 </Link>
//               </li> :
//               <>
//               <li>
//                 <Link
//                   to="/signup"
//                   class="block py-2 px-3 text-2xl text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
//                 >
//                   Signup
//                 </Link>
//               </li>
//               <li>
//                 <Link to={'/login'}
//                   href="#"
//                   class="block py-2 px-3 text-2xl text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
//                 >
//                   Login
//                   </Link>

//               </li>
//               </>
// }

//             </ul>
//           </div>
//         </div>
//       </nav>
//     </div>
//   );
// }
// export default Navbr;


// // import React from "react";
// // import "./Navbar.css";
// // import { Link } from "react-router-dom";
// // import { useLogin } from "../Context/Loginn";

// // function Navbr() {
// //   const [isLogin, setIsLogin] = useLogin();
// //   return (
// //     <nav class="bg-white border-gray-200 dark:bg-gray-900">
// //       <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
// //         <button
// //           data-collapse-toggle="navbar-default"
// //           type="button"
// //           class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
// //           aria-controls="navbar-default"
// //           aria-expanded="false"
// //         >
// //           <span class="sr-only">Open main menu</span>
// //           <svg
// //             class="w-5 h-5"
// //             aria-hidden="true"
// //             xmlns="http://www.w3.org/2000/svg"
// //             fill="none"
// //             viewBox="0 0 17 14"
// //           >
// //             <path
// //               stroke="currentColor"
// //               stroke-linecap="round"
// //               stroke-linejoin="round"
// //               stroke-width="2"
// //               d="M1 1h15M1 7h15M1 13h15"
// //             />
// //           </svg>
// //         </button>
// //         <div class="hidden w-full md:block md:w-auto" id="navbar-default">
// //           <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
// //             <li>
// //               <Link
// //                 to="/"
// //                 class="block py-2 text-4xl px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500"
// //                 aria-current="page"
// //               >
// //                 Home
// //               </Link>
// //             </li>

// //             {isLogin ? (
// //               <li>
// //                 <Link
// //                   to=""
// //                   class="block py-2 px-3 text-4xl text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
// //               onClick={()=>setIsLogin(false)}  >
// //                   logout
// //                 </Link>
// //               </li>
// //             ) : (
// //               <>
// //                 <li>
// //                   <Link
// //                     to="/signup"
// //                     class="block py-2 px-3 text-4xl text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
// //                   >
// //                     Signup
// //                   </Link>
// //                 </li>

// //                 <li>
// //                   <Link
// //                     to={"/login"}
// //                     class="block py-2 px-3 text-4xl text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
// //                   >
// //                     Login
// //                   </Link>
// //                 </li>
// //               </>
// //             )}
// //           </ul>
// //         </div>
// //       </div>
// //     </nav>
// //   );
// // }

// // export default Navbr;
























// // import React from "react";
// // import "./Navbar.css";
// // import { Link } from "react-router-dom";
// // import { useLogin } from "../Context/Loginn";

// // function Navbr() {
// //   const [isLogin, setIsLogin] = useLogin();

// //   return (
// //     <nav className="bg-white border-gray-200 dark:bg-gray-900">
// //       <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
// //         <button
// //           data-collapse-toggle="navbar-default"
// //           type="button"
// //           className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
// //           aria-controls="navbar-default"
// //           aria-expanded="false"
// //         >
// //           <span className="sr-only">Open main menu</span>
// //           <svg
// //             className="w-5 h-5"
// //             aria-hidden="true"
// //             xmlns="http://www.w3.org/2000/svg"
// //             fill="none"
// //             viewBox="0 0 17 14"
// //           >
// //             <path
// //               stroke="currentColor"
// //               strokeLinecap="round"
// //               strokeLinejoin="round"
// //               strokeWidth="2"
// //               d="M1 1h15M1 7h15M1 13h15"
// //             />
// //           </svg>
// //         </button>
// //         <div className="hidden w-full md:block md:w-auto" id="navbar-default">
// //           <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
// //             <li>
// //               <Link
// //                 to="/"
// //                 className="block py-2 text-4xl px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500"
// //                 aria-current="page"
// //               >
// //                 Home
// //               </Link>
// //             </li>

// //             {isLogin ? (
// //               <li>
// //                 <button
// //                   onClick={() => setIsLogin(false)}
// //                   className="block py-2 px-3 text-4xl text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
// //                 >
// //                   Logout
// //                 </button>
// //               </li>
// //             ) : (
// //               <>
// //                 <li>
// //                   <Link
// //                     to="/signup"
// //                     className="block py-2 px-3 text-4xl text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
// //                   >
// //                     Signup
// //                   </Link>
// //                 </li>

// //                 <li>
// //                   <Link
// //                     to={"/login"}
// //                     className="block py-2 px-3 text-4xl text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
// //                   >
// //                     Login
// //                   </Link>
// //                 </li>
// //               </>
// //             )}
// //           </ul>
// //         </div>
// //       </div>
// //     </nav>
// //   );
// // }

// // export default Navbr;
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useLogin } from "../Context/Loginn";
import "./Navbar.css";

function Navbr() {
  const { isLogin, setIsLogin } = useLogin();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900 p-3 w-full">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <button
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          onClick={toggleMenu}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div className={`w-full md:block md:w-auto ${isOpen ? 'block' : 'hidden'}`} id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <Link
                to="/"
                className="block py-2 px-3 text-2xl text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Home
              </Link>
            </li>
            {isLogin ? (
              <li>
                <button
                  onClick={() => setIsLogin(false)}
                  className="block py-2 px-3 text-2xl text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Logout
                </button>
              </li>
            ) : (
              <>
                <li>
                  <Link
                    to="/signup"
                    className="block py-2 px-3 text-2xl text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  >
                    Signup
                  </Link>
                </li>
                <li>
                  <Link
                    to="/login"
                    className="block py-2 px-3 text-2xl text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  >
                    Login
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbr;

