import React, { useEffect } from "react";
import Layout from "../../components/layout/Layout";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import UsersOrders from "../../components/userOrders/UserOrders";
import { useOrders } from "../../context/OrdersContext";

const Acount = () => {
  const { user, setUser, setIsUserLoggedIn, setToken } = useAuth();

  const {getSpecificUsersOrders,usersOrders}=useOrders();

  const navigate = useNavigate();
  const handleLogout = () => {
    setUser("");
    localStorage.removeItem("user");
    setIsUserLoggedIn(false);
    setToken("");
    navigate("/");
  };

  useEffect(() => {
    getSpecificUsersOrders();
  }, []);
  return (
    <Layout>
      <div className="container mt-[113px] mx-auto py-[100px]">
        <div className="w-[100%] flex flex-col gap-6">
          <button
            className="inline-flex w-[100px] py-2 text-[24px]"
            onClick={handleLogout}
          >
            Logout
          </button>
          <h1 className="text-[26px] text-[#5c5c5c] font-[700]">My account</h1>
          <h1>
            Welcome back, {user.firstname} {user.lastname}
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-9 mt-[60px]">
          <div className="md:col-span-3">
            <h3 className="text-[24px] text-[#5c5c5c] pb-4">My orders</h3>
            <hr className="w-[100%] bg-[#5c5c5c]" />
            <div className="py-10">
              <UsersOrders orders={usersOrders}/>
            </div>
          </div>
          <div>
            <h3 className="text-[24px] text-[#5c5c5c] pb-4">Primary address</h3>
            <hr className="w-[100%] bg-[#5c5c5c]" />

            <div className="py-7">
              <p className="text-[20px] text-[#5c5c5c] ">
                {user.firstname} {user.lastname}
              </p>
              <p className="text-[20px] text-[#5c5c5c] mt-[20px]">
                lahore <br></br>
                Lahore 35004 <br></br>
                Pakistan
              </p>
            </div>

            <button className="__button uppercase w-[80%] mt-[40px]">
              <span>edit address</span>
              <span>edit address</span>
            </button>
          </div>
        </div>
      </div>
      <hr className="w-[100%] h-[1px] bg-[rgba(255, 255, 255, 0.25)]" />
    </Layout>
  );
};

export default React.memo(Acount);

