import auth from "../../Firebase/firebase.config";
import UseTitle from "../Title/UseTitle";

const Profile = () => {

    UseTitle("Profile")
    
    const userInfo = auth.currentUser;
    console.log(userInfo)
    
        return (
            <div>
                <div className="hero bg-base-200">
                    <div className="hero-content flex-col lg:flex-row">
                        <img src={userInfo.photoURL} className="max-w-sm rounded-lg shadow-2xl" />
                        <div>
                            <h1 className="text-2xl font-bold">{userInfo.displayName}</h1>
                            <p className="py-2">{userInfo.email}</p>
                        </div>
                    </div>  
                </div>
                <button className="btn btn-primary mx-auto items-center">Update Profile</button>
            </div>
        );
    };

    export default Profile;