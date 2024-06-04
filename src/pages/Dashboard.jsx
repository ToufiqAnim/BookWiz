import { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const { user } = useAuth();
  const [userInfo, setUserInfo] = useState();

  useEffect(() => {
    fetch(`https://book-wiz-server.vercel.app/user/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setUserInfo(data));
  }, [user]);

  console.log(userInfo);
  return (

    <div className=" p-10 container border border-gray-200 rounded-lg shadow-lg mx-auto ">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
        <div className="flex  mb-6 md:mb-0">
          <div className="avatar">
            <div className="bg-neutral text-neutral-content rounded-full w-32 h-32">
              {user?.photoURL ? (
                <img
                  src={user?.photoURL}
                  alt="User"
                  className="w-full h-full object-cover rounded-full"
                />
              ) : (
                <span className="text-xs text-center">{user?.displayName}</span>
              )}
            </div>
          </div>
        </div>
        <div className="text-center md:text-left md:col-span-2">
          <h2 className="text-2xl font-bold">{user?.displayName}</h2>

          <div className="text-gray-600">
            <p>Email: {user?.email}</p>
       
            <p>Phone: +123 456 7890</p>
          </div>

          <Link
            to={`/dashboard/profile/edit/${userInfo?._id}`}
            className="btn rounded-none text-white bg-slate-500 hover:bg-slate-600 mt-2"
          >
            Edit Profile
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
