import { Link } from "react-router-dom";

const Login = () => {

    const handleSignIn = () => {

    }

    const handlesSignInWithGoogle = () => {
        
    }
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col ">
                    <div className="text-center ">
                        <h1 className="text-5xl font-bold">Login now!</h1>

                    </div>
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSignIn} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                            <div>
                                <p className="text-center"> or</p>
                            </div>
                            <div>
                            <p> Login with  
                                <button onClick={handlesSignInWithGoogle} className="btn btn-outline ml-4 btn-success">Google</button>
                                </p>
                            </div>
                            <div>
                                <p>New Here ? please <Link to='/register'>
                                    <button className="btn btn-outline btn-success">Register</button>
                                </Link> </p>
                                
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;