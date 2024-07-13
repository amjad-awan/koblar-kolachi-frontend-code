import React, { useEffect } from "react";
import { useAuth } from "../../context/AuthContext";
import { Link, Outlet } from "react-router-dom";
import Loader from "../../components/loader/Loader";

const UserRoute = () => {
  const { checkLogin, isLoading, isUserLoggedIn } = useAuth();

  useEffect(() => {
    const fetchData = async () => {
      await checkLogin();
    };
    fetchData();
  }, [checkLogin]);

  if (isLoading) {
    return <Loader />;
  }

  if (!isUserLoggedIn) {
    return (
      <div className="container mx-auto flex justify-center h-[100vh] items-center">
        <div className="border-[5px] text-center border-dashed max-[300px] p-[100px]">
          <h1 className="text-[26px] text-[800] uppercase">
            You must be logged in to access this page
          </h1>
          <button className="bg-black text-[#fff] h-[50px] mt-[20px]">
            <Link to="/account/auth" className="px-[20px]">
              Go to login
            </Link>
          </button>
        </div>
      </div>
    );
  }

  return <Outlet />;
};

export default React.memo(UserRoute);
