import React, { useState } from "react";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { Link , useNavigate} from "react-router-dom";
import { Auth } from "../Firebase/Firebase";
import { useLogin } from "./Context/Loginn";
import toast from "react-hot-toast";





function Signup() {
 
  const {isLogin, setIsLogin} = useLogin();

  const [signup , setsignup] = useState({
    name : "",
    email :"",
    password:"",
  });

  const handlerchange = (e)=>{
 setsignup({...signup , [e.target.name]:e.target.value})
 console.log(signup);
  }

  const navigateLogin = useNavigate();

const handlerclick =(e)=>{
  e.preventDefault();
  if(!signup.name || !signup.email || !signup.password){
    return 
  }else{
    createUserWithEmailAndPassword(Auth, signup.email, signup.password)
        .then(async (res) => {
          const user = res.user;

          await updateProfile(user, {
            displayName: signup.username,
          });

          navigateLogin("/login");
        })
        .catch((err) => toast.error(err.message));
    }
  }
  return (
    <div>
        <section className="bg-gray-50 dark:bg-gray-900" >
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Sign-Up
              </h1>
              <form className="space-y-4 md:space-y-6" >
                <div>
                  <label
                    for="name"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Your Name
                  </label>
                  <input
                    type="name"
                    name="name"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Enter your email"
                    required=""
                    onChange={handlerchange}
                    value={signup.name}


                  />
                </div>
             

                <div>
                  <label
                    for="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Your Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Enter your email"
                    required=""
                    onChange={handlerchange}
                    value={signup.email}
                    

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
                    placeholder="password"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required=""
                    onChange={handlerchange}
                    value={signup.password}

                  />
                </div>
               
               

                <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" onClick={handlerclick}>Sign up</button>
             
                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                  Already have an account?
                  <Link to ='/login'>
                  <a className="font-medium text-primary-600 hover:underline dark:text-primary-500">
                    Login here
                  </a>

                  </Link>
                 
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
     
  );
  }
export default Signup;




