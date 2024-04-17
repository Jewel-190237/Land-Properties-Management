import auth from "../../Firebase/firebase.config";
import UseTitle from "../Title/UseTitle";
import userPhoto from '../../assets/user.png'


const Profile = () => {


    UseTitle("Profile")

    const userInfo = auth.currentUser;
    console.log(userInfo)

    return (
        <div>
            <div className="card bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    {
                        userInfo.photoURL ?
                            <img src={userInfo.photoURL} alt="User" className="rounded-xl" />
                            :
                            <img alt="user" src={userPhoto} />
                    }

                </figure>
                <div className="card-body items-center text-center">
                    {
                        userInfo.displayName ?
                            <h2 className="card-title">{userInfo.displayName}</h2>
                            :
                            <h2 className="card-title">User Name</h2>

                    }
                    <p>{userInfo.email}</p>
                    <div className="card-actions">
                        <button className="btn btn-primary">Update Profile</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;