import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
// import { Auth } from "../../Firebase/Firebas";
import toast from "react-hot-toast";
import { Auth } from "../Firebase/Firebase";
import { useLogin } from "./Context/Loginn";


function Login() {
  const {isLogin, setIsLogin} = useLogin();
  console.log(isLogin)

  const navigateHome = useNavigate();
  const [signup, setSignup] = useState({
    email: "",
    password: "",
  });

  const onChange = (e) => {
    setSignup({ ...signup, [e.target.name]: e.target.value });
    console.log(setSignup);
  };

  const buttonclick = (e)=>{
    e.preventDefault();

     if (!signup.email || !signup.password) {
      return toast.error("All fields are required");
    } else {
      signInWithEmailAndPassword(Auth, signup.email, signup.password)
        .then(async (res) => {
          navigateHome("/");
          setIsLogin(true)
          toast.success('Your are in Logout')

        })
        .catch((err) => toast.error(err.message));
    }
  }

  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Login
            </h1>
            <form className="space-y-4 md:space-y-6">
              <div>
                <label
                  for="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="name@company.com"
                  required=""
                  value={signup.email}
                  onChange={onChange}

                />
              </div>
              <div>
                <label
                  for="password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required=""
                  value={signup.password}
                  onChange={onChange}
                />
              </div>

              <button
                type="button"
                class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                onClick={buttonclick}
              >
                Login{" "}
              </button>

              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Not have a account?
                <Link to="/signup">
                  <a className="font-medium text-primary-600 hover:underline dark:text-primary-500">
                    Signup Here
                  </a>
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;
