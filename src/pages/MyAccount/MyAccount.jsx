import React, { useEffect, useState } from 'react';
import './Profile.css';
import myaccount from '../../assets/myaccount_profile.png';
import myaccount_logout from '../../assets/myaccount_logout.png';
import myaccount_name from '../../assets/icon_myaccount.png';
import myaccount_phone from '../../assets/myaccount_phone.png';
import myaccount_email from '../../assets/myaccount_email.png';
import myaccount_edit_icon from '../../assets/edit_icon.png';
import { BASE_URL, GET_USER_DETAIL_ENDPOINT } from "../../utills/apiconstants";
import { useNavigate } from 'react-router-dom';

const Profile = () => {
    const [token, setToken] = useState('');
    const [name, setName] = useState('');
    const [mobileNumber, setMobileNumber] = useState('');
    const [email, setEmail] = useState('');
    const navigate = useNavigate();

    // Function to fetch token and storedNumber from localStorage
    const fetchToken = () => {
        try {
            const storedToken = localStorage.getItem('token');
            const storedNumber = localStorage.getItem('mobileNumber');
            console.log(storedToken, "storedtoken123445");
            console.log(storedNumber);

            if (storedToken) {
                setToken(storedToken);
            } else {
                console.log('Token not found in localStorage');
            }

            if (storedNumber) {
                setMobileNumber(storedNumber);
            } else {
                console.log('Mobile number not found in localStorage');
            }
        } catch (error) {
            console.error('Error retrieving token:', error);
        }
    };

    // Function to fetch user details
    const fetchUserAccount = async () => {
        try {
            const response = await fetch(BASE_URL + GET_USER_DETAIL_ENDPOINT, {
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    'authorization': token
                },
            });

            if (response.ok) {
                const userData = await response.json();
                setName(userData.data.name || '');
                setEmail(userData.data.email || '');
                localStorage.setItem('userID', userData.data._id);
            } else {
                const errorData = await response.json();
                console.log(`Error fetching user account: ${errorData.message}`);
            }
        } catch (error) {
            console.error('Error fetching user account:', error);
        }
    };

    useEffect(() => {
        fetchToken();
    }, []);

    useEffect(() => {
        if (token) {
            fetchUserAccount();
        }
    }, [token]);

    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('mobileNumber');
        localStorage.removeItem('userID');
        navigate('/login');
    };

    return (
        <>
            <div className="wrapper">
                <div className="profile-container">
                    <div className="profile-picture">
                        <img className="profile-img" src={myaccount} alt="Profile"/>
                    </div>
                    <div className="input-container">
                        <div className="input-field">
                            <img className="input-icon" src={myaccount_name} alt="Profile"/>
                            <input
                                style={{color: "black", marginLeft: '10px'}}
                                type="text"
                                placeholder="Enter Name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                            <i className="edit-icon"> <img src={myaccount_edit_icon}/> </i>
                        </div>
                        <div className="input-field">
                            <img className="input-icon" src={myaccount_phone} alt="Profile"/>
                            <input
                                style={{color: "black", marginLeft: '10px'}}
                                type="text"
                                placeholder="Enter Phone"
                                value={mobileNumber}
                                readOnly
                            />
                        </div>
                        <div className="input-field">
                            <img className="input-icon" src={myaccount_email} alt="Profile"/>
                            <input
                                style={{color: "black", marginLeft: '10px'}}
                                type="text"
                                placeholder="Enter Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <i className="edit-icon"><img src={myaccount_edit_icon}/></i>
                        </div>
                    </div>
                    <div className="button-container">
                        <button className="update-button">Update Profile</button>
                        <button className="logout-button" onClick={handleLogout}>
                            <i className="logout-icon">
                                <img className="logout-img" src={myaccount_logout} alt="Logout"/>
                            </i>
                            Log Out
                        </button>
                    </div>
                </div>
            </div>


        </>
    );
};

export default Profile;
