import React, { useEffect } from "react";
import { useAuth } from "../../context/AuthContext";
import { Link, Outlet } from "react-router-dom";

const UserRoute = () => {
  const { checkLogin, isUserLoggedIn } = useAuth();


  useEffect(() => {
    const fetchData = async () => {
      await checkLogin();
    };
    fetchData();
  }, [checkLogin]);

  return isUserLoggedIn ? (
    <Outlet />
  ) : (
    <div className="container mx-auto flex justify-center h-[100vh] items-center">
      <div className="border-[5px] text-center border-dashed max-[300px] p-[100px]">
        <h1 className="text-[26px] text-[800] uppercase">
          you must be login to access this page
        </h1>

        <button className="bg-black text-[#fff] h-[50px] mt-[20px]">
          <Link to="/acount/auth" className="px-[20px]">
            go to login
          </Link>
        </button>
      </div>
    </div>
  )
}

export default React.memo(UserRoute);

