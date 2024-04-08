import React from "react";
import { useAuth } from "./AuthContext";
import Navbar from './Navbar'

const Profile = () => {
    const { user } = useAuth();

    return (
        <>
            <Navbar />
            <div className="container mt-5">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card mb-4">
                            <h5 className="card-header bg-secondary text-white">My Profile</h5>
                            <div className="card-body">
                                <p className="card-text"><strong>Your Name:</strong> {user.name}</p>
                                <p className="card-text"><strong>Your Email:</strong> {user.email}</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <div className="px-2 py-2">
                                    <img src="https://img.freepik.com/free-vector/happy-freelancer-with-computer-home-young-man-sitting-armchair-using-laptop-chatting-online-smiling-vector-illustration-distance-work-online-learning-freelance_74855-8401.jpg?w=900&t=st=1667037491~exp=1667038091~hmac=7c71ea8afc8f3cc8065c5ccc05d105e3c8a7b76f0133016cb210a7882dc19611" className="img-fluid" alt="Profile" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Profile;
