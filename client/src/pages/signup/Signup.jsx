import GenderCheckbox from "./GenderCheckbox";

const Signup = () => {
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          Sign Up <span className="text-blue-500">Chat App</span>
        </h1>
        <form>
          <div>
            <label htmlFor="" className="label p-2">
              <span className="text-base label-text">Full Name</span>
            </label>
            <input
              type="text"
              placeholder="Enter your full name"
              className="w-full input input-bordered h-10"
            />
          </div>

          <div>
            <label htmlFor="" className="label p-2">
              <span className="text-base label-text">Username</span>
            </label>
            <input
              type="text"
              placeholder="Enter Username"
              className="w-full input input-bordered h-10"
            />
          </div>

          <div>
            <label htmlFor="" className="label p-2">
              <span className="text-base label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              className="w-full input input-bordered h-10"
            />
          </div>

        <GenderCheckbox />

          <a href="#" className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block">
            Already have an account?
          </a>

          <div>
            <button className="btn btn-block btn-sm mt-2 bg-blue-600 hover:bg-sky-200 hover:text-teal-800">Sign Up</button>
          </div>

        </form>
      </div>
    </div>
  );
};

export default Signup;












//this is the starter code 

// const Signup = () => {
//   return (
//     <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
//       <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
//         <h1 className="text-3xl font-semibold text-center text-gray-300">
//           Sign Up <span className="text-blue-500">Chat App</span>
//         </h1>
//         <form>
//           <div>
//             <label htmlFor="" className="label p-2">
//               <span className="text-base label-text">Full Name</span>
//             </label>
//             <input
//               type="text"
//               placeholder="Enter your full name"
//               className="w-full input input-bordered h-10"
//             />
//           </div>

//           <div>
//             <label htmlFor="" className="label p-2">
//               <span className="text-base label-text">Username</span>
//             </label>
//             <input
//               type="text"
//               placeholder="Enter Username"
//               className="w-full input input-bordered h-10"
//             />
//           </div>

//           <div>
//             <label htmlFor="" className="label p-2">
//               <span className="text-base label-text">Password</span>
//             </label>
//             <input
//               type="password"
//               placeholder="Enter Password"
//               className="w-full input input-bordered h-10"
//             />
//           </div>

//         <GenderCheckbox />

//           <a href="#" className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block">
//             Already have an account?
//           </a>

//           <div>
//             <button className="btn btn-block btn-sm mt-2 bg-blue-600 hover:bg-sky-200 hover:text-teal-800">Sign Up</button>
//           </div>

//         </form>
//       </div>
//     </div>
//   );
// };
