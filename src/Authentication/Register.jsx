
// import { useContext } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { authContext } from "../Providers/AuthProvider";

// import { ToastContainer, toast } from 'react-toastify';


// const Register = () => {

//     const naviGate = useNavigate()
//     const { createUser } = useContext(authContext)

//     const handleRegister = e => {
//         e.preventDefault()

//         const form = new FormData(e.currentTarget)

//         const name = form.get('name')
//         const email = form.get('email')
//         const password = form.get('password')

//         console.log(name, email, password)

//         createUser(email, password)
//         .then(result => {
//             console.log(result)
//             naviGate('/')
//             toast('User Registered Successfully')
//         })
//         .catch(error => {
//             console.error(error)
//         })

//     }
    
//     return (
//         <div>
//             <div>
//                 <div>
//                     <div className="hero min-h-screen bg-base-200">
//                         <div className="hero-content flex-col ">
//                             <div className="text-center ">
//                                 <h1 className="text-3xl font-bold">Register Your Account</h1>
//                             </div>
//                             <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
//                                 <form onSubmit={handleRegister} className="card-body">
//                                     <div className="form-control">
//                                         <label className="label">
//                                             <span className="label-text">Name</span>
//                                         </label>
//                                         <input type="text" name="name" placeholder="name" className="input input-bordered" required />
//                                     </div>
//                                     <div className="form-control">
//                                         <label className="label">
//                                             <span className="label-text">Photo url</span>
//                                         </label>
//                                         <input type="url" name="photoUrl" placeholder="photo url" className="input input-bordered" required />
//                                     </div>
//                                     <div className="form-control">
//                                         <label className="label">
//                                             <span className="label-text">Email</span>
//                                         </label>
//                                         <input type="email" name="email" placeholder="email" className="input input-bordered" required />
//                                     </div>
//                                     <div className="form-control">
//                                         <label className="label">
//                                             <span className="label-text">Password</span>
//                                         </label>
//                                         <input type="password" name="password" placeholder="password" className="input input-bordered" required />
//                                         <label className="label">
//                                             <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
//                                         </label>
//                                     </div>
//                                     <div className="form-control mt-6">
//                                         <button className="btn btn-primary">Register</button>
//                                     </div>
//                                     <div>
//                                         <p>Already have account <Link to='/login'>
//                                             <button className="btn btn-outline btn-success">Login</button>
//                                         </Link> </p>
//                                     </div>
//                                 </form>
//                             </div>
//                         </div>
//                     </div>
//                     <ToastContainer></ToastContainer>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Register;







import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { authContext } from "../Providers/AuthProvider";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {

    const Navigate = useNavigate();
    const { createUser } = useContext(authContext);
    const [passwordError, setPasswordError] = useState(null);

    const handleRegister = e => {
        e.preventDefault();

        const form = new FormData(e.currentTarget);
        const name = form.get('name');
        const email = form.get('email');
        const password = form.get('password');
        const photoUrl = form.get('photoUrl');
        console.log(name, email, password,photoUrl)
        // Password verification
        const hasUppercase = /[A-Z]/.test(password);
        const hasLowercase = /[a-z]/.test(password);
        const hasValidLength = password.length >= 6;

        if (!hasUppercase || !hasLowercase || !hasValidLength) {
            setPasswordError("Password must contain at least one uppercase letter, one lowercase letter, and have a minimum length of 6 characters.");
            return;
        }

        createUser(email, password)
            .then(result => {
                console.log(result);
                toast.success("Registration successful!");
                Navigate('/')

            })
            .catch(error => {
                console.error(error);
                toast.error("Registration failed. Please try again later.");
            });
    }

    return (
        <div>
            <div>
                <div>
                    <div className="hero min-h-screen bg-base-200">
                        <div className="hero-content flex-col">
                            <div className="text-center">
                                <h1 className="text-3xl font-bold">Register Your Account</h1>
                            </div>
                            <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                                <form onSubmit={handleRegister} className="card-body">
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Name</span>
                                        </label>
                                        <input type="text" name="name" placeholder="Name" className="input input-bordered" required />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Photo URL</span>
                                        </label>
                                        <input type="url" name="photoUrl" placeholder="Photo URL" className="input input-bordered" required />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Email</span>
                                        </label>
                                        <input type="email" name="email" placeholder="Email" className="input input-bordered" required />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Password</span>
                                        </label>
                                        <input type="password" name="password" placeholder="Password" className="input input-bordered" required />
                                        {passwordError && <p className="text-xs text-red-500">{passwordError}</p>}
                                        <label className="label">
                                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                        </label>
                                    </div>
                                    <div className="form-control mt-6">
                                        <button type="submit" className="btn btn-primary">Register</button>
                                    </div>
                                    <div>
                                        <p>Already have an account? <Link to='/login'>
                                            <button className="btn btn-outline btn-success">Login</button>
                                        </Link> </p>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <ToastContainer></ToastContainer>
            </div>
        </div>
    );
};

export default Register;
