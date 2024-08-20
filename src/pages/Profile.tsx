import React from "react";
import profilePhoto from "../assets/osora-pressing-2.jpg";

const Profile: React.FC = () => {
  return (
    <div className="flex justify-center bg-red-400 pt-20 bg-custom-radial h-[100vh]">
      <div className="flex flex-col items-center">
        <div className="flex items-center gap-2 bg-gray-300 p-6 rounded-xl">
          <div className="rounded-full h-32 w-32 overflow-hidden">
            <img src={profilePhoto} alt="profile Image" />
          </div>
         <div>
         <p className="text-xl font-bold">Osorachukwu</p>
          <p>Phone: 08100298300</p>
          <p>Email: osorachukwu.ezewi@gmail.com</p>
         </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
