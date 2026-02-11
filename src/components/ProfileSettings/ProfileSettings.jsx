import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import axios from "axios";
import toast from "react-hot-toast";

export default function ProfileSettings() {
    const [profile, setProfile] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        gender: "",
        // phone: "",
    });
    const [photo, setPhoto] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const token = localStorage.getItem("token");
                const userId = localStorage.getItem("userId");

                // جلب كل اليوزرات
                const res = await axios.get("/api/v1/user/", {
                    headers: { Authorization: `USER ${token}` },
                });

                // نجيب اليوزر الحالي بالـ userId
                const currentUser = res.data.data.users.find(u => u._id === userId);

                if (currentUser) {
                    setProfile({
                        firstName: currentUser.firstName,
                        lastName: currentUser.lastName,
                        email: currentUser.email,
                        password: "currentUser.password",
                        gender: currentUser.gender,
                        //  phone: currentUser.phone,
                    });

                    setPhoto(currentUser.cloudProfileImage?.secure_url || null);
                }
            } catch (err) {
                console.error("Error fetching profile:", err);
                toast.error("Failed to load profile data");
            }
        };

        fetchProfile();
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProfile((prev) => ({ ...prev, [name]: value }));
    };


    const handlePhotoChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setPhoto(URL.createObjectURL(file));
        }
    };


    const handleUpdate = async () => {
        setLoading(true);
        try {
            const token = localStorage.getItem("token");

            await axios.patch("/api/v1/user/",
                profile,
                { headers: { Authorization: `USER ${token}` } }
            );

            toast.success("Profile updated successfully!");
        } catch (err) {
            console.error("Error updating profile:", err);
            toast.error("Failed to update profile");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="max-w-2xl mx-auto mt-10 flex gap-8  mb-20">

<div className="flex flex-col w-1/4 gap-4">
  <div className="w-44 h-44 rounded-xl overflow-hidden border-[1px] border-gray-300">
    <img
      src={
        photo ||
        "https://i.pinimg.com/736x/9e/d9/fc/9ed9fc6f5360d475c83e1201ad2a909c.jpg"
      }
      alt="Profile"
      className="w-full h-full object-cover rounded-xl"
    />
  </div>
</div>


            {/* Main Form */}
            <div className="flex-1 bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold mb-10 text-[#0d4369]">Account Details</h2>
                <div className="grid grid-cols-1 gap-4">
                    <div>
                        <label className="block text-sm font-medium mb-1 text-[#156faf]">
                            First Name
                        </label>
                        <input
                            type="text"
                            name="firstName"
                            value={profile.firstName}
                            onChange={handleChange}
                            className="w-[280px] border border-gray-300 rounded px-3 py-2
               focus:border-[#a1c5df] focus:outline-none focus:ring-1 focus:ring-[#a1c5df]"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium mb-1 text-[#156faf]">Last Name </label>
                        <input
                            type="text"
                            name="lastName"
                            value={profile.lastName}
                            onChange={handleChange}
                            className="w-[280px] border border-gray-300 rounded px-3 py-2
               focus:border-[#a1c5df] focus:outline-none focus:ring-1 focus:ring-[#a1c5df]"
                        />
                    </div>
                    <div>
                     <label className="block text-sm font-medium mb-1 text-[#156faf]">Email </label>

          
                    <input
                        type="email"
                        name="email"
                        value={profile.email}
                        onChange={handleChange}
                        className="w-[280px] border border-gray-300 rounded px-3 py-2 
             focus:border-[#a1c5df] focus:outline-none focus:ring-1 focus:ring-[#a1c5df]"
                    />
          </div>


                    <div>
                        <label className="block text-sm font-medium mb-1 text-[#156faf]">Password </label>
                        <input
                            type="password"
                            name="password"
                            value={profile.password}
                            onChange={handleChange}
                            className="w-[280px] border border-gray-300 rounded px-3 py-2
               focus:border-[#a1c5df] focus:outline-none focus:ring-1 focus:ring-[#a1c5df]"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium mb-1 text-[#156faf]">Gender</label>
                        <select
                            name="gender"
                            value={profile.gender}
                            onChange={handleChange}
                            className="w-[280px] border border-gray-300 rounded px-3 py-2 mb-5
               focus:border-[#a1c5df] focus:outline-none focus:ring-1 focus:ring-[#a1c5df]"
                        >
                            <option value="MALE">Male</option>
                            <option value="FEMALE">Female</option>
                            <option value="OTHER">Other</option>
                        </select>
                    </div>
                </div>

                {/* <button
          onClick={handleUpdate}
          disabled={loading}
          className="mt-6 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded font-semibold"
        >
          {loading ? "Updating..." : "Update"}
        </button> */}
            </div>

{/* 
            <div>
                  <MessagesList/>
            </div> */}
        </div>
    );
}
