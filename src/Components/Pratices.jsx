// // import { BrowserRouter, Routes  , Route} from 'react-router-dom';
// // import './App.css';
// // import Navbr from './Components/Navbar/Navbr';
// // import Signup from './Components/Signup';
// // import Login from './Components/Login';
// // import Home from './Components/Navbar/Home';
// // import { Toaster } from 'react-hot-toast';

// // function App() {
// //   return (
// //     <BrowserRouter>
// //     <Navbr/>
// //     <Routes>
// //     <Route path='/home' element={<Home/>}/>
      
// //       <Route path='/signup' element={<Signup/>}/>
// //       <Route path='/login' element={<Login/>}/>
// //     </Routes>
// //     <Toaster />
// //     </BrowserRouter>
   
// //   );
// // }

//  export default App;

// import React, { useState } from 'react' 
// import { CiMenuFries } from "react-icons/ci";
// import { RxCross1 } from "react-icons/rx";
// function App() {
//    const [isopen , setisopen] = useState(false);

   
// return (
//      <div className=' bg-[#1e40af] w-screen mx-auto flex justify-between  items-center p-6 fixed top-0 p'>
//      <div>
//         <h4 className="text-white text-3xl text-bold">My Website</h4>
//      </div >
    
//       <div className='hidden md:block'>
//     <div className='flex gap-6 cursor-pointer '>
//        <div className='text-2xl text-white'>Home</div>
//        <div className='text-2xl text-white'>Section</div>
//        <div className='text-2xl text-white'>About</div>
//        <div className='text-2xl text-white'>Summary</div>
//     </div>
//     </div>


// {
//    isopen?<div className=''>
//    <div className='flex  flex-col mt-[46px] items-center absolute gap-8 cursor-pointer  h-screen w-[500px] bg-orange-200 z-10 right-0 text-center'>
//       <div className='text-2xl text-white mt-8'>Home</div>
//       <div className='text-2xl text-white mt-8'>Section</div>
//       <div className='text-2xl text-white mt-8'>About</div>
//       <div className='text-2xl text-white mt-8'>Summary</div>
//    </div>
//    </div>:
//    <> </>
// }
   


     
//  <div  className='gap-3 hidden md:block'>
//         <button type="button" class="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 " >  Login </button>
//      </div>
// {/* This is a font osum */}
//      <div className='md:hidden cursor-pointer' >
//       <button className = 'text-3xl text-white'onClick={()=>setisopen(!isopen)}>
//        {
        
//         isopen?
//         <RxCross1 size={30}/>:
        
//         <CiMenuFries /> 
        

//        }
//       </button>



//     </div>     </div>
//   )
// }

// export default App









